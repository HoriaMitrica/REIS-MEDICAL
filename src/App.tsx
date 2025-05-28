import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import { AuthorizedLayout } from './components/AuthorizedLayout/AuthorizedLayout';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AuthorizedLayout />
            </PersistGate>
        </Provider>
    );
}

export default App; 