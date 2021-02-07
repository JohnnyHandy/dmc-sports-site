import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './configureStore'

const { store, persistor } = configureStore();

export default ({ element }) => (
    <Provider store={store}>
        <PersistGate
            persistor={persistor}
        >
            {element}
        </PersistGate>
    </Provider>
);