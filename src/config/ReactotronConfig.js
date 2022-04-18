/* eslint import/no-unresolved: [2, { ignore: ['\@env$'] }] */
import { HostIP } from '@env';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it fro
    .configure(HostIP ? { host: `${HostIP}` } : '') // controls connection & communication settings, inform your IP
    .use(reactotronRedux())
    .use(reactotronSaga())
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  console.tron = tron;

  tron.clear();
}
