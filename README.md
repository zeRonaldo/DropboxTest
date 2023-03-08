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
1 - created a new app with these settings:
<img width="1171" alt="Captura de Tela 2023-03-08 às 19 27 34" src="https://user-images.githubusercontent.com/15734369/223868672-b674ae44-6398-4ee0-a84b-ba1f87284339.png">


2- added these permissions:
<img width="916" alt="Captura de Tela 2023-03-08 às 19 28 23" src="https://user-images.githubusercontent.com/15734369/223868695-d6d15e21-03bb-4313-a456-771e50c544ae.png">


3- Generated an internal access token (through console developer, on dropbox):
<img width="881" alt="Captura de Tela 2023-03-08 às 19 33 23" src="https://user-images.githubusercontent.com/15734369/223868727-7a90ce33-dbb9-47b6-8c9d-0e90ea5ab18f.png">


4- went over here and generated a new access token: https://dropbox.github.io/dropbox-api-v2-explorer/#files_list_folder
<img width="1399" alt="Captura de Tela 2023-03-08 às 19 35 28" src="https://user-images.githubusercontent.com/15734369/223868754-2edefbed-2385-4c9c-b8a4-880b189ef13c.png">


5- on terminal instead of using 
```
npx react-native start
```
I used:
```

npx react-native start —reset-cache
To make sure the token would be rebuilt;

6- I already see my folders on Home Screen and can navigate through them:
Captura de Tela 2023-03-08 às 19.40.14.png

## License

[MIT](https://choosealicense.com/licenses/mit/)
