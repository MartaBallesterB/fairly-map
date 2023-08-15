# fairly-map

Description TBD :)

This project was bootstrapped with [Ionic](https://github.com/ionic-team/ionic-framework) and React App.
We also use [Capacitor](https://github.com/ionic-team/capacitor) for the native app builds.



## Project Setup

The project has been developed using NodeJS. It is an Ionic React app, based on the “Tabs” starter template provided by Ionic which adds Capacitor for native functionality (I used the following command to create the template `ionic start {project-name} tabs --type=react --capacitor`).

In case you want to build an Android or iOS app you need to install the [Ionic CLI](https://ionicframework.com/docs/intro/cli) and [Android Studio](https://developer.android.com/studio) as well.

After cloning this repository and cd into it, please run `npm i` command, in order to install all the package dependencies. Then, run `ìonic build` to generate all the project binaries. 

## Bundling the application

### Web

Run the command `ionic serve` which should serve your project locally and open a localhost instance.

### Android

_Requires Ionic CLI and Android Studio._

Before running the project make sure that the Android platform is syncronized with the right binary files. For that run `npx cap sync android`. 

Then, you can run the command `npx cap open android` to open the project with Android Studio and then `npx cap run android` to run the app in your pluged devide or in a simulator.

### iOS

_Requires Ionic CLI, XCode and a Mac machine._

Not developed yet but Capacitor iOS apps are configured and managed with Xcode and CocoaPods.


## Contributing

You can contribute in many ways in this project. Any help is more than welcome!