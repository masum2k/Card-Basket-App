import { IconCircleCheck } from '@tabler/icons-react';
import { Space, List, ThemeIcon, rem, Container, SimpleGrid, Input, Button } from '@mantine/core';
import CardComponent2 from './CardComponent2';
import { useState } from 'react';
import React from 'react';
import "./App.css";

const initialStoreItems = [
  {
    name: "Ütü",
    price: 20
  },
  {
    name: "Araba",
    price: 100
  },
  {
    name: "Bisiklet",
    price: 30
  },
  {
    name: "Sandalye",
    price: 5
  }
];



function App() {

  let [storeItems, setStoreItems] = useState(initialStoreItems);
  let [basketItems, setBasketItems] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let [newItemName, setNewItemName] = useState("");
  let [newItemPrice, setNewItemPrice] = useState("");

  let filteredItems = basketItems.filter((item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);

  function getSearchText() {
    return searchValue === "" ? "?" : searchValue;
  }

  function addItem() {
    if (newItemName && newItemPrice) {
      setStoreItems([...storeItems, { name: newItemName, price: parseFloat(newItemPrice) }]);
      setNewItemName("");
      setNewItemPrice("");
    }
  }
  function removeItem(x) {
    setStoreItems(storeItems.filter(item => item.name !== x));
  }

  return (
    < Container >
      <h1>Add to market</h1>
      <Input.Wrapper label="Add name">
        <Input
          size="md"
          radius="md"
          placeholder="Item name"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
      </Input.Wrapper>
      <Input.Wrapper label="Add price">
        <Input
          size="md"
          radius="md"
          placeholder="Item price"
          value={newItemPrice}
          onChange={(e) => setNewItemPrice(e.target.value)}
        />
      </Input.Wrapper>
      <Space h="xs" />
      <Button color='tomato' onClick={addItem} style={{ marginTop: "10px" }}>Add Item</Button>
      <SimpleGrid cols={3} className='Store'>
        {storeItems.map((storeItem) => {
          return <CardComponent2 key={storeItem.name} name={storeItem.name} price={storeItem.price} onAdd={() => { setBasketItems([...basketItems, { name: storeItem.name, price: storeItem.price }]) }} onRemove={() => removeItem(storeItem.name)} />
        })}
      </SimpleGrid>
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg>  Looking for {getSearchText()}
      </p>
      <Space h="xs" />
      <Input.Wrapper label="Search">
        <Input id='searchId' onChange={(e) => setSearchValue(e.target.value)} />
      </Input.Wrapper>
      <Space h="md" />
      <List
        className='List'
        spacing="xs"
        size="sm"
        center
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        {filteredItems.map((basketItem, index) => (<List.Item key={index}>{basketItem.name}</List.Item>))}
      </List>
      <Space h="xl" /><Space h="xl" /><Space h="xl" /><Space h="xl" />
    </Container >

  )
}

export default App;