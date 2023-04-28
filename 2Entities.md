<!-- # Entities

To define an entity in our system, you need to provide details about its attributes. The two main attributes that you need to specify are "Data Type" and "Required".

#### Field types and validations

Each field type has its own validation list.

| Data type | Validations |
| --- | --- |
| String | required, minlength, maxlength, pattern, unique |
| Integer | required, min, max, unique |
| Long | required, min, max, unique |
| BigDecimal | required, min, max, unique |
| Float | required, min, max, unique |
| Double | required, min, max, unique |
| Enum | required, unique |
| Boolean | required, unique |
| LocalDate | required, unique |
| ZonedDateTime | required, unique |
| Instant | required, unique |
| Duration | required, unique |
| UUID | required, unique |
| Blob | required, minbytes, maxbytes, unique |
| AnyBlob | required, minbytes, maxbytes, unique |
| ImageBlob | required, minbytes, maxbytes, unique |
| TextBlob | required, unique |

Example :"Long" refers to the data type of the attribute, and can be one of several possible values, including integer, float, double, and long.

"Required" indicates whether the attribute is mandatory or optional for the entity. If an attribute is marked as required, it must have a value in order for the entity to be valid.

You can define multiple attributes for each entity by entering their details in the form provided. Please note that each entity must have at least one attribute defined.
<!-- ### Complete Video Guide

![type:video](./vid.mp4) -->
 

 -->
