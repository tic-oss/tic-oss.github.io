# Prerequisites-WDA

"Before you begin with WDA, there are certain prerequisites that must be met to ensure a successful outcome. These prerequisites are the necessary requirements and conditions that must be in place before proceeding with WDA.

## 1. If the framework is java/go

Dependending on the your choice of framework, Make sure you have that installed to run the application.

[InstallJava](https://www.oracle.com/in/java/technologies/downloads/)

[Install Go](https://go.dev/doc/install)
## 2. Any IDE of user chocie
    For Example:-

    a Intellij
    b STS
    c Vscode
## 3. Install docker
By installing docker you can run the other services in container instead of installing in local.
    
    Services Like the following can be run in container:
    a DataBase
    b keycloak
    c Jhispter registry(Eureka)
To install Docker:

[Install Docker From Here..!](https://docs.docker.com/engine/install/)

The user can also opt for the deployment at the WDA as well, in such case:

    There will be some pre requisite of WDI:

        1 Terraform

        2 kubectl

        3 aws-cli
## 4. To push the docker image to ECR repository
You would require a AWS cli, to configure reffer the below link.
   
   [Configure AWS cli](https://docs.aws.amahttps://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.htmlzon.com/cli/latest/userguide/cli-authentication-user.html)