### Setup Development Environment

Visit https://developers.giphy.com

Signup and create a new app to get a beta API Key

Read the docs https://developers.giphy.com/docs/

#### Configure ENVIRONMENT VARIABLE

create `.env.development.local` file for development and `.env.production.local` file for taking build, in project directory and configure enviroment variables as below

```env
REACT_APP_API_URL=https://api.giphy.com/
REACT_APP_GIPHY_TOKEN=upRAglSKfcxmYqFMCWGOlS1SXoxnyLIF
```

execute the below commands after configuring `.env.development.local` file as above

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

execute the below commands after configuring `.env.production.local`

```sh
yarn build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

Create account in zeit https://zeit.co/login

Generate `TOKEN` for Continuous Deployment service

### Continuous Integration and Deployment

Create account in CircleCI https://circleci.com/

Add repo from github/gitlab etc and allow permission to access the codebase

Add `ZEIT_TOKEN`, `REACT_APP_API_URL`, `REACT_APP_GIPHY_TOKEN` to enviroment variables in the project settings

For every push in to the repository github will trigger CIRCLE CI hook which will start the CI

CI consist of maily 3 jobs `build` --> `test` --> `deploy`

React app will be deployed to `zeit` and it will be served under domain specified by alias key in `now.json` file

### Learn More

To learn CircleCI, check out the [CircleCi documentation](https://circleci.com/docs).

To learn Zeit, check out the [Zeit documentation](https://zeit.co/docs).

### React Components

```jsx
<Search onChange={handleChange} />
```

| Prop     | Description                                                     | type                    | Default |
| -------- | --------------------------------------------------------------- | ----------------------- | ------- |
| onChange | The callback function that is triggered when keywords are added | Function(array(string)) | []      |

```jsx
<Toggle onChange={handleToggle} />
```

| Prop     | Description                                             | type               | Default    |
| -------- | ------------------------------------------------------- | ------------------ | ---------- |
| value    | Specifies whether the toggle is selected                | boolean            | false      |
| onChange | The callback function that is triggered icon is clicked | Function(boolean)) | Function() |

```jsx
<Results onScrollEnd={handleInfiniteScroll} />
```

| Prop       | Description                                                       | type       | Default    |
| ---------- | ----------------------------------------------------------------- | ---------- | ---------- |
| onScollEnd | The callback function that is triggered scroll bar reaches bottom | Function() | Function() |

```jsx
<Gif image={data} />
```

| Prop  | Description                                                    | type | Default |
| ----- | -------------------------------------------------------------- | ---- | ------- |
| image | data that contains still image, gif, height and width of image |      |         |

```jsx
<ThemeProvider value="light" />
```

| Prop  | Description                  | type   | Default     |
| ----- | ---------------------------- | ------ | ----------- |
| value | set context of ThemeProvider | string | light\|Dark |
