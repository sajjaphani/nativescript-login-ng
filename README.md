# NativeScript Login Angular

This repo is a [NativeScript](https://www.nativescript.org/) application for building Login functionality with the help of [Angular](https://www.nativescript.org/nativescript-is-how-you-build-native-mobile-apps-with-angular) framework. The [master](https://github.com/sajjaphani/nativescript-login-ng) branch contains the code to setup a login screen and adding a dummy backend mechanism. The [login-kinvey](https://github.com/sajjaphani/nativescript-login-ng/tree/login-kinvey) branh contains the code to connect to the Kinvey backend.

Below images shows the login screen on iPhone and Android respectively.

<img src="https://raw.githubusercontent.com/sajjaphani/nativescript-login-ng/login-kinvey/screens/login-screen-android.png" alt="alt text" width="320" height="640"> <img src="https://raw.githubusercontent.com/sajjaphani/nativescript-login-ng/login-kinvey/screens/login-screen-ios.png" alt="alt text" width="320" height="640">

Below images shows the login screen on iPad and Android Tablet respectively.

<img src="https://raw.githubusercontent.com/sajjaphani/nativescript-login-ng/login-kinvey/screens/login-screen-iPad.png" alt="alt text" width="420" height="640">  <img src="https://raw.githubusercontent.com/sajjaphani/nativescript-login-ng/login-kinvey/screens/login-screen-tablet.png" alt="alt text" width="420" height="640">

To configure Kinvey backend in NativeScript app, open [App config](https://github.com/sajjaphani/nativescript-login-ng/blob/login-kinvey/src/app/app.config.ts) file and add the corresponding appKey and appSecret.

```ts
export const appConfig = {
    appKey: 'your_app_key',
    appSecret: 'your_app_secret'
}
```

# Best practices for Forms!

This application adapts the following best practices for building the login form.

  - Field labelling
  - Showing password
  - Input Validations
  - Inline error messages

