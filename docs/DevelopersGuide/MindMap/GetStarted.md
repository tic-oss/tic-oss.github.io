Mind Map is a designer interface for planning your project architecture by visualizing the components of your application with draggable nodes and edges. Here's a step-by-step guide on how to use the Mind Map Designer effectively:

Visit our website to get started [Click here.](http://wda-ui.s3-website.ap-south-1.amazonaws.com/){target="_blank"}

You can access the Mind Map from navigation bar.
<a href="/Images/Navigatetomindmap.png" target="_blank"><img src="/Images/Navigatetomindmap.png" alt="Image"></a>

To use the Mind Map you have to login first. Click on the login.
<a href="/Images/Loginpage.png" target="_blank"><img src="/Images/Loginpage.png" alt="Image"></a>

If you don't have an account you can create one by clicking on 'Register' on the login page and then login.
<a href="/Images/Signup.png" target="_blank"><img src="/Images/Signup.png" alt="Image"></a>

After successful login, you can start creating Mind Map for your project:
<a href="/Images/Mindmappage.png" target="_blank"><img src="/Images/Mindmappage.png" alt="Image"></a>

To know more and for detailed information of the options available you can refer [Documentation](/Documentation/MindMap/mindMap/){target="_blank"}

#### Step 1: Adding UI+Gateway Node
This node represents the frontend and gateway of your project. Double click on it to open a modal and provide information.
<a href="/Images/UIgatewaynode.png" target="_blank"><img src="/Images/UIgatewaynode.png" alt="Image"></a>

#### Step 2: Service Node
This node represent the microservices in your project. You can add multiple service nodes.Double click on it to open a modal and provide information.
<a href="/Images/Servicenode.png" target="_blank"><img src="/Images/Servicenode.png" alt="Image"></a>

#### Step 3: Adding other components
In the sidebar, you'll find draggable nodes for various components such as the Auth Provider (Keycloak), Database (Postgres and MongoDB), Service Discovery (Eureka), and Log Management (ECK). Drag these nodes onto your Mind Map to visualize the components in your project.
<a href="/Images/Othercomponents.png" target="_blank"><img src="/Images/Othercomponents.png" alt="Image"></a>


#### Step 4: Add Connections
Nodes in the designer can be connected using edges in the following ways.
##### Database Connection
Service/UI+Gateway node can be connected with a database to associate the service with it's corresponding DB.
<a href="/Images/Edges.png" target="_blank"><img src="/Images/Edges.png" alt="Image"></a>

##### Interservice communication
Two service nodes can be connected to establish communication between them. Double click on an edge to define the type of communication.
<a href="/Images/Addingcommunication.png" target="_blank"><img src="/Images/Addingcommunication.png" alt="Image"></a>

#### Step 5: Metadata and Saving
At the bottom of the sidebar, you'll find a checkbox to save project metadata. Check this box if you want to save your project details for future reference. You can view your previous projects from the Projects tab. Make sure to enter a project name in the input box at the top of the sidebar.
<a href="/Images/Nextbutton.png" target="_blank"><img src="/Images/Nextbutton.png" alt="Image"></a>

#### Step 6: Moving to the Next Step
Once you've filled in all the necessary information and provided a project name, click on the Next button. A popup will appear, giving you the option to select a deployment infrastructure for your project. Fill in the details and click Submit. If you don't require a deployment infrastructure, simply click on the Skip button.
<a href="/Images/Deployinfra.png" target="_blank"><img src="/Images/Deployinfra.png" alt="Image"></a>

#### Step 7: Project Generation
Sit back and witness the magic! We will generate a zip file for your project based on the information you provided.

We hope you find the Mind Map Designer intuitive and helpful for planning and visualizing your project architecture. If you have any further questions or need assistance, please don't hesitate to reach out. 