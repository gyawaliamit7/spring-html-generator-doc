"use strict";(self.webpackChunkspring_html_generator_doc=self.webpackChunkspring_html_generator_doc||[]).push([[320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},i="HTML Email Template - Email Newsletter",s={unversionedId:"templates/basic-newsletter",id:"templates/basic-newsletter",title:"HTML Email Template - Email Newsletter",description:"This HTML email template is designed for creating email newsletters that can be used to share company news, updates, or other informational content. It features a clean and basic layout suitable for a wide range of newsletter purposes.",source:"@site/docs/templates/basic-newsletter.md",sourceDirName:"templates",slug:"/templates/basic-newsletter",permalink:"/spring-html-generator-doc/docs/templates/basic-newsletter",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/templates/basic-newsletter.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"DocumentationSidebar",previous:{title:"TML Email Template - Successful Registration",permalink:"/spring-html-generator-doc/docs/templates/successful-registration"}},l={},c=[{value:"Usage Code:",id:"usage-code",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"html-email-template---email-newsletter"},"HTML Email Template - Email Newsletter"),(0,r.kt)("p",null,"This HTML email template is designed for creating email newsletters that can be used to share company news, updates, or other informational content. It features a clean and basic layout suitable for a wide range of newsletter purposes."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/gyawaliamit7/spring-html-generator/assets/34220616/aca3ad45-3721-4c84-8e81-0e174ba186cd",alt:"Email Newsletter Template"})),(0,r.kt)("h2",{id:"usage-code"},"Usage Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) {\n\n        Template newsletterTemplate = TemplateFactory.getTemplate(TemplateName.NEWSLETTER_BASIC);\n        String newsletterHtml = newsletterTemplate.generate(generateNewsLetterContent());\n        System.out.println(newsletterHtml);\n}\n\n  private static Content generateNewsLetterContent() {\n        Content mainContent = new Content();\n        mainContent.setTitle("Your Newsletter");\n\n        List<Content> featureContent = getFeatureContents();\n        mainContent.setContentList(featureContent);\n        mainContent.setFooterButtonContent("Unsubscribe");\n        mainContent.setFooterButtonContentLink("#");\n        List<String> footerNotes = new ArrayList<>();\n        footerNotes.add("&copy; 2023 Your Company |  ");\n        mainContent.setFooterNotes(footerNotes);\n        return mainContent;\n    }\n\n    private static List<Content> getFeatureContents() {\n        List<Content> contents = new ArrayList<>();\n        contents.add(new Content(\n                "Sample Content 1",\n                Arrays.asList("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"),\n                "Learn More",\n                "https://example.com/learnmore1",\n                "https://via.placeholder.com/600x200",\n                "Image 1",\n                "Footer Button",\n                "https://example.com/footerbutton1"\n        ));\n        contents.add(new Content(\n                "Sample Content 2",\n                Arrays.asList("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"),\n                "Click Here",\n                "https://example.com/clickhere",\n                "https://via.placeholder.com/600x200",\n                null,\n                "Footer Action",\n                "https://example.com/footeraction"\n        ));\n\n        return contents;\n    }\n')),(0,r.kt)("p",null,"The provided Java code demonstrates how to use this email newsletter template within your application:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generating the Newsletter HTML: The code creates an instance of the Template for the newsletter using TemplateFactory.getTemplate() and generates the HTML content using the generateNewsLetterContent() method.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Content Generation: The generateNewsLetterContent() method populates the newsletter with sample content, including a title, featured content, footer button, and footer notes. The featured content is retrieved from the getFeatureContents() method.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Featured Content: The getFeatureContents() method generates sample featured content, each including a title, description, call-to-action button, image, and footer button or action. You can customize this content to include your own news or updates.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"HTML Output: The generated HTML content for the newsletter is printed to the console.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can find the complete source code for this HTML email newsletter template in the following Java class:"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/gyawaliamit7/spring-html-generator/tree/main/src/main/java/com/gyawaliamit/spring/html/generator/templates/email/NewsLetterBasicTemplate.java"},"NewsLetterBasicTemplate.java")),(0,r.kt)("p",null,"Feel free to use this template as a foundation for creating your own email newsletters and customize it to suit your specific newsletter content and branding needs."))}u.isMDXComponent=!0}}]);