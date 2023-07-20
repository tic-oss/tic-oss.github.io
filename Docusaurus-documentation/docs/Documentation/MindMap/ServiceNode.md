When working with the Service Nodes in the Mind Map Designer, you can add multiple nodes to represent the microservices in your project. Here's an explanation of the fields that you see when double-click on a service node.

### Available Service configuration options

|Option name | Default value | Possible values | Comment |
| --- | --- | --- | --- |
|Application Framework | java | java, Go|  |
| PackageName | com.mycompany.myapp |  | Sets the packageFolder option |
| ServerPort | 9000 |  | 8080, 8081 or 9999 Depends on the app type |

#### Application Name: 
Enter a descriptive name for the microservice. This name should reflect the specific functionality or purpose of the microservice within your project. It helps in identifying and differentiating between different microservices.

#### Application Framework: 
Specify the framework you will be using to develop the microservice. This could be any programming language or framework that is suitable for building the backend logic of your microservice. For example, you might use Spring Boot, Node.js, Django, or Flask.

#### Package Name: 
Provide the package name for the microservice. The package name is used for organizing the code files and classes related to the microservice. It helps maintain a structured codebase and avoids naming conflicts within your project. It is typically written in the format of reversed domain name, such as com.example.microservice.

#### Server Port: 
Specify the port number on which the microservice will be running. This port number is used to access the microservice through the network. Each microservice should have a unique port number to avoid conflicts. Commonly used port numbers are in the range of 8000 to 8080, but you can choose any available port as per your project's requirements.

By providing these details for each service node, you can effectively define and organize the microservices within your project in the Mind Map Designer.