## Introduction

This is a tutorial aimed at mobile application developers, namely Android, iOS and React Native developers who want to build their own backends for their front end apps. By the end of this tutorial you will be able to build mobile applications with the following backend features:
- Authentication (Auth)
- Storing and retrieving data from a Database in the cloud (Data)
- Upload and download files to and from the cloud (Filestore)
- Create a server in nodejs (Custom Microservice):
  - To implement custom business logic
  - To handle Push notificaions
  - To handle realtime data using websockets

## Pre-requisites

- Basic knowledge of either Android, iOS or React Native application development. 
- A basic knowledge of Javascript or atleast the readiness to pick it up.
- `git` installed on your local machine and also a basic knowledge of using `git`

## Getting started

Before you begin, ensure that you have the **Hasura CLI** installed on your local machine. If not, you can find the instructions to install it [here](https://docs.hasura.io/0.15/manual/install-hasura-cli.html). Once you have the CLI tool installed, login or signup into Hasura by running the following command on your terminal:

```bash
$ hasura login
```

There are two steps required to get started with a project on Hasura.

**Step 1**: Get a Hasura project and a Hasura cluster

>**What is a Hasura Project ?**

>A hasura project is a folder on your filesystem that contains all the source code and configuration for your application. A hasura project has a particular structure and the best way to create a hasura project is by cloning one from hasura.io/hub. Every project you see on hasura.io/hub is a `Hasura Project` with particular services or data added to it based on the type of project it is.


We are going to clone the `mobile-backend-nodejs` project which consists of:
- Boilerplate code for a nodejs server to handle push notifications and a websocket connection
- A basic Android, iOS and React Native application with working code implementing the various backend features covered in this tutorial

To get the project,

```bash
$ hasura quickstart hasura/mobile-backend-nodejs
```

The above command does the following:
- Creates a new directory in your current directory called `mobile-backend-nodejs` and clones the content of the `mobile-backend-nodejs` project from Hasura Hub into it.
- Makes this new directory a `git` repository and adds a remote called `hasura` to it.
- It also creates a free `Hasura Cluster` for you and `adds` this cluster to the cloned hasura project.

>**What is a Hasura cluster ?**

>A Hasura cluster is a cluster of nodes (VMs) on the cloud that can host any Hasura project. It has all the Hasura microservices running and the necessary tooling for you to deploy your Hasura project. Every Hasura cluster comes with a name and a domain attached to it as well. Eg: `awesome45.hasura-app.io`.

**Step 2**: Deploy the project to your cluster

```bash
$ # cd into the project directory
$ cd mobile-backend-nodejs
$ # Make your initial commit
$ git add . && git commit -m "Initial Commit"
$ # Push to the hasura remote
$ git push hasura master
```

## The API Console

Every Hasura cluster comes with an `API Console` that you can use to explore the various backend features provided by Hasura. To access the API console, 

```bash
$ # Run the following inside the project directory
$ hasura api-console
```

This will open up the console on your browser. You can access it at http://localhost:9695. We will be using the `API Console` extensively during this tutorial.

## Authentication

Every modern app almost always requires some form of authentication. This is useful to identify a user and provide some sort of personalized experience to the user. Hasura provides various types of authentication methods (username/password, mobile/otp, email/password, Google, Facebook etc).

In this tutorial, we are going to take a look at a simple username/password based authentication. Start by opening up the `API Console`. Ensure that you are on the `API Explorer` tab. 

### Signup

Let's first take a look at the signup endpoint. From the panel on the left, click on `SignUp` under `Username/Password`. Next, fill up your required username and password.

#### TODO - CHANGE IMAGES
![API Console](https://docs.hasura.io/0.15/_images/console-screenshot.png)

Once you have decided on your username and password, hit on the `Send` button to Sign Up. Your response would be similar to the following:

```json
{
    "auth_token": "9cea876c07de13d8336c4a6d80fa9f64648506bc20974fd2",
    "username": "johnsmith",
    "hasura_id": 2,
    "hasura_roles": [
        "user"
    ]
}
```

**auth_token** is the authorization token for this particular user, which we will use later to access authorized information. You should save this offline in your app to avoid making your user login each time. 
**hasura_id** is the id of the user that is automatically assigned by Hasura on signing up.
**hasura_roles** are the roles associated with this user. Head [here](https://docs.hasura.io/0.15/manual/roles/index.html) to get a better understanding on what roles are and how they are useful.

### Login

Now that we have created a user using the signup endpoint, we can now login with the same credentials. Click on `Login` under `Username/Password`. Enter in the same username and password that you used to sign up above and click on `Send`.

#### TODO: IMAGE

In the response that you get, you will see that the `hasura_id` key has the same value as the one you got after you signed up.

### Code Generator

Next, let's take a look at how this will look in your respective client side code. Click on the `Code Generator` button on thr top right.

#### TODO: IMAGE

Select your required language and library from the drop down on the left.
- For React Native select `Javascript React Native`
- For iOS select `Swift iOS Alamofire`
- For Android select `Java Android`

#### TODO: IMAGE

You can now copy and paste this into your client. 
#### TODO: ADD CODE REFERENCE

#### TODO: add links to docs
> For advanced use cases and to explore other providers, check out [docs]().

























## Description

Mobile backend project written in NodeJS using Express. Deploy to cloud using a simple git push.

This is an ideal project to start with if:

- If you are a front-end mobile developer familiar with building UI
- If you are looking to easily deploy nodeJS server to cloud
- If you are looking to implement push notifications or socket.io with nodeJS.

Also a tutorial for mobile developers who are planning to go fullstack.

## Deployment guide

1. Quickstart this project. Run this command.

```bash
$ hasura quickstart mobile-backend-nodejs
```

2. Simply git push to the hasura remote from the project directory to deploy the mobile server.

```
$ git add .
$ git commit -m "First deployment"
$ git push hasura master
```

3. The server will be deployed to `https://api.<CLUSTER-NAME>.hasura-app.io/`. Run `hasura cluster status` to find your cluster name.

## API-Console

Hasura provides you with a web UI to manage your backend. Just run the following command from your backend.

```
$ hasura api-console
```

![api-explorer.png](https://filestore.hasura.io/v1/file/463f07f7-299d-455e-a6f8-ff2599ca8402)


## Using the database

1. Creating a table: Go to `Data` tab in the menu bar and click on create table as shown below
  ~[Image TODO]

2. Once you have created the table, go to the `API-Explorer` tab and try building a query with the query builder. Also add the admin token because you haven't added anonymous permissions on the table.
  ~[Image TODO]

3. Since you have not added any permissions for the table, you need to add admin token Hit `send`.

4. You have successfully made a data query without the hassle of configuring a database.

5. Now if you want to make this same query in your code, there is a code generator that builds code snippets of the exact same query in your preferred language. Click on `Generate API Code`
  ~[Image TODO]

6. Try playing around with the query builder. You can build a lot of complex queries. You can also add different permissions from `Modify Table`.

## Using Authentication

1. Go back to the API explorer. Click on `Username-Password > Signup` under `Auth` on the left panel.

2. Modify the username and password in the request body and hit send.
  ~[Image TODO]

3. You just created a user.

4. Now click on `Username-Password > Login`. Try logging in with the same username and password.

5. You will get success JSON body in response. You can use the auth token from this body to authenticate your users to the data requests. (Just like we added the admin token to authenticate the data query that we built in the data section)

6. Click on generate API code in the query builder to build the same query in your preferred language.

7. In your mobile application, you might want to store this token locally so that your users' session is persisted and they do not have to login everytime they open the app.

## Push Notifications

A push notification is a message that is pushed from the server to a mobile device. App managers can send messages to clients whenever they want. Push notifications are also used for having realtime support in your application.

### Android

We will show how to use push notifications to apps in Android.

1. Create a project on Firebase, add the android application to the project, add the firebase service to the android application and obtain the firebase API key. ([Follow the docs](https://firebase.google.com/docs/cloud-messaging/) you haven't done this before)

2. To add the firebase API key to environment variables, run the following commands from the project directory.

```bash
$ cp microservices/api/k8s.fcm.yaml microservices/api/k8s.yaml
$ hasura secret update fcm.key "<YOUR_FIREBASE_API_KEY>"
$ git add . && git commit -m "Mentionied the FIREBASE_KEY in k8s.yaml"
$ git push hasura master
```

3. Now whenever you sign up a user in your application, you should store their device's firebase token to database to associate it with their user id. Just send the following with payload with the following headers to the following endpoint.

{JAVA CODE SNIPPET Jaison TODO}

4. Now you can push data from your server to the application with a simple function call. Simply call the function `utils.sendPushNotifcation` with the 'user_id'. It returns true if the push was successful.

```javascript
const success = sendPushNotifcation(id);
```

### iOS

Jaison TODO

## Socket.io


Socket.IO enables real-time bidirectional event-based communication. It works on every platform, browser or device, focusing equally on reliability and speed.

### Android client

The mobile server in this project already has socket.io implemented. You simply have to connect to `https://api.<CLUSTER_NAME>.hasura-app.io` using the socket.io client to open a connection.

```java
socket = IO.socket("https://api.<CLUSTER_NAME>.hasura-app.io");
socket.on(Socket.EVENT_CONNECT, new Emitter.Listener() {

  @Override
  public void call(Object... args) {
    socket.emit("message", "hi");
    socket.disconnect();
  }

}).on("message", new Emitter.Listener() {

  @Override
  public void call(Object... args) {}

}).on(Socket.EVENT_DISCONNECT, new Emitter.Listener() {

  @Override
  public void call(Object... args) {}

});
socket.connect();
```

### iOS client

swift code snipped Jaison TODO


## Modifying server code

The source code for the server lives in `microservices/api/server.js`. Modify it as desired and deploy the changes by running a git push again.

```
$ git add .
$ git commit -m "Modified server code"
$ git push hasura master
```

## Support

If you find any bugs, please feel free to raise an issue [here](https://github.com/hasura/mobile-backend-nodejs).
