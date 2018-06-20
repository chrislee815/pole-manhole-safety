Pole and Manhole Safety App
=================

This is an interview assignment provided by Encepta Corps.

-----------------------------------------
This is a web application for users to check pole and manhole structure on a map and edit info of selected marker.
The modules used for this are mainly create-react-app, react, redux, and react-redux.

### Usage
- Follows general create-react-app commands
- To install App
  : npm install
- To start App with using dummy server
  : npm start
- To run test
  : npm test

### Directory Structure
- root
|- public
 |- index.html
|- src                // includes all source files here
 |- actions           // collection of action functions for redux store and its test file
 |- components        // container and ui components (some are mixed eg. App.js and Map.js)
  |- containers       // components separated from ui components
  |- ui               // stateless function-type ui components
 |- constants         // includes files with contants values
 |- lib               // custom helper libraries
 |- store             // store creation, reducers, and test for reducers

### Main Flow
1. Load Google Map APIs in index.html header
2. Create a store and start to mount components
3. On componentDidMount, start fetching template form and all record data from Fulcrum DB. Google Map is created at this point.
4. When done fetching, dispatch an action to save form and records data into the store
5. On the following rendering Map component, create markers on the map with updated records
6. Clicking a marker will displays its details on InfoEditor on the left panel
7. Filling and submitting new data in the form will update the state, showing updates on InfoEditor panel
8. Markers on the map can be filtered by Structure-Type filter(eg. Pole, Manhole) on left-top of the panel

### Things this App DO support
- Filter the points on the map by only Structure-Type
- Can edit point attributes like status, id, Structure-Type, safety concerns, and comments
- Unit tests for reducer and actions

### Things this App DON'T support
- Bouns feature (persistent storage)
- Pretty page styling using CSS
- Other filters like filter by status
- Photos are not edittable
- Could've been more cleaner code if I managed to use Google Map markers as React components
- Unit tests for components

### NOTE
It's almost my first time for frontend web development and could've been a better if I had more time to study.
I am aware that the App looks ugly but I tried to fulfill functional requirements using react and redux in first place rather than improving the look.
Also, I understand that there are insufficient tests especially for components in the code. Testing the react UI components somewhat seems new to me so I decided to move on other things. Thanks you for this opportunity, and I really enjoyed making my own App.