import React from 'react';
import 'components/app/App.scss';
import Main from 'components/pages/main/Main';
import { Shop } from 'components/pages/shop/Shop';
import { CardItem } from 'components/pages/cardItem/CardItem';
import { Contacts } from 'components/pages/contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Contacts />
    </div>
  );
}

export default App;
