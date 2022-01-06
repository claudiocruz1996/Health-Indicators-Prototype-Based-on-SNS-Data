# Health Indicators - Prototype Based on SNS Data

> With the significant increase in the volume of information produced in the field of healthcare, it is pertinent to have systems capable of speeding up the process of analyzing and visualizing this type of data.

## Summary
In this context, the project was conceptualized and implemented using the health indicators repository from the National Health Service as a data source. This system must be able to process and represent this information in an easy and understandable way when used by a user. The project culminated not only with the development of a logical layer for data processing, treatment, and storage but also with the implementation of a Web platform where it is possible to consult information on health indicators from various types of views.

## Structure 

This project is structured in four distinct modules, namely: 

- The collection and processing of data;
- The data persistence;
- The API;
- The web interface;

![arquitetura drawio](https://user-images.githubusercontent.com/20818015/147421008-1f629b59-a2e2-41dd-8236-e20859905166.png)


### Logical Layer & API
> This layer & API were built using [Node.JS](https://nodejs.org/en/)

#### Logical Layer

![Untitled Diagram drawio (6)](https://user-images.githubusercontent.com/20818015/147420938-56e0549f-ae53-459e-bae6-7d57ec385220.png)


#### API

![routes](https://user-images.githubusercontent.com/20818015/147420656-322b2419-be49-4396-b354-0f9113445106.png)



### Web Platform
> The web platform was built using [React](https://reactjs.org/)


### Database 
> This project was built using [PostgreSQL](https://www.postgresql.org/)

Postgresql Server Commands:
```
sudo service postgresql start
sudo service postgresql stop
```

