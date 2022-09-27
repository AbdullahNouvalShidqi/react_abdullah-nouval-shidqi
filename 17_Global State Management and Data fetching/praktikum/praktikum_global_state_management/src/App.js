import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './App.css'
import Routers from './routes/Routers';
import { store, persistor } from './storage/store';

function App() {
  return (
    <div className='App'>
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <Routers />
        </PersistGate>
      </Provider>
      
    </div>
  );
}

export default App;
