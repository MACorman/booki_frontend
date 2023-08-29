import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Navigation from './components/Navigation';
import BookContainer from './containers/BookContainer';

function App() {

  // const fetchData = () => {
  //   fetch('http://localhost:3000/books')
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  // }

  return (
    <div className="App">
      {/* <div onClick={fetchData}>Get Data</div> */}
      <Navigation />
      <BookContainer />
    </div>
  );
}

export default App;
