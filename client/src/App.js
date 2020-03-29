import React from 'react';
import AppNavbar from './components/AppNavbar/AppNavbar';
import ShoppingList from './components/ShoppingList/ShoppingList';
import ItemModal from './components/ItemModal/ItemModal';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Provider }from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
