import React, { Component } from 'react';
import SinglePoke from '../SinglePoke';

class App extends Component  {
  constructor(props) {
    super(props);
    {/* set state */}



  }


  getAllPokes(){
  {/* make a fetch call and set the state to the response results */}

  }

  componentWillMount() {
  {/* call the getAllPokes method inside here */}
  }




  handleClick(url){
       fetch(url)
   {/*make a second fetch call that takes the url from a single pokemon*/}

  }


    render() {
     {/* Map over the pokemon
          return(
        Return the pokemon name and an onClick event that passes the pokemon url to the handleClick
           )
    */}

   return(
     <div>
     <h1> This is Your Pokemon App </h1>
       {/* return the mapped pokemon list and
      pass Props to the single SinglePoke component
      */}
    </div>

   )
  }
}

export default App;
