# Expo Go

## 1) Preparing to Publish

### Welcome

### The project that will be published
- [Git Template Repository](https://github.com/rocketseat-education/iweather-deploy-template)

### Project Configuration
- [Figma: Expo App Icon & Splash](https://www.figma.com/design/A2hVarU34bGZWEGehDpFlI/Expo-App-Icon-%26-Splash?node-id=0-1&p=f&t=9dhhE09KtQiUGOPS-0)

### Create the Icon and Splash Screen

- [Figma: iWeather](https://www.figma.com/design/DJNBaGr7hnvf3cGUQr6dJU/iWeather-•-Projeto-React-Native?node-id=0-1&p=f&t=3pbMloGkBfQYtNaq-0)

## Icon and Splash screen configuration


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

Create the eas.json configuration file (Choose Y, Android):
```sh
eas build:configure
```

Install the VS Code Extension: [Expo Tools
](https://marketplace.visualstudio.com/items?itemName=expo.vscode-expo-tools)

Generate the APK locally (id: com.lojaoshop.iweather, Generate keys: Yes):
```sh
eas build -p android --profile preview --local
```

## 4) Publish at Google Play


## 5) iOS Build


## 6) Publish at Apple Store




## [Google Play Console](https://play.google.com/console)

## Screenshots

- [PWA Screenshots Generator](https://progressier.com/pwa-screenshots-generator)
- [Figma: Google Play Store Template](https://www.figma.com/community/file/960064054935700100)

- [API](https://openweathermap.org/api)

## Emoji
 - [Get Emoji](https://getemoji.com/)


 ## Update to Expo SDK52
 ```sh
 npm install expo@latest
 npx expo install --fix
 ```