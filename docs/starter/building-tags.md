---
sidebar_position: 1
---

# Builiding Tags

### Building  Paragraphs
The ParagraphBuilder allows you to effortlessly create paragraphs of text. In the provided Java code, a simple paragraph is constructed with the text, "This is just a simple Paragraph." The resulting paragraph content can be easily embedded into HTML using the HtmlBuilder, making it a useful tool for structuring textual content in your web applications.

```java
ParagraphBuilder paragraphBuilder = ParagraphBuilder.builder().paragraph("This is just simple Paragraph").build();
String paragraphContent = HtmlBuilder.builder().body(BodyBuilder.builder().paragraph(paragraphBuilder).build()).build();
```

### Building  Links
With the AhrefBuilder, you can efficiently generate HTML links. In the given code snippet, an anchor (a) element is constructed with the href attribute set to "#", and the link text is defined as "url details." This enables you to create hyperlinks in your HTML content with ease, providing valuable navigation for your users.
```java
AhrefBuilder ahrefBuilder = AhrefBuilder.builder().ahref("#", "url details").build();
String ahrefContent = HtmlBuilder.builder().body(BodyBuilder.builder().ahref(ahrefBuilder).build()).build();
```

### Building Images
The ImageBuilder simplifies the process of incorporating images into your HTML documents. Here, an image element is created with the src attribute pointing to a specific image URL, and additional image details are provided. This allows you to seamlessly integrate images into your web content, enhancing its visual appeal and engagement.

```java
ImageBuilder imageBuilder = ImageBuilder.builder().src("https://images.unsplash.com/photo-1682685797332-e678a04f8a64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60", "image details").build();
String imageContent = HtmlBuilder.builder().body(BodyBuilder.builder().image(imageBuilder).build()).build();
```

### Building Headings
The HeadingBuilder is designed for generating headings in HTML documents. In this code snippet, a heading with the content "heading content" is generated as a level 1 heading (H1). You can easily customize the heading level and text, making it a convenient tool for structuring and organizing your web page's content. Headings are crucial for improving document structure and accessibility.
```java
HeadingBuilder headingBuilder = HeadingBuilder.builder().heading("heading content", Heading.HEADING_1).build();
String headingContent = HtmlBuilder.builder().body(BodyBuilder.builder().heading(headingBuilder).build()).build();
```

### Building Tables
The provided Java code creates a table structure using a builder pattern:

- TableBuilder: The top-level builder initializes the creation of an HTML table.

- TableRowBuilder: Within the table, a table row is built using this builder.

- TableDataBuilder: Each table row contains table data cells. Here, a table data cell is constructed.

- HeadingBuilder: Inside one of the table data cells, a heading element is created. The heading has the text "test heading" and is styled with a specific color (#333). This code snippet demonstrates how to structure a table with a heading.

- ParagraphBuilder: In another table data cell, a paragraph is generated with the text "Test Paragraph". This shows how to add paragraphs within table cells.

This code segment is a useful example of how to create structured HTML tables using a builder pattern, making it easier to construct complex HTML elements programmatically.
#### HTML Table Structure with Builder Pattern

```java
TableBuilder tableBuilder = TableBuilder.builder()
        .tableRow(TableRowBuilder.builder()
                .tableData(TableDataBuilder.builder()
                        .table(TableBuilder.builder()
                                .tableRow(TableRowBuilder.builder()
                                        .tableData(
                                                TableDataBuilder.builder()
                                                        .heading(HeadingBuilder.builder()
                                                                .style("style", "color: #333;")
                                                                .heading("test heading", Heading.HEADING_1)
                                                                .build()).build())
                                        .build())
                                .tableRow(TableRowBuilder.builder()
                                        .tableData(
                                                TableDataBuilder.builder()
                                                        .paragraph(ParagraphBuilder.builder().paragraph("Test Paragraph").build())
                                                        .build())
                                        .build())
                                .build())
                        .build())
                .build())
        .build();
```

### Building DIV

This Java code snippet showcases the creation of an HTML div element encapsulating a paragraph of text using a builder pattern:

DivBuilder: The code initiates a DivBuilder, which is a builder for constructing HTML div elements. This builder enables the creation and customization of the div.

ParagraphBuilder: Inside the div, a paragraph is constructed using a ParagraphBuilder. This paragraph is defined with the content "test paragraph inside div."

Building the Div: The div is assembled by chaining the paragraph builder within the div builder. This process integrates the paragraph into the div element.


```java
DivBuilder divBuilder = DivBuilder.builder()
                .paragraph(ParagraphBuilder.builder().paragraph("test paragraph inside div").build())
                .build();
        String divContent = HtmlBuilder.builder().body(BodyBuilder.builder().div(divBuilder).build()).build();
```