# Regenerating image templates

Three standalone HTML templates in `public/` produce the site's social and LinkedIn
images. They are screenshotted by hand and are not part of the build.

| Template | Div to capture | Output (2x) | Used for |
|----------|----------------|-------------|----------|
| `og-image-template.html` | `.og-image` | 1200x630 | Social preview (`og-image.png`) |
| `linkedin-profile-banner-template.html` | `.banner` | 1584x396 | LinkedIn personal profile banner |
| `linkedin-company-cover-template.html` | `.cover` | 1128x191 | LinkedIn company Page cover |

## Method (same for all three)

1. Open the template (in `public/`) in Chrome.
2. Right-click the image, choose **Inspect**.
3. In the Elements panel, select the div from the table (`.og-image`, `.banner` or `.cover`).
4. Right-click it, choose **Capture node screenshot**.
5. The saved PNG is the finished image.

Each div is sized at half the target and captured at 2x, so on a retina Mac the output
lands at the table dimensions automatically.

## Notes

- For the social preview, rename the capture to `og-image.png` and replace it in
  `public/` (`BaseLayout.astro` points the `og:image` tag at it). LinkedIn images are
  uploaded straight to LinkedIn.
- Edit headlines, taglines and colours directly in each template's HTML/CSS. The
  LinkedIn templates carry SAFE ZONE comments worth reading before moving text.
- Each template has a commented-out dark variant in its `<style>` block.
