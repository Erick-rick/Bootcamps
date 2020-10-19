import React from 'react';
import {StyleProvider} from '@material-ui/style'
import { CssBaseStyle } from '@material-ui/core'
import GlobalStyle from './commons/styles/global-style'


function App() {
  return (
    <StyleProvider>
      <CssBaseStyle/>
      <GlobalStyle/>

      <div className="App">
     
    </div>
    </StyleProvider>

  );
}

export default App;
