# Deployment

During deployment, you will be prompted to provide the following information:

#### Deployment Type
The deployment type you want to use, in this case Kubernetes.

#### Application Folders
The folder(s) containing your application code.

#### Docker Repository Name
The name of the Docker repository you want to use for your container images.

#### Kubernetes Namespace
The Kubernetes namespace you want to use for your deployment.

#### Kubernetes Service Type
The type of Kubernetes service you want to use, such as LoadBalancer, NodePort, or Ingress.

#### Kubernetes Use Dynamic Storage
Whether to use dynamic storage provisioning in Kubernetes (set to True or False).

#### Kubernetes Storage Provisioner
The storage provisioner to use for dynamic storage provisioning in Kubernetes.

#### Ingress Domain
The domain name to use for your Ingress resource.

#### Ingress Type
The type of Ingress controller you want to use, such as Nginx.

#### Service Discovery Type
The service discovery type you want to use, such as Eureka.

#### Monitoring
Whether to enable monitoring for your deployment, such as Prometheus or Grafana.

Please make sure to provide accurate information for each of these options in order to ensure a successful deployment.

#### Available deployment options 

Here are the deployment options supported:

| JDL option name | Default value | Possible values | Comment |
| --------------- | ------------- | --------------- | ------- |
| deploymentType | docker-compose | docker-compose, kubernetes, openshift |  |
| appsFolders | [] |  | Directory names for the applications separated by comma. Must be a list, example [foo, bar] |
| monitoring | no | no, prometheus |  |
| serviceDiscoveryType | eureka | eureka, consul, no |  |
| dockerRepositoryName |  |  | The name or URL of the docker repository. Must be in double quotes |
| kubernetesNamespace | default |  | Applicable only when deploymentType is kubernetes |
| kubernetesUseDynamicStorage | false | true, false | Applicable only when deploymentType is kubernetes, enables the kubernetesStorageClassName option |
| kubernetesServiceType | LoadBalancer | LoadBalancer, NodePort, Ingress | Applicable only when deploymentType is kubernetes |
| ingressDomain |  |  | The domain for Ingress when kubernetesServiceType is `Ingress`. Must be in double quotes. Applicable only when deploymentType is kubernetes |
| ingressType | nginx | nginx, gke | The kubernetes ingress type, only set when `kubernetesServiceType` is set to Ingress |

