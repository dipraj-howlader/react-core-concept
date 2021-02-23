import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React, { useEffect, useState } from 'react';

function App() {
  const nayoks =['Anwar', 'Jafor', 'Alomgir','Salam Sha', 'Bappy', 'Tappy']
  const products =[{name:'PhotoShop', price:'%99.99'},
  {name:'PhotoThop', price:'%11.99'},
  {name:'PhotoMhop', price:'%22.99'},
  {name:'PhotoPhop', price:'%33.99'},
  {name:'PhotoDhop', price:'%44.99'},
  {name:'PhotoRhop', price:'%55.99'},
  {name:'PhotoHhop', price:'%66.99'},
  {name:'PhotoOhop', price:'%77.99'}
  ]
  const friends =[{name:'Minhaj Rifat', phoneNumber:'01785555555'},
  {name:'Minhaj Anwar', phoneNumber:'017855569696'},
  {name:'Minhaj Ali', phoneNumber:'01785512569'},
  {name:'Minhaj Rahman', phoneNumber:'017836588'},
  {name:'Minhaj Alamgir', phoneNumber:'017857474554'},
  {name:'Minhaj Uddin', phoneNumber:'017853698521'},
]

return (
    <div className="App">
      <header className="App-header">
    <p>I am a React Person</p>
    <Counter></Counter>
    <Users></Users>

    {/* MAP WITH DYNAMIC DATA */}
    <ul>
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      } 
    </ul>
    {
      products.map(product => <li>{product.name} </li>)
    }
  {
    products.map(pd => <Product name={pd}></Product>)
  }
{
  friends.map(frd => <Friends friend={frd}></Friends>)
}
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  const handleDecrease = () => {
    const newCount = count -1;
    setCount(newCount);
  }
  ;
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  // for Data Loading , use useEffect
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })

  return(
    <div> 
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => (<div><li>{user.name}</li>
          <p>{user.email}</p>
          </div>)  )
        }
      </ul>
    </div>
  )
}


function  Friends(props) {
  const friendStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'blue',
    height:'200px',
    width:'200px',
    float:'left',
    padding:'10px',
    margin:'10px',
    color:'white'
  }
  const {name, phoneNumber} = props.friend
  return(
    <div style={friendStyle}>
      <h2>{name}</h2>
      <p>{phoneNumber}</p>
      <button>Phone</button>
    </div>
  )
}

function Product(props) {
  const productStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left',
    padding:'10px',
    margin:'10px',
    color:'black'
  }
  // const name = props.name
  // const price = props.price
  // console.log(name);
  const {name, price} = props.name;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
const personStyle={
  border: '2px solid red',
   margin:'2px',
    borderRadius: '10%'
}
// console.log(props)
  return(
  <div style={personStyle}>
    <h1>Name: {props.name} {props.food}</h1>
  <p>I want to be like him</p>
  </div>) 
}

export default App;
