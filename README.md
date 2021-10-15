# Getting Started with Twiiter Service app
![image](https://user-images.githubusercontent.com/77387431/136690701-2be271f9-a70f-495b-af8a-2dd2d433153a.png)

Please refer to DemoTwitterService.mov or access website :
Demo: http://twitter-service-demo.s3-website-us-east-1.amazonaws.com/

<img width="1792" alt="image" src="https://user-images.githubusercontent.com/77387431/136688477-564d92b8-9320-40ef-8fa6-cd4069c23c89.png">

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Deployment
Step 1 aws configure 

Step 2 yarn build

Step 3 aws s3 sync build/ s3://twitter-service-demo --acl public-read
## Resources

### S3 Bucket Files
<img width="1792" alt="image" src="https://user-images.githubusercontent.com/77387431/136689831-8358e9fb-c376-4811-a3f1-a980c1a4cc65.png">

### S3 Bucket website configuration

<img width="1790" alt="image" src="https://user-images.githubusercontent.com/77387431/136689876-2d2bf08f-3809-4b7b-9ff4-7de832e94817.png">

<img width="1792" alt="image" src="https://user-images.githubusercontent.com/77387431/136689856-fbf55752-f28e-4c90-bfce-741fbd75a112.png">



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

