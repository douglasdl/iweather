# Expo Go

## 1) Preparing to Publish

### Welcome

### The project that will be published
- [Git Template Repository](https://github.com/rocketseat-education/iweather-deploy-template)

### Project Configuration
- [Figma: Expo App Icon & Splash](https://www.figma.com/design/A2hVarU34bGZWEGehDpFlI/Expo-App-Icon-%26-Splash?node-id=0-1&p=f&t=9dhhE09KtQiUGOPS-0)

### Create the Icon and Splash Screen

- [Figma: iWeather](https://www.figma.com/design/DJNBaGr7hnvf3cGUQr6dJU/iWeather-•-Projeto-React-Native?node-id=0-1&p=f&t=3pbMloGkBfQYtNaq-0)

### Icon and Splash screen configuration


## 2) Expo Aplication Services

### Knowing the EAS

### [Expo Dashboard](https://expo.dev/accounts/)

### Install the EAS CLI
```sh
npm i -g eas-cli
```

### Check if you are logged in:
```sh
eas whoami
```

### EAS CLI Login:
```sh
eas login
```

### EAS CLI Logout:
```sh
eas logout
```


## 3) Android Build

### Proposal

### Generate the config file

Create the eas.json configuration file (Choose Y, Android):
```sh
eas build:configure
```

### Expo Tools Extension

Install the VS Code Extension: [Expo Tools
](https://marketplace.visualstudio.com/items?itemName=expo.vscode-expo-tools)

### Configure the project

### Android Bundle vs APK

 - .aab In the Store. Will generate optimized version of .apk by device.
 - .apk Out from the Store. Will be bigger and not optimized.

 ### Generate local APK with EAS

Generate the APK locally (id: com.lojaoshop.iweather, Generate keys: Yes):
```sh
eas build -p android --profile preview --local
```

- [APK file](https://expo.dev/artifacts/eas/UhNVhY9XLJCrBRuUisSeM.apk)

### Install the APK in the device

### What is internal distribution

### Generate remote build

Generate the APK remotely in the EAS cloud for internal distribution:
```sh
eas build -p android --profile team
```

### Install the distribution version

- [APK file](https://expo.dev/accounts/douglasdl87/projects/iweather/builds/ba01c41d-1b5c-42b3-8593-772380e86226)

### Generate the production build

```sh
eas build -p android --profile production --message "first production deploy"
```


## 4) Publish at Google Play

### Taking the App to the Store

### [Google Play Console](https://play.google.com/console)

### Create the App in the Store

### Privacy Policy

- [Privacy Policy Sample](https://www.rocketseat.com.br/privacy)

### Contents classification

### Target Public and Security

### App Screenshots

- [PWS Screenshots Generator & Editor](https://progressier.com/pwa-screenshots-generator)

### Icon and Graphic Resources

- [Figma: Google Play Store Template](https://www.figma.com/community/file/960064054935700100)

### Finish the app details page

### Define the testers

### Create the Internal Tests Version

### Test the Tests Version

### Pre Launching Report

### Deploy the version for production 

### Await the Approval

### Google Feedback

### Published App

### Test the published App

```sh
eas submit --platform android 
```

## 5) iOS Build

### iOS Focus

### Run App in iOS

- EAS CLI Login:
```sh
eas login
```

- Expo Go App Login

Run the project to confirm it is OK:
```sh
npx expo start
```

### Install Fastlane on MacOS

- [Fastlane](https://fastlane.tools/)

- Install Fastlane with brew:
```sh
brew install fastlane
```

### Config the test build

### Generate the IPA

Generate the IPA locally (bundle identifier: com.lojaoshop.iweather):
```sh
npx eas build -p ios --profile preview --local
```

### Install in the emulator

### Apple Developer Program

- [Apple Developer](https://developer.apple.com/)

### Generate the production build

Generate the production build in the Apple Developer Account:
```sh
npx eas build -p ios --profile production
```

### Next Step


## 6) Publish at Apple Store

### Taking the App to the Apple Store

### Create the App in the Apple Store

### Screenshots

### Promotional Text

### Build Upload

- [Transporter](https://apps.apple.com/jp/app/transporter/id1450874784?l=en-US&mt=12)

### Pricing and Availability

### App Privacity

### [TestFlight](https://developer.apple.com/testflight/)

### Define the Testers

### TestFlight's App

### Testing the App

### Information Review

### Send App for Revision

### Await the Approval 

### Apple Feedback

### Make the Adjusts

### Published App

### Ending


# CI/CD

## 1) Introduction

### Understanding CI and CD

### Pushing the project to Github

### What is Github Actions

### Screenshots

## 2) CI

### Create the CI workflow

### Configure the CI workflow

### Run the super automatic tests

### Fix the tests

## 3) CD

### Create the CD workflow

### Define the workflows Dependencies

### Test the fail

### Jobs dependencies

### Fix the test

### EAS setup

### Github Secrets

### Environment Variables

### Run the Android deploy test

### Test the build deploy


## 4) EAS Submit Android

### EAS Submit

### Google Service Account

### Create the Secret for the Google Play Service Account

- [JSON to Base64](https://codebeautify.org/json-to-base64-converter)

### Get the Google Play Service Credentials

### Submit Configuration

Add this to the "eas.json":
```json
"submit": {
  "preview": {
    "android": {
      "track": "internal",
      "serviceAccountKeyPath": "./google-services.json",
      "releaseStatus": "draft"
    }
  }
}
```

### Make the Android Build and Submit



### Android Build and Submit

### Conclusion

## 5) EAS Submit iOS

### iOS Configuration

### iOS Credentials

### Create Specific Password

- [Apple ID](https://appleid.apple.com/)

### Create Secret for the Password

### Configure and Run

### Version Bump

### Check the Build and Submit

### Semantic Versions

### Build and Submit for both platforms

### Define the Reference Version

```sh
eas build:version:set
```

- Select Android and inform the version number.

### Check the Build and Submit

### Conclusion


## 6) EAS Update

### Know the EAS Update

### Configure the Update

Confirm that you are logged:
```sh
eas whoami
```

Install the dependencies:
```sh
npx expo install expo-updates
```

Configure:
```sh
eas update:configure
```

### Build Generation

```sh
eas build -p android --profile preview
```

### Build Test

### Send the Update

```sh
eas update --branch preview --message "Search title update"
```

### Updates Dashboard

### Conclusion


- [PWA Screenshots Generator](https://progressier.com/pwa-screenshots-generator)

- [API](https://openweathermap.org/api)

## Emoji
 - [Get Emoji](https://getemoji.com/)


 ## Update to Expo SDK52
 ```sh
 npm install expo@latest
 npx expo install --fix
 ```