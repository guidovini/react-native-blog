## React Native App - Blog

`npx expo-cli init blog`
`npm install react-navigation`
`npx expo-cli install react-native-gesture-handler react-native-reanimated react-navigation-stack`

Imports for new react-navigation 4.0

```js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
```

Fix file

- Go to node_modules/metro-config/src/defaults/blacklist.js

```js
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

Add Context

```js
import React, { useContext } from 'react';
```

```js
const IndexScreen = () => {
  const context = useContext(BlogContext)
  ...
```

## Setup JSON Server

https://github.com/typicode/json-server

1. Install `JSON Server` and `ngrok` server.
   `npm install json-server ngrok`

## Install axios

`npm install axios`
