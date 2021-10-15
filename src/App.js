import './App.css';
import TotalAmount from './components/top/TotalAmount.js'
import React, { useState, useEffect } from 'react';
import Main2x1split from './containers/Main2x1split.js'
import ItemContainer from './containers/ItemContainer.js'
import ItemList from './components/itemlist/ItemList.js'
import SelectedItems from './components/selectedItems/SelectedItems.js';

function App() {
  const [register, setRegister] = useState("Total amount")
  const [selectedItems, setSelectedItems] = useState([])
  let allItems = [{ name: "appleee", price: 10 }, { name: "Milk", price: 20 }, { name: "bread", price: 15 }, { name: "hotdogs", price: 5 }, { name: "water", price: 3 }, { name: "apple", price: 10 }, { name: "Milk", price: 20 }, { name: "bread", price: 15 }, { name: "hotdogs", price: 5 }, { name: "water", price: 3 }, { name: "apple", price: 10 }, { name: "Milk", price: 20 }, { name: "bread", price: 15 }, { name: "hotdogs", price: 5 }, { name: "water", price: 3 }, { name: "apple", price: 10 }, { name: "Milk", price: 20 }, { name: "bread", price: 15 }, { name: "hotdogs", price: 5 }, { name: "water", price: 3 }, { name: "apple", price: 10 }, { name: "Milk", price: 20 }, { name: "bread", price: 15 }, { name: "hotdogs", price: 5 }, { name: "water", price: 3 },]

  useEffect(() => {
    let count = 0;
    selectedItems.map(item => count = count + item.price * item.count)
    setRegister("Total price: " + count);
  }, [selectedItems])
  return (
    <div className="App">
      <header className="App-header">
        Crypto cash registry, IDEA PROJECT
        <h1>Bring your store with you everywhere:</h1>
        <ul>
          <li>A cash registry on the blockchain</li>
          <li>Connect with your wallet to view your store</li>
          <li>Automatic QR code for payments</li>
          <li>Simple statistics</li>
          <li>Stock Status</li>
          <li>Store it locally or push it to the blockchain</li>
        </ul>
      </header>
      <div className="App-main">
        <TotalAmount amount={register}></TotalAmount>
      </div>
      <Main2x1split>
        <SelectedItems selected={selectedItems} setShoppingList={setSelectedItems} />
        <ItemList items={allItems} selected={selectedItems} setSelected={setSelectedItems} />
      </Main2x1split>
    </div>
  );
}

// https://www.bitcoinqrcodemaker.com/bitcoin-qr-code-maker-api-and-widgets/
// https://www.bitcoinqrcodemaker.com/api/?style=ethereum&address=0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B&amount=10

export default App;
