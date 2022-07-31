import React from 'react';
// 3. talk about npm and axios and add it to our current package
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      starWarsChars: []
    };
  }

// 2. create ()
// handleSubmit = (event) => {
  handleSubmit = async (event) => {
  event.preventDefault();
  console.log('Submit Event: ',event);
  //4. Make request to star wars api
  let starWarsCharacters = await axios.get('https://swapi.dev/api/people/?page=1');
  //now lets get proof of life
  // console.log('Galactic Heros: ',starWarsCharacters);
  console.log('Galactic Heros: ',starWarsCharacters.data.results);
  //this is the response object lets compare the data online and in console.
  // we get back a promise. but why, because it is asyncroniesous so, we got to get js to chill for a second so we tell it its async



  //5. Then I want to take that data and add it to state.
  this.setState({
    starWarsChars : starWarsCharacters.data.results
  })

};

  render() {
    // 6. console log the added state
    console.log('Star Wars STATE:',this.state.starWarsChars);
    let startWarsList = this.state.starWarsChars.map((characterName, index) => {
      return <li key={index}>{characterName.name}</li>;
    })



    return (
      <>
        <h1>Data from an STAR WARS API</h1>
        {/* 1. add submit handler */}
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Display Star Wars Data</button>
        </form>
        {/* 7. add ul and the list variable */}
        {startWarsList}
      </>
     
    )
  }
}

export default App;
