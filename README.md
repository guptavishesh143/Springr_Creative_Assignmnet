News API Application 

**Followed** 
SDLC Model for Developmnet 
KISS Principle for Code

**Executed with **
1) NORMAL API CALL 
2) REDUX THUNK


**Technologies Used **
```
>Redux Thunk 
>React Native
>Redux
```

**features** 
```
>Offline Mode Handling
>Online Mode NEWS API 
>Share the News URL to Socials 
>Save Image to Internal Storage
>GIFS 
```

**Libraries Used**
  ```
    "@react-native-community/masked-view": "^0.1.11",
    "@react-native-community/netinfo": "^6.0.0",
    "@react-navigation/native": "^5.9.4",
    "@react-navigation/stack": "^5.14.5",
    "axios": "^0.21.1",
    "react": "17.0.1",
    "react-native": "0.64.2",
    "react-native-gesture-handler": "^1.10.3",
    "react-native-open-especifics-settings": "^2.0.0",
    "react-native-reanimated": "^2.2.0",
    "react-native-restart": "^0.0.22",
    "react-native-safe-area-context": "^3.2.0",
    "react-native-screens": "^3.3.0",
    "react-redux": "^7.2.4",
    "redux": "^4.1.0",
    "redux-thunk": "^2.3.0",
    "rn-fetch-blob": "^0.12.0"
  ```


**FOR BUILDING THE PROJECT**

**Android**
```
Step 1: Npm Install 
Step 2: cd android 
Step 3: ./gradlew clean 
step 4: npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/ 
step 5: Build Apk from Android Studio Build> Build Bundle Apk > Build APK
```


**IOS**
```
Step 1: Npm Install 
Step 2: cd ios
Step 3: pod install
step 4: react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest
step 5: Run on Any Simulator
```
