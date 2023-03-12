import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages//Home';
import Landing from './Pages/Landing';
import ComingSoon from './Pages/ComingSoon';
import Context from './Components/Context/Context'
import ContextForChatBox from './Components/Context/ContextForChatBox'
import { Provider } from 'react-redux'
import { store} from './Redux/store'

function App() {

  return (
    <Context>
      <ContextForChatBox>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='homepage' element={<HomePage />} />
              <Route path='posts' element={<ComingSoon pageName={'Posts'} />} />
              <Route path='gallery' element={<ComingSoon pageName={'Gallery'} />} />
              <Route path='ToDo' element={<ComingSoon pageName={'ToDo'} />} />
            </Routes>
          </Router>
        </Provider>
      </ContextForChatBox>
    </Context>
  );
}

export default App;
