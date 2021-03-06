# Front End Project

## Overview
Create an application to retrieve food truck information for the Charlotte area. Please find the requirements outlined below. These are just basic guidelines and extra features are always encouraged. Please use your best judgement for how to design and implement it.

## Requirements
### Language
Choose either AngularJS or ReactJS to build this project. Finish one of the below courses or any other courses you find relevant before attempting the project.
- [AngularJS Course](https://frontendmasters.com/courses/building-apps-angular/) 
- [ReactJS Course](https://frontendmasters.com/courses/complete-react-v4/) 

### Basics 
<i>Yelp API</i>
- Setup a Yelp API Account
- Fetch food truck data from Yelp API by sending “food truck” as a search parameter

<i>Map Visualization</i>
- Find a suitable map library for visualizing the locations of the food trucks on a map in the browser
- Visualize Yelp API food trucks locations on the map with some kind of marker (dot, pin, logo)
- Map points are clickable and open a page or popup with food truck information Yelp provides
- Give a path for the user to return to the map view from food truck view without clicking back button
- The map should be draggable and results should refresh upon dragging

<i>Search and Filter</i>
- Add a search function based on name, cuisine type, etc.
- Add filter that can hide or show depending on name, cuisine type, etc.
  - This can be switches, search boxes, check boxes, etc.

<i>Favorites List</i>
- Give the user the option to favorite specific food truck from the food truck view
- Display favorite marker in the food truck view if a particular food truck is already in the favorites list
- Maintain the favorites list in the application state with a state management library
  - Do not store them in a database or file
- Create a page that lists favorites
  - User can add or remove favorites from this page

## Things We Do Not Expect
- We do not expect this application to be well-designed