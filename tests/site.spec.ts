import { test, expect, type Page } from '@playwright/test';

// Main pages to check at every screen size.
const PAGES = ['/', '/services', '/work', '/about', '/contact', '/privacy'];

const isMobileLayout = (page: Page) => (page.viewportSize()?.width ?? 1280) < 768; // Tailwind `md`

for (const path of PAGES) {
  test(`${path} loads cleanly and fits the screen`, async ({ page }, testInfo) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    const response = await page.goto(path);
    expect(response?.status(), 'page should return 200').toBe(200);
    await expect(page.locator('h1').first()).toBeVisible();

    // No sideways scrolling: the classic mobile layout bug.
    const overflow = await page.evaluate(() => {
      const doc = document.documentElement;
      return doc.scrollWidth - doc.clientWidth;
    });
    expect(overflow, 'page is wider than the screen (horizontal scroll)').toBeLessThanOrEqual(1);

    expect(errors, 'JavaScript errors in the console').toEqual([]);

    // Full-page screenshot attached to the report for visual review.
    await testInfo.attach(`${testInfo.project.name}${path === '/' ? '-home' : path.replace(/\//g, '-')}`, {
      body: await page.screenshot({ fullPage: true }),
      contentType: 'image/png',
    });
  });
}

test('header call-to-action is reachable and goes to contact', async ({ page }, testInfo) => {
  await page.goto('/');
  const header = page.locator('header');

  if (isMobileLayout(page)) {
    const menuButton = header.getByRole('button', { name: 'Toggle menu' });
    await expect(menuButton).toBeVisible();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    const menu = page.locator('#mobile-menu');
    await expect(menu).toBeVisible();
    const cta = menu.locator('a[href="/contact"]');
    await expect(cta).toBeVisible();

    // The button label should sit on one line inside the menu.
    const box = await cta.boundingBox();
    expect(box && box.height, 'mobile CTA label wraps onto two lines').toBeLessThan(60);

    await testInfo.attach(`${testInfo.project.name}-mobile-menu-open`, {
      body: await page.screenshot(),
      contentType: 'image/png',
    });
  } else {
    const cta = header.locator('a[href="/contact"]').filter({ visible: true }).first();
    await expect(cta).toBeVisible();

    // All nav items plus the CTA should fit on one row, not wrap.
    const navRow = header.locator('nav > div').first();
    const rowBox = await navRow.boundingBox();
    expect(rowBox && rowBox.height, 'desktop header wraps onto two lines').toBeLessThanOrEqual(64);

    await testInfo.attach(`${testInfo.project.name}-header`, {
      body: await header.screenshot(),
      contentType: 'image/png',
    });
  }
});

test('nav links all resolve', async ({ page, request }) => {
  await page.goto('/');
  const hrefs = await page
    .locator('header a[href^="/"]')
    .evaluateAll((links) => [...new Set(links.map((a) => a.getAttribute('href')!))]);
  expect(hrefs.length).toBeGreaterThan(0);
  for (const href of hrefs) {
    const res = await request.get(href);
    expect(res.status(), `${href} should return 200`).toBe(200);
  }
});
