import React,{Component} from 'react';
import {ThemeProvider}  from 'styled-components'
import styled from "styled-components";

const arr = [
   {checkColor:true,value:'Minha timeline'},
   {checkColor:false,value: 'Minhas postagens' }, 
   { checkColor:false,value: 'Coaxa de antrada' }, 
   { checkColor:false,value: 'Meuas Comentarious'},
   {checkColor:false,value: 'Proximos de voce' }
]

const Div = styled.div`
  flex: 1;
  padding:10px;
  // border: 1.5px solid blue;
  display:flex;
  flex-direction:column;
`

const Heading = styled.div`
  margin-top:10px;
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis;
  font-Size: 14px;
  line-height:40px;
  color: ${props=> arr[props.val].checkColor === false ? "#F05C27" : "black" }
  border-left:${props=> arr[props.val].checkColor === false ? '0px solid #F05C27' : '4px solid red   '}
  padding-Left:10%;
  position:relative;
  background:${props=> arr[props.val].checkColor === false ? "white" : "linear-gradient(90deg, rgba(240, 92, 39, 0.4) 1.72%, rgba(240, 92, 39, 0) 92.24%);"};
  &:hover{
    cursor:pointer
  }
`

class Left extends Component{
  state = {
    status:false
  }
  selectOption(selectedIndex){
    //  console.log('Index==>',i)
     arr.map( (v,CurrentIndex) => {
      v.checkColor = selectedIndex == CurrentIndex ? true : false;
     })
     console.log('Arr',arr);
     this.setState({status:!this.state.status})
  }

  render(){
    console.log('Arr',arr);
    return (
      <Div>
        { arr.map( (v,i) =>{
            return(
            <Heading onClick={()=>this.selectOption(i)} val={i} >
                {v.value}
            </Heading>
            )
          })
        }
      </Div>
    );
  }
}

export default Left;

// https://www.figma.com/file/fOMU6aVVgecMe80qQkI1FM/Canihelp--Web?node-id=0%3A1