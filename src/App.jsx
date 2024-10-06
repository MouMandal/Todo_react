
import Header from './Components/Header'
import Input from './Components/Input'
import Message from './Components/Message';
import { useState } from 'react';
import Item from './Components/Item';
import "./App.css";


function App() {
  // let newItem = [
  //   {
  //     content: "Milk",
  //     date: '12/8/2024',
  //   },
  //   {
  //     content: "Chocolate",
  //     date: '10/8/2024',
  //   },
  //   {
  //     content: "Egg",
  //     date: '9/8/2024',
  //   },
  //   {
  //     content: "Vegetables",
  //     date: '22/8/2024',
  //   }
  // ]
  let [newItem, setItem] = useState([]);

  const handleButton = (info, date) => {
    // console.log(`The item is ${info} and ${date}`);
    const addItem = [...newItem, { content: info, date: date }];
    setItem(addItem);
  }

  const deleteItem = (deleteItem) => {
    let deleted = newItem.filter(item => item.content !== deleteItem);
    setItem(deleted);
    // console.log(`The deleted item is ${deleteItem}`);
  }
  return <>
    <Header />
    <Input handleButton={handleButton} />
    {newItem.length == 0 ? <Message /> : ""}
    <Item newItem={newItem} onDeleteClick={deleteItem}></Item>

  </>

}

export default App
