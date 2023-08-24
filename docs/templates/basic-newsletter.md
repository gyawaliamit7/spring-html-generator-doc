---
sidebar_position: 2
---

# HTML Email Template - Email Newsletter
This HTML email template is designed for creating email newsletters that can be used to share company news, updates, or other informational content. It features a clean and basic layout suitable for a wide range of newsletter purposes.

![Email Newsletter Template](https://github.com/gyawaliamit7/spring-html-generator/assets/34220616/aca3ad45-3721-4c84-8e81-0e174ba186cd)


## Usage Code:

```java
public static void main(String[] args) {

        Template newsletterTemplate = TemplateFactory.getTemplate(TemplateName.NEWSLETTER_BASIC);
        String newsletterHtml = newsletterTemplate.generate(generateNewsLetterContent());
        System.out.println(newsletterHtml);
}

  private static Content generateNewsLetterContent() {
        Content mainContent = new Content();
        mainContent.setTitle("Your Newsletter");

        List<Content> featureContent = getFeatureContents();
        mainContent.setContentList(featureContent);
        mainContent.setFooterButtonContent("Unsubscribe");
        mainContent.setFooterButtonContentLink("#");
        List<String> footerNotes = new ArrayList<>();
        footerNotes.add("&copy; 2023 Your Company |  ");
        mainContent.setFooterNotes(footerNotes);
        return mainContent;
    }

    private static List<Content> getFeatureContents() {
        List<Content> contents = new ArrayList<>();
        contents.add(new Content(
                "Sample Content 1",
                Arrays.asList("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"),
                "Learn More",
                "https://example.com/learnmore1",
                "https://via.placeholder.com/600x200",
                "Image 1",
                "Footer Button",
                "https://example.com/footerbutton1"
        ));
        contents.add(new Content(
                "Sample Content 2",
                Arrays.asList("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"),
                "Click Here",
                "https://example.com/clickhere",
                "https://via.placeholder.com/600x200",
                null,
                "Footer Action",
                "https://example.com/footeraction"
        ));

        return contents;
    }
```
The provided Java code demonstrates how to use this email newsletter template within your application:

1. Generating the Newsletter HTML: The code creates an instance of the Template for the newsletter using TemplateFactory.getTemplate() and generates the HTML content using the generateNewsLetterContent() method.

2. Content Generation: The generateNewsLetterContent() method populates the newsletter with sample content, including a title, featured content, footer button, and footer notes. The featured content is retrieved from the getFeatureContents() method.

3. Featured Content: The getFeatureContents() method generates sample featured content, each including a title, description, call-to-action button, image, and footer button or action. You can customize this content to include your own news or updates.

4. HTML Output: The generated HTML content for the newsletter is printed to the console.

5. You can find the complete source code for this HTML email newsletter template in the following Java class:

[NewsLetterBasicTemplate.java](https://github.com/gyawaliamit7/spring-html-generator/tree/main/src/main/java/com/gyawaliamit/spring/html/generator/templates/email/NewsLetterBasicTemplate.java)

Feel free to use this template as a foundation for creating your own email newsletters and customize it to suit your specific newsletter content and branding needs.




