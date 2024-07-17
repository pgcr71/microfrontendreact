# MicroFrontend Cats Application

This is a microfrontend application which exposing renderCats method
```
window.renderCats = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};
```
above method is called by container application to render mfe inside a containerid.

#### Routes can be managed by container application via sending history as props and can be managed by mfe application itself.


### Container Application link: https://github.com/VinayKrMittal/react-mfe-container


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


