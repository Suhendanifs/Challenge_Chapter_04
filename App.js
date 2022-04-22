import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {Provider} from 'react-redux';
import {persistedStore, store} from './src/screens/store/index';
import Routes from './src/routes';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
