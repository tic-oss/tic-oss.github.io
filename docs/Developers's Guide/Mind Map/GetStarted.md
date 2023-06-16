The Mindmap Designer is a tool that allows you to visualize and plan your project architecture using draggable nodes and edges. Here's a step-by-step guide on how to use the Mindmap Designer effectively:

You can access the MindMap from navigation bar, to use the MindMap you have to login first. If you don't have an account you can create one and then login.

#### UI+Gateway Node
This node represents the frontend of your project. Double click on it to open a modal and provide information such as name, port number, framework, etc. Please note that only one UI+Gateway node is allowed in your mindmap.

#### Service Nodes
These nodes represent the microservices in your project. You can add multiple service nodes by dragging them from the sidebar. Double click on a service node to provide relevant information.

#### Draggable Nodes
In the sidebar, you'll find draggable nodes for various components such as the Auth Provider (Keycloak), Database (Postgres and MongoDB), Service Discovery (Eureka), and Log Management (ECK). Drag these nodes onto your mindmap to visualize the components in your project.

#### Adding Communication
To establish communication between services, you can add edges. Simply drag a line from the output of the source node to the input of the destination node. Double click on an edge to define the type of communication and add a label.

#### Metadata and Saving
At the bottom of the sidebar, you'll find a checkbox to save project metadata. Check this box if you want to save your project details for future reference. You can view your previous projects from the Projects tab. Make sure to enter a project name in the input box at the top of the sidebar.

#### Moving to the Next Step
Once you've filled in all the necessary information and provided a project name, click on the Next button. A popup will appear, giving you the option to select a deployment infrastructure for your project. Fill in the details and click Submit. If you don't require a deployment infrastructure, simply click on the Skip button.

#### Project Generation
Sit back and witness the magic! We will generate a zip file for your project based on the information you provided.

We hope you find the Mindmap Designer intuitive and helpful for planning and visualizing your project architecture. If you have any further questions or need assistance, please don't hesitate to reach out. 