import React, {component} from 'react';

import "./styles.css";

import Header from './Components/Header';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <Header/>
    <Main></Main>
  </div>
);

/* simplificado a função app ^
class App extends component{
  render(){
    return (
      <div className="App">
  
      </div>
   );
  }
}*/

export default App;
