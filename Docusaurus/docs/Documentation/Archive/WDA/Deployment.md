# Deployment
Deployment information is about how you would like to deploy your application.
#### Available Deployment Options 

Here are the deployment options supported:

| Option name | Default value | Possible values | Comment |
| --------------- | ------------- | --------------- | ------- |
| DeploymentType | docker-compose | docker-compose, kubernetes, openshift |  |
| AppsFolders | [] |  | Directory names for the applications separated by comma. Must be a list, example [foo, bar] |
| Monitoring | no | no, prometheus |  |
| ServiceDiscoveryType | eureka | eureka, consul, no |  |
| DockerRepositoryName |  |  | The name or URL of the docker repository. Must be in double quotes |
| KubernetesNamespace | default |  | Applicable only when deploymentType is kubernetes |
| KubernetesUseDynamicStorage | false | true, false | Applicable only when deploymentType is kubernetes, enables the kubernetesStorageClassName option |
| KubernetesServiceType | LoadBalancer | LoadBalancer, NodePort, Ingress | Applicable only when deploymentType is kubernetes |
| IngressDomain |  |  | The domain for Ingress when kubernetesServiceType is `Ingress`. Must be in double quotes. Applicable only when deploymentType is kubernetes |
| IngressType | nginx | nginx, gke | The kubernetes ingress type, only set when `kubernetesServiceType` is set to Ingress |

During deployment, you will be prompted to provide the following information:
#### Deployment Type
The deployment type you want to use, in this case Kubernetes.
#### Application Folders
The folder(s) containing your application code.
#### Docker Repository Name
The name of the Docker repository you want to use for your container images.
#### Kubernetes Namespace
The Kubernetes namespace you want to use for your deployment.
<!-- #### Kubernetes Service Type
The type of Kubernetes service you want to use, such as LoadBalancer, NodePort, or Ingress. -->
#### Enable Kubernetes Dynamic Storage
Whether to use dynamic storage provisioning in Kubernetes (set to Yes or No).
#### Kubernetes Storage Provisioner
The storage provisioner to use for dynamic storage provisioning in Kubernetes.
#### Ingress Domain
The domain name to use for your Ingress resource.
#### Ingress Type
The type of Ingress controller you want to use, such as Nginx.
#### Service Discovery Type
The service discovery type you want to use, such as Eureka.




