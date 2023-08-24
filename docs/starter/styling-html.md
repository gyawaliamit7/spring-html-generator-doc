---
sidebar_position: 2
---

# Styling 

We can style any of the elements and tags in HTML using the builder pattern.
In this following java example, an image element is styled using a builder pattern:

- ImageBuilder: The code begins by creating an ImageBuilder, designed for constructing HTML Img elements. It defines various attributes and styles for the image.

- Image Attributes: Within the builder, attributes like src, alt, width, and height are set to specify the image source, alternative text, dimensions, and styling.

- Styling with CSS: The style method allows for the addition of inline CSS styles to the image. In this case, the display: block; style is applied.

- Building the Image: The image is assembled by chaining the various attributes and styles within the image builder.

- HTML Generation: Using the HtmlBuilder, the image element is embedded into an HTML body structure, which prepares it for use in a complete HTML document.

This code snippet showcases how to create and style an HTML image element programmatically, offering flexibility in customizing the appearance of images within web content.
### Styling

```java
 ImageBuilder imageBuilder = ImageBuilder.builder()
                .src("https://via.placeholder.com/600x200", "placeholder")
                .attribute("alt", "placeholder")
                .attribute("width", "200")
                .attribute("height", "auto")
                .style("style", "display: block;")
                .build();
String imageContent = HtmlBuilder.builder().body(BodyBuilder.builder().image(imageBuilder).build()).build();
```



