The Mindmap Designer is a tool that allows you to visualize and plan your project architecture using draggable nodes and edges. Here's a step-by-step guide on how to use the Mindmap Designer effectively:

You can access the MindMap from navigation bar.
<a href="/Images/nav1.png" target="_blank"><img src="/Images/nav1.png" alt="Image"></a>

To use the MindMap you have to login first.click on the login.
<a href="/Images/log2.png" target="_blank"><img src="/Images/log2.png" alt="Image"></a>

If you don't have an account you can create one by clicking on 'Register' on the login page and then login.
<a href="/Images/sig3.png" target="_blank"><img src="/Images/sig3.png" alt="Image"></a>

After successfull login, you can start creating MindMap for your project:
<a href="/Images/mm4.png" target="_blank"><img src="/Images/mm4.png" alt="Image"></a>

To know more and for detailed information of the options available you can reffer [Documentation](http://127.0.0.1:8000/Documentation/MindMap/mindMap/){target="_blank"}

#### Step 1: Adding UI+Gateway Node
This node represents the frontend and gateway of your project. Double click on it to open a modal and provide information.
<a href="/Images/mm5.png" target="_blank"><img src="/Images/mm5.png" alt="Image"></a>

#### Step 2: Service Node
This node represent the microservices in your project. You can add multiple service nodes.Double click on it to open a modal and provide information.
<a href="/Images/mmservice.png" target="_blank"><img src="/Images/mmservice.png" alt="Image"></a>

#### Step 3: Adding other components
In the sidebar, you'll find draggable nodes for various components such as the Auth Provider (Keycloak), Database (Postgres and MongoDB), Service Discovery (Eureka), and Log Management (ECK). Drag these nodes onto your mindmap to visualize the components in your project.
<a href="/Images/oc.png" target="_blank"><img src="/Images/oc.png" alt="Image"></a>


#### Step 4: Add Communication
To establish communication between services, you can add edges. 
###### (a) Simply drag a line from the output of the source node to the input of the destination node.Double click on an edge to define the type of communication and add a label.
<a href="/Images/comm-1.png" target="_blank"><img src="/Images/comm-1.png" alt="Image"></a>

###### (b) Also you can connect DB to service/UI+Gateway node.Which would define DB for that node.
<a href="/Images/comm2.png" target="_blank"><img src="/Images/comm2.png" alt="Image"></a>

#### Step 5: Metadata and Saving
At the bottom of the sidebar, you'll find a checkbox to save project metadata. Check this box if you want to save your project details for future reference. You can view your previous projects from the Projects tab. Make sure to enter a project name in the input box at the top of the sidebar.
<a href="/Images/nxt1.png" target="_blank"><img src="/Images/nxt1.png" alt="Image"></a>

#### Step 6: Moving to the Next Step
Once you've filled in all the necessary information and provided a project name, click on the Next button. A popup will appear, giving you the option to select a deployment infrastructure for your project. Fill in the details and click Submit. If you don't require a deployment infrastructure, simply click on the Skip button.
<a href="/Images/nxt2.png" target="_blank"><img src="/Images/nxt2.png" alt="Image"></a>

#### Step 7: Project Generation
Sit back and witness the magic! We will generate a zip file for your project based on the information you provided.

We hope you find the Mindmap Designer intuitive and helpful for planning and visualizing your project architecture. If you have any further questions or need assistance, please don't hesitate to reach out. 