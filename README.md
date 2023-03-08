# DropboxTest

A react native basic app using dropbox api.
the user can navigate and see files on his dropbox account and also

- List files from a dropbox account;
- Navigate through folders;
- Download files;
- Icons for diferent extensions;

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
To run the project first create a copy of `.env.example` on the root folder, and replace the values for your own project, execute this command every time you replace a env:

```
npx react-native start --reset-cache
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
