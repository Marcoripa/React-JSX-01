import logo from './logo.svg';
import './App.css';

let hello = 'hello world'

function Greeting() {
  return (
    <h1>{hello}</h1>
  )
}

function GreetWithName(name) {
  name = 'Marco'
  return (
    <h1>Hello, {name}</h1>
  )
}




export default GreetWithName
