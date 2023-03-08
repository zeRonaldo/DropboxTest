# DropboxTest

A react native basic app using dropbox api.
the user can navigate and see files on his dropbox account and also

- List files from a dropbox account;
- Navigate through folders;
- Download files;
- Icons for diferent extensions;

![Simulator Screen Shot - iPhone 14 - 2023-03-08 at 10 21 45](https://user-images.githubusercontent.com/15734369/223724088-ee3399e8-8b1c-4433-9690-202da242223a.png)
![Simulator Screen Shot - iPhone 14 - 2023-03-08 at 10 21 37](https://user-images.githubusercontent.com/15734369/223724100-74aa78bb-7f1a-442d-bb9b-42096cbbc00f.png)

## Installation

To install the app you can use npm:

```
npm install
```

or yarn

```
yarn
```

### IOS and Mac

to test it on your device or emulator is also important to intall the dependencies on cocoapods:

```
cd ios
pod install
```

## Runing the project

You'll need a app on [Dropbox](https://www.dropbox.com/developers) and also a access token that can be retrieved [here](https://dropbox.github.io/dropbox-api-v2-explorer/#files_list_folder)

<img width="538" alt="Captura de Tela 2023-03-08 às 10 19 30" src="https://user-images.githubusercontent.com/15734369/223723837-75fc0e15-c8ae-48c1-a175-0841355d5b43.png">

To run the project first create a copy of `.env.example` on the root folder, and replace the values for your own project, execute this command every time you replace a env:

```
npx react-native start --reset-cache
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
