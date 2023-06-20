The UI+Gateway node in the Mind Map Designer represents the frontend and gateway of your project. It serves as the entry point for user interaction and handles the communication between the user interface and the backend services. By double-clicking on the UI+Gateway node, you can open a modal that allows you to provide specific information about this node.

Here is more information about data that need to provide:

### Available application configuration options

|Option name | Default value | Possible values | Comment |
| --- | --- | --- | --- |
| ClientFramework | react | angularX, angular, react, vue, svelte, no |  |
| PackageName | com.mycompany.myapp |  | Sets the packageFolder option |
| ServerPort | 9000 |  | 8080, 8081 or 9999 Depends on the app type |

Please provide us with the following details:
#### Package Name
Please provide us with the unique package name for your application. This name should follow the standard Java package naming conventions and should be unique to your application.
#### Client Framework
Please specify the client framework that your application will use. Possible values include "Angular," "React," "Vue.js," and more.
#### Server Port
Please specify the port that your application will use for its services.

It's important to note that the Mind Map Designer allows only one UI+Gateway node in your Mind Map. This restriction ensures clarity and prevents confusion by having a single entry point for your application's frontend and gateway functionality.

By providing these details for the UI+Gateway node, you can accurately represent and document the frontend + gateway aspects of your project within the Mind Map. This information will help you visualize the overall architecture and plan the integration with other components in your Mind Map.