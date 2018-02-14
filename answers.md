#### 1. Notice anything new in our .gitignore? There are actually multiple .gitignore files in this project. Where are they? Why might we have more than one, and how do they interact?
##### We have multiple gitignores to ignore things from the client side or server side which are big files we don't need to show or they are pulled from different servers. They are located in the main project folder, in src, and 
#### 2. Note also that there are now multiple build.gradle files as well! Why is this?
##### There are multiple build.gradles in order build the client and server side of the project. Also runs tests on the client side and server side.
#### 3. How does the navbar work in this project? Is our SparkJava server the only thing doing routing?
##### components in the navbar are found in app.component.html, It gives us the option to select what we want to look at. currently shows menu and users. The routing is used in app.routes.ts where when clicking on components in the navbar we are routed to what is given in the routes.ts such as the users or main menu.
#### 4.  What does the user-list.service.ts do? Why is it not just done in the user-list.component.ts? 
##### The user-List.service.ts interact with the server  and return response to a query. The reason isn't done in the user-list.component.ts is  because the returned data is handled rather than declared. The user-list.service.ts is used to return response to interact with the server.  
