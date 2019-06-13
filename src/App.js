import React, { Component } from "react";
import { DogList } from "./components/DogList";
import { SearchBox } from "./components/SearchBox";
import "./App.css";

class App extends Component {
  state = {
    dogs: [
      { name: "Max", breed: "unknown" },
      { name: "Charlie", breed: "unknown" },
      { name: "Cooper", breed: "unknown" },
      { name: "Buddy", breed: "unknown" },
      { name: "Jack", breed: "unknown" },
      { name: "Oliver", breed: "unknown" },
      { name: "Bear", breed: "unknown" },
      { name: "Rocky", breed: "unknown" },
      { name: "Duke", breed: "unknown" },
      { name: "Tucker", breed: "unknown" },
      { name: "Bella", breed: "unknown" },
      { name: "Lucy", breed: "unknown" }
    ],
    searchDog: ""
  };

handleInput=e=>{
    e.preventDefault()
    this.setState({searchDog:e.target.value})
    
}

  render() {
      
      let filteredDogs=this.state.dogs.filter(dog=>{
          return dog.name.toLowerCase().includes(this.state.searchDog.toLowerCase())
      })
    return (
      <div>
        <h1>Just a list of Dogs</h1>
        <SearchBox handleInput={this.handleInput}/>
        <DogList filteredDogs={filteredDogs} />
      </div>
    );
  }
}

export default App;
