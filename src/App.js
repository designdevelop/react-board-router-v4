import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BoardList from './containers/board_list';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" render={({ match }) => {
                if(!match.isExact){
                  return(
                    <div>Header</div>
                  )
                }else{
                  return(<div></div>);
                }
            }}/>

            <Route path="/board/list" component={BoardList}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
