

# EXPENSE TRACKER- UDEMY ASSIGNMENT  🚀 📊


Expense Tracker App 
# Overview
This project is an Expense Tracker Application built using React Native as part of an Udemy assignment. It allows users to track their expenses efficiently and manage their finances. The app integrates Firebase to store and sync expense data securely, ensuring seamless functionality across devices.

# Features
- Add Expenses: Easily add expense details, including category, amount, and date.
- View Expenses: Display a list of recorded expenses in an intuitive UI.
- Firebase Integration:
- Secure storage of expense data in real-time.
- Data synchronization across devices.
- Scalability and reliability for managing user data.
- Cross-Platform Support: Works seamlessly on both Android and iOS devices.
- Intuitive Design: Clean and responsive user interface.




 

##  Preview of the Application
![App Screenshot](./screenshots/Overview.png)



## Firebase Integration
The app uses Firebase to store and manage expense data. Firebase provides a cloud-based backend that ensures the app is scalable and user-friendly. Below are the Firebase services integrated into the app:

## Firebase Realtime Database:

- Used to save expense data securely.
- Ensures data is synced in real-time across multiple devices.
- Firebase Authentication (Optional):

- Provides user authentication to enable personalized expense tracking (if required).
## Firebase Configuration:

The Firebase SDK is integrated into the app.
Firebase credentials are stored securely in the app configuration file.
## Technologies Used
React Native: Framework for cross-platform mobile app development.
Firebase: Backend-as-a-Service for real-time data storage and management.
JavaScript: Primary programming language for the app.
Redux: Used for state management to handle expense-related data.
## ## Packages Used
This project uses the following key packages:

react: Core React library for building user interfaces.
react-native: React Native library for mobile app development.
firebase: SDK to connect the app with Firebase services.
redux: State management library for managing app-wide state.
@react-navigation/native: Enables screen navigation.
react-native-screens: Optimizes navigation performance.
react-native-gesture-handler: Handles user gestures and touch interactions.
expo: Toolset for building React Native apps with ease.




# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.