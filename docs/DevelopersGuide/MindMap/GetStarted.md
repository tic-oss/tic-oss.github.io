Welcome to the Mind Map Designer! It's a powerful tool for planning your project architecture by visualizing the components of your application using draggable nodes and edges. Follow these steps to effectively use the Mind Map Designer:

#### Step 1: Accessing the Mind Map Designer
To get started, visit our website by [Clicking here.](http://wda-ui.s3-website.ap-south-1.amazonaws.com/){target="_blank"}. You can access the Mind Map Designer from the navigation bar.
<a href="/Images/Navigatetomindmap.png" target="_blank"><img src="/Images/Navigatetomindmap.png" alt="Image"></a>

#### Step 2: Logging in
To use the Mind Map Designer, you need to log in. Click on the "Login" option.
<a href="/Images/Loginpage.png" target="_blank"><img src="/Images/Loginpage.png" alt="Image"></a>
If you don't have an account, you can create one by clicking on "Register" on the login page and then log in.
<a href="/Images/Signup.png" target="_blank"><img src="/Images/Signup.png" alt="Image"></a>

#### Step 3: Creating a Mind Map
After a successful login, you can start creating a Mind Map for your project. The Mind Map page will be displayed, providing you with a canvas to work on.
<a href="/Images/Mindmappage.png" target="_blank"><img src="/Images/Mindmappage.png" alt="Image"></a>

#### Step 4: Adding the UI+Gateway Node
The UI+Gateway node represents the frontend and gateway of your project. To add this node simply drag the node from sidebar and there can be only one node of this type, double click on it to open a modal and provide the necessary information.
<a href="/Images/UIgatewaynode.png" target="_blank"><img src="/Images/UIgatewaynode.png" alt="Image"></a>

#### Step 5: Adding Service Nodes
Service nodes represent the microservices in your project. You can add multiple service nodes by drag and drop the node from sidebar, double-click on them to open modals and provide the required information.
<a href="/Images/Servicenode.png" target="_blank"><img src="/Images/Servicenode.png" alt="Image"></a>

#### Step 6: Adding Other Components
In the sidebar, you'll find draggable nodes for various components such as the Auth Provider (Keycloak), Database (Postgres and MongoDB), Service Discovery (Eureka), and Log Management (ECK). Drag these nodes onto your Mind Map canvas to visualize the components in your project. Once added to the project these are applied for every node present on canvas.
<a href="/Images/Othercomponents.png" target="_blank"><img src="/Images/Othercomponents.png" alt="Image"></a>

#### Step 7: Creating Connections
Nodes in the designer can be connected using edges. There are two types of connections you can create:
##### Database Connection: 
Connect a Service or UI+Gateway node with a database node to associate the service with its corresponding database.
<a href="/Images/Edges.png" target="_blank"><img src="/Images/Edges.png" alt="Image"></a>

##### Interservice Communication: 
Connect two service nodes to establish communication between them. Double click on an edge to define the type of communication.
<a href="/Images/Addingcommunication.png" target="_blank"><img src="/Images/Addingcommunication.png" alt="Image"></a>

#### Step 8: Metadata and Saving
At the bottom of the sidebar, there's a checkbox to save project metadata. Check this box if you want to save your project details for future reference. You can view your previous projects from the Projects tab. Don't forget to enter a project name in the input box at the top of the sidebar.
<a href="/Images/Nextbutton.png" target="_blank"><img src="/Images/Nextbutton.png" alt="Image"></a>

#### Step 9: Moving to the Next Step
Once you've filled in all the necessary information and provided a project name, click on the "Next" button. A popup will appear, giving you the option to select a deployment infrastructure for your project. Fill in the details and click "Submit." If you don't need a deployment infrastructure, simply click on the "Skip" button.
<a href="/Images/Deployinfra.png" target="_blank"><img src="/Images/Deployinfra.png" alt="Image"></a>

#### Step 10: Project Generation
Sit back and relax! We will generate a zip file for your project based on the information you provided.

To know more and for detailed information of the options available you can refer [Documentation](/Documentation/MindMap/mindMap/){target="_blank"}
We hope you find the Mind Map Designer intuitive and helpful for planning and visualizing your project architecture. If you have any further questions or need assistance, please don't hesitate to reach out. 