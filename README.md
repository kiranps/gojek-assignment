## Setup Development Environment

```sh
yarn install # install dependecies
yarn start # start developement server
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Start Test Runner In Interactive mode

```sh
yarn test
```

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Build App

```
yarn build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

Create account in zeit https://zeit.co/login

Genrate token for Continuous Deployement service

## Continuous Integration and Deployment

Create account in CircleCI https://circleci.com/

Add repo from github/gitlab etc and allow permission to access the codebase

Add ZEIT_TOKEN to enviroment variables in the project settings

## Learn More

To learn CircleCI, check out the [CircleCi documentation](https://circleci.com/docs).

To learn Zeit, check out the [Zeit documentation](https://zeit.co/docs).
