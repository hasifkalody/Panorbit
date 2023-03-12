import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages//Home';
import Landing from './Pages/Landing';
import ComingSoon from './Pages/ComingSoon';
import ContextForChatBox from './Components/Context/ContextForChatBox'
// redux part start
import { Provider } from 'react-redux'
import { store, persistor } from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react';
// redux part ended

function App() {

  return (
    <ContextForChatBox>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='homepage' element={<HomePage />} />
              <Route path='posts' element={<ComingSoon pageName={'Posts'} />} />
              <Route path='gallery' element={<ComingSoon pageName={'Gallery'} />} />
              <Route path='ToDo' element={<ComingSoon pageName={'ToDo'} />} />
            </Routes>
          </Router>
        </PersistGate>
      </Provider>
    </ContextForChatBox>
  );
}

export default App;
