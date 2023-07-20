# Application

To define your application in our system, we require specific information about your application's characteristics. 
#### Available application configuration options

|Option name | Default value | Possible values | Comment |
| --- | --- | --- | --- |
| ApplicationType | Gateway | monolith, microservice, gateway |  |
| AuthenticationType | oauth2 | jwt, session, oauth2 | jwt |
| ClientFramework | react | angularX, angular, react, vue, svelte, no |  |
| DatabaseType | sql | sql, mongodb, cassandra, couchbase, no |  |
| PackageName | com.mycompany.myapp |  | Sets the packageFolder option |
| ProdDatabaseType | postgresql | mysql, mariadb, mssql, postgresql, oracle, no |  |
| ServerPort | 9000 |  | 8080, 8081 or 9999 Depends on the app type |
| ServiceDiscoveryType | eureka | eureka, consul, no |  |

Please provide us with the following details:
#### Application Type
Please specify the type of application you are building. For instance, if your application requires integration with other applications or systems, you may select "Gateway". If you are building a other application, you may select "Microservices".
#### Package Name
Please provide us with the unique package name for your application. This name should follow the standard Java package naming conventions and should be unique to your application.
#### Authentication Type
Please select the type of authentication that your application will use. Possible values include "JWT authentication," "Session-based authentication," and "OAuth 2.0 authentication." 
#### Database Type
Please specify the type of database that your application will use. Possible values include "SQL," "Mongodb," "Couchbase," and "casandra." Simply select "No" if You have used none.
#### Production Database Type
Please specify the type of database that will be used for production. This may differ from the database type selected in step 4. If you have selected "SQL" in step 4, please specify the specific database management system you plan to use for production. For example, you may select "MySQL" as your production database type.
#### Client Framework
Please specify the client framework that your application will use. Possible values include "Angular," "React," "Vue.js," and more.
#### Service Discovery Type
Please specify the service discovery type that your application will use. Possible values include "Eureka," "Zookeeper," "Consul," and more.
#### Service Port
Please specify the port that your application will use for its services.
By providing us with these details, we can create a comprehensive profile for your application, which will help us ensure that your application is properly configured and optimized for success.


