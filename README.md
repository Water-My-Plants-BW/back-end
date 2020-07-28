# Getting started

Endpoints and doumentation for the Sprout app hosted on Heroku at https://lambda-sprout.herokuapp.com/

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Sprout%20App%20Heroku-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Sprout%20App%20Heroku-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `SproutAppHerokuLib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Sprout%20App%20Heroku-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Sprout%20App%20Heroku-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Sprout%20App%20Heroku-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Sprout%20App%20Heroku-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Sprout App HerokuController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Sprout%20App%20HerokuController)

## Initialization

### 

API client can be initialized as following:

```JavaScript
const lib = require('lib');


```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [MiscController](#misc_controller)

## <a name="misc_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MiscController") MiscController

### Get singleton instance

The singleton instance of the ``` MiscController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MiscController;
```

### <a name="create_register_user"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.createRegisterUser") createRegisterUser

> Register a new user


```javascript
function createRegisterUser(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new RegisterUserRequest({
  "username": "Test1",
  "password": "test123",
  "phoneNumber": "9705555555"
});

    controller.createRegisterUser(body, function(error, response, context) {

    
    });
```



### <a name="create_login_user"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.createLoginUser") createLoginUser

> Register a new user


```javascript
function createLoginUser(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new LoginUserRequest({
  "username": "Test1",
  "password": "test123"
});

    controller.createLoginUser(body, function(error, response, context) {

    
    });
```



### <a name="update_users_phone_number"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.updateUsersPhoneNumber") updateUsersPhoneNumber

> Register a new user


```javascript
function updateUsersPhoneNumber(token, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| token |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiVGVzdDEiLCJpYXQiOjE1OTU5MTcyODB9._3f2LUVByz9txkb6HFmgjT5vYFOizbwSw_U_9J-uLoM';
    var body = new UpdateUsersPhoneNumberRequest({
  "username": "Test123"
});

    controller.updateUsersPhoneNumber(token, body, function(error, response, context) {

    
    });
```



### <a name="get_specific_users_plants"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.getSpecificUsersPlants") getSpecificUsersPlants

> Register a new user


```javascript
function getSpecificUsersPlants(token, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| token |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInVzZXJuYW1lIjoiVGVzdDEyMzQ1IiwiaWF0IjoxNTk1OTIwMTc3fQ.Xi-eAXTDCAQEdPE1V6K63AsAbK5pbjQpzykS4B4Gyzg';

    controller.getSpecificUsersPlants(token, function(error, response, context) {

    
    });
```



### <a name="get_an_individual_plant_by_plant_id"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.getAnIndividualPlantByPlantID") getAnIndividualPlantByPlantID

> Register a new user


```javascript
function getAnIndividualPlantByPlantID(token, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| token |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiVGVzdDEiLCJpYXQiOjE1OTU5MTcyODB9._3f2LUVByz9txkb6HFmgjT5vYFOizbwSw_U_9J-uLoM';

    controller.getAnIndividualPlantByPlantID(token, function(error, response, context) {

    
    });
```



### <a name="post_a_new_plant"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.postANewPlant") postANewPlant

> Register a new user


```javascript
function postANewPlant(token, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| token |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInVzZXJuYW1lIjoiVGVzdDEyMzQ1IiwiaWF0IjoxNTk1OTE4NTgzfQ.qLMeqmyX7LRaihQwoUtTkmWAfryieYl5puwdl04ZBcA';
    var body = new PostANewPlantRequest({
  "nickname": "Nope Plant",
  "species": "Poison Oak",
  "h2oFrequency": 8,
  "image": "Coming Soon"
});

    controller.postANewPlant(token, body, function(error, response, context) {

    
    });
```



### <a name="update_an_existing_plant_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.updateAnExistingPlantByID") updateAnExistingPlantByID

> Register a new user


```javascript
function updateAnExistingPlantByID(token, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| token |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiVGVzdDEiLCJpYXQiOjE1OTU5MTcyODB9._3f2LUVByz9txkb6HFmgjT5vYFOizbwSw_U_9J-uLoM';
    var body = new UpdateAnExistingPlantByIDRequest({
  "nickname": "Spike",
  "species": "Aloe Vera",
  "h2oFrequency": 5,
  "image": "Coming Soon"
});

    controller.updateAnExistingPlantByID(token, body, function(error, response, context) {

    
    });
```



### <a name="delete_an_existing_plant_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.deleteAnExistingPlantByID") deleteAnExistingPlantByID

> Register a new user


```javascript
function deleteAnExistingPlantByID(token, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| token |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiVGVzdDEiLCJpYXQiOjE1OTU5MTcyODB9._3f2LUVByz9txkb6HFmgjT5vYFOizbwSw_U_9J-uLoM';
    var body = new DeleteAnExistingPlantByIDRequest({
  "nickname": "Dr. Plant",
  "species": "Aloe Vera",
  "h2oFrequency": 5,
  "image": "Coming Soon"
});

    controller.deleteAnExistingPlantByID(token, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

