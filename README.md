# Assignment - Fibonacci Grid

This is an assignment for a job at a company in Amsterdam

## Running the project

A demo of the project can be found here: [https://callumgrayson.github.io/fib-grid/](https://callumgrayson.github.io/fib-grid/)

To run the project locally:

- clone the repo
- cd into directory
- run `npm install`
- run `npm start`

## Project Planning

- Build a single grid cell as a component. Content and styles will be reactive based on props. Events will be passed back to parent via function props.
- Build a grid builder assuming the grid is square and so based on a single dimension.
- Add functionality to "cross" behaviour.
- Add functionality to check potential fibonacci sequences (up, down, left, right).
- Check behaviour at grid borders - potential errors/anomalies.

## Project Execution

1. Initialize project with create-react-app and repo in GitHub.
1. Create Cell component with handler and styles for each of the required phases.
1. Create Reset button component.
1. Create a grid builder to create the array of arrays.
1. Create phase handling with timing and array handling of styles.
1. Create algorithm to check for fibonacci sequences of the form 1-1-2-3-5.
1. Create phase handler to set cells count and style during clearning.

## Project Review

1. Add type definitions across all relevant files.
1. Add tests to ensure functionality upon future additions/upgrades.
1. Abstract some of the code into reusable functions.

### About the project tools

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
