# Ulcerative Colitis Website

In this website I hve decided to document my experience with Ulcerative Colitis, an autoimmune disease targeting the colon, and share some useful tips, meals, and advice that helped me in recovery. I have also included interactive features to help make the site more accessible.

## Interactive Features

This section highlights the interactive features I have chosen for the site. Both features operate with keyboard accessibility.

### Image Size Scaling

To start, I have implemented image size scaling for the site. When a image is hovered over, it will scale to 120%, and will return to a 100% scale when the the mouse is moved off. I implemented this using two functions in Javascript: largerImage() and returnNorm(). The first would be to scale the image by 1.2 while the second would be to scale to 100%. The functions work very similarly by utilizing style.scale. By using i (the target image in this case), and setting i.style.scale equal to a percentage value represented as a string, the function can allow the target image to be scaled to that percent. I then went to the each of the three images in the site and added the following: 
```
onmouseover="largerImage(this)" onmouseout="returnNorm(this)"
```
This would enable the functions to operate when the mouse is hovering over the image or when the mouse is not hovering over the image.

While testing, I noticed that I was unable to tab into the images, let alone notice a change in scale using keyboard. To address these issues I added the following:
```
onfocus="largerImage(this)" onfocusout="returnNorm(this)" tabindex="0"
```

The "onfocus" event mimics the "onmouseover" event and "onfocusout" mimics "onmouseout". With these events along with setting "tabindex" to 0, I was able to allow for keyboard accessibility in the site.

### Background and Text Color Change

The page also allows for changing the background color. I included a "configuration" dropdown menu with an option to change the site's color. At the current moment, the color's shift between a yellow color (#F0E68C) and white (#FFFFFF). Additionally, it also shifts the text color between a gray tone (#696969) and black (#000000). These values are saved and loaded when a new page is selected. This was done through using session storage. When the "LIGHT" mode (background color white and black text) is switched to the DARK mode (background color yellow and gray text), these values are saved in the session storage and loaded into the body using "onload(function)" in the body tag for each page and vice-versa. When put all together, the configuration menu with the "Background" bar allows for toggling between two colors for background and text color that are saved for each page being used.

NOTE: The configuration menu is intentionally included only on the home page. This was done to leave the other pages to serve only the specific content.

### Notes on Testing

1. Verified that the site works with keyboard only
2. Passed automated testing using the WAVE plugin (no errors, contrast errors, or alerts)
3. Verified that the site is usable up to 400% magnification and on mobile view
4. Verified that the site is fully functional when stylesheets are disabled
5. Verified that the site is fully functional (except for background/text color toggle in configuration tab) when Javascript scripts are disabled
6. Verified that the site is fully functional when images are disabled (alt text is disabled instead)