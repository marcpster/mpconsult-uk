# Regenerating the OG image

The social preview image is `og-image.png`. To regenerate it from `og-image-template.html`:

1. Open `og-image-template.html` in Chrome.
2. Right-click the image, choose **Inspect**.
3. In the Elements panel, select the `<div class="og-image">` element.
4. Right-click it, choose **Capture node screenshot**.
5. Rename the saved file to `og-image.png` and replace the existing one.

The template is 600x315, captured at 2x to give the standard 1200x630 OG image (on a
retina Mac the 2x is automatic). Edit the headline, tagline or colours directly in the
template's HTML/CSS.
