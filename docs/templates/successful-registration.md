---
sidebar_position: 1
---

# TML Email Template - Successful Registration

This HTML email template is designed for sending a confirmation message to users upon a successful registration. It features a clean and straightforward layout that's suitable for various types of user registration notifications.
![Email Template Screenshot](https://github.com/gyawaliamit7/spring-html-generator/assets/34220616/3c1c6099-9f57-4c1f-8148-6d56673b822f)


## Usage Code:

The provided Java code showcases how to use this email template within your application. It utilizes a template generation factory (TemplateFactory) to create the registration success email template and populates it with sample content using the generateRegistrationContent method. You can adapt this code to send registration success emails in your application by replacing the sample content with actual user data and integrating it with your email sending mechanism.

```java
public static void main(String[] args) {

    // Generate registration HTML
    Template registrationTemplate = TemplateFactory.getTemplate(TemplateName.REGISTRATION_SUCCSS_BASIC);
    String html = registrationTemplate.generate(generateRegistrationContent());
    System.out.println(html);
}

 public static Content generateRegistrationContent() {
        Content content = new Content();
        content.setTitle("Welcome to Our Portal");

        List<String> descriptionList = new ArrayList<>();
        descriptionList.add("Thank you for registering with us. Your account has been successfully registered.");
        descriptionList.add("Please feel free to reach out to us for any questions or concerns regarding our services.");
        descriptionList.add("To get started, please click the button below:");
        content.setButtonContent("Get Started");
        content.setButtonLink("https://images.unsplash.com");
        content.setDescription(descriptionList);
        content.setImageUrl("https://images.unsplash.com/photo-1563694983011-6f4d90358083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80");
        content.setImageContent("Image Caption");

        List<String> footerNotes = new ArrayList<>();
        footerNotes.add("If you have any questions or need assistance, feel free to contact us.");
        footerNotes.add("Best regards,<br> Your Company Name ");
        content.setFooterNotes(footerNotes);
        return content;
    }
```


This email template is a helpful starting point for creating professional and visually appealing registration confirmation emails for your users.


You can access the complete source code for this HTML email template in the Java class named
[RegistrationSuccessBasic.java](https://github.com/gyawaliamit7/spring-html-generator/tree/main/src/main/java/com/gyawaliamit/spring/html/generator/templates/email/RegistrationSuccessBasic.java). This class is a valuable resource for understanding how the template is structured and how it can be customized to suit your specific needs.

Feel free to utilize this template as a foundational framework for creating your own email notifications. You can modify the content, styling, and functionality as necessary to tailor it to your application's requirements. It serves as a convenient starting point for crafting professional and effective email communications with your users.