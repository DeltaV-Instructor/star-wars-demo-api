import React from 'react';
// 5. talk about npm and axios and add it to our current package

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
  }

// 2. create ()
handleSubmit = (event) => {
  event.preventDefault();
  console.log('Submit Event: ',event);
  //3. Make request to star wars api

  //4. Then I want to take that data and add it to state.

};

  render() {
    return (
      <>
        <h1>Data from an STAR WARS API</h1>
        {/* 1. add submit handler */}
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Display Star Wars Data</button>
        </form>
      </>
     
    )
  }
}

export default App;
