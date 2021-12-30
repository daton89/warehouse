# Warehouse

This is an Angular 13 application with Electron. I built this application as a sentinel project to make experiments.

I

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Code Styles and Guidelines

We are using Prettier as formatter, so I needed to setup a precommit hook using husky to avoid formatting issues.

[Resources](https://prettier.io/docs/en/precommit.html)

## Package Angular-CLI application into Electron

run `npm i -D electron` and add `mkdir src/electron`

```json
// src/electron/package.json
{
  "name": "angular-electron",
  "version": "0.1.0",
  "main": "electron.js"
}
```

Now add file `electron.js`, it is the script indicating how the application should behave while creating the main window, and how it should handle the different events such as when the windows are closing.

```js
// src/electron/electron.js

const { app, BrowserWindow } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 })

  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/index.html`)

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
```

Now change `<base href="/">` to `<base href="./">` into `src/index.html`

This is necessary because Electron is using the file:// protocol instead of http://.

The last step is to add some scripts to build the app for Electron. What we need is to copy the two created file into the dist folder when building the app. Open up package.json (this time, the one at the root, not the one in src/electron) and edit the “scripts” section to add the two following scripts:

The first one is a simple ng build followed by a copy of all the files contained in src/electron/ to dist/ (created by ng build). The second one uses the build-electron script but adds the electron command to start the app using Electron, from the dist/ folder.

```json
  "scripts" {
[...]
    "build-electron": "ng build --base-href . && cp src/electron/* dist",
    "electron": "npm run build-electron && electron dist"
  },
[...]
```

Now, go ahead, and run:

`npm run electron`

And you should see your Angular app packaged into a desktop application:

![angular electron](https://i1.wp.com/www.blog.bdauria.com/wp-content/uploads/2016/10/AngularElectron-2016-10-12-13-01-43.png?w=874)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.
