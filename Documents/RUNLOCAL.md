# Running Locally 🚀

```bash
$ git clone https://git.linux.iastate.edu/cs309/fall2020/hv_10.git
```

## Configuring enviorment variables

To configure your local enviorment with API keys required to run the application locally here are the steps you need to do.

### Front End

```bash
$ cd Frontend

# On Windows
$ Set-Content -Path "next.config.js"

# On Mac
$ touch ~/next.config.js
```

Change the content of the new file you created to this:

You can get your API key [here](https://www.mapbox.com/)

```javascript
module.exports = {
  env: {
    REACT_APP_MAPBOX_TOKEN: '{{API KEY}}',
  },
};
```

### Back End

```bash
$ TODO
```

# Front End 💻

You will need to have Npm, Node.js and optially yarn installed on your machine: [NPM](https://www.npmjs.com/get-npm), [Node.js](https://nodejs.org/en/download/), [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)


```bash
$ cd Frontend
$ yarn
$ yarn dev
```

# Back End 📡

You will need to have gradle installed on your machine: [Instructions](https://gradle.org/install/)

```bash
$ cd Backend
$ gradle bootRun
```