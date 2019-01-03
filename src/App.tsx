import * as React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
import NavBar from './common/components/NavBar';
import Main from './common/components/Main';

class App extends React.Component {
  public render() {
    return (
      <>
        <MuiThemeProvider theme={theme}>
          <NavBar />
          <Main />
        </MuiThemeProvider>
      </>
    );
  }
}

export default App;
