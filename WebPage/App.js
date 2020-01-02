import React,{Component} from 'react';
import {ThemeProvider}  from 'styled-components'
import styled from "styled-components";
import Left from './components/Left';
import Right from './components/Right';
import Center from './components/Center';

const Div = styled.div`
  border: 2px solid pink;
  display: flex;
  flex-direction: row;
  padding:50px;
`

const theme={
  primarycolor:"red",
  secondaryColor:"green"
}


class App extends Component{

  render(){
    return (
      <ThemeProvider theme={theme}>
        <Div>
                <Left/>
                <Center/>
                <Right/>
        </Div>
      </ThemeProvider>
    );
  }
}

export default App;

// https://www.figma.com/file/fOMU6aVVgecMe80qQkI1FM/Canihelp--Web?node-id=0%3A1