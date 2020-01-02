import React,{Component} from 'react';
import {ThemeProvider}  from 'styled-components'
import styled from "styled-components";

const Div = styled.div`
  // border: 1px solid gray;
  flex: 1.5
`
const MainDiv = styled.div`
  // border: 2px solid dodgerblue;
  display: flex;
  flex-direction: row;
  padding:6px;
`
const Card = styled.div`
  width:73%;
  box-shadow: 0px 0px 3px #aaaaaa;
  border-radius:2px;
  padding:0px 14px;
  margin-top:19px;
  margin-left:10px;
`
const Content = styled.div`
//  border:1px solid green;
`
const Header = styled.div`
  display:flex;
  flex-direction:row;
  padding:2px 0px;
`
const LeftDiv = styled.p`
  flex:3;
  color:gray;
  font-size:12px;
`
const RightDiv = styled.div`
  flex:.6;
  display:flex;
  align-items:center;
  justify-content:space-between;
  flex-direction:row;
`

const ButtunLeft = styled.div`
//    background:red;
`
const ButtunRight = styled.div`
//    background:blue;
      padding-right:5px;
`
const span ={
    color:'lightgray',
}
const Body = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  flex-direction:row;
  // border:1px solid red;
`
const LeftImg = styled.div`
  flex:1;
  height:152px;
  margin-right:2px;
  background-image:url('https://images.pexels.com/photos/1837599/pexels-photo-1837599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
  background-size:cover;
  background-position:center;
`  
const RightImg = styled.div`
  flex:1;
  height:152px;
  margin-left:2px;
  background-image:url('https://images.pexels.com/photos/2758210/pexels-photo-2758210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
  background-size:cover;
  background-position:center;
`  
const Footer = styled.div`
    // margin-top:15px;
    display:flex;
    // justify-content:space-between;
    flex-direction:row;
    padding:12px 0px;
`
const UserImg = styled.div`
   flex:.5  ;
   display:flex;
   align-items:center;
`
const CirclImg = styled.img`
    background-image:url('https://images.pexels.com/photos/6231/marketing-color-colors-wheel.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500');
    background-size:cover;
    background-position:center;
    border-radius:50%;
    width:30px;
    height:30px;
`
const image = {
    borderRadius:'50%',
}
const UserName = styled.div`
   flex:6;
   display:flex;
   flex-direction:column;
   margin-left:4px;

`
const P1 = styled.div`
   font-size:10px;
  //  border:1px solid red;
   width:55px;
   @media (max-width: 800px) {
    margin-top:3px;
    font-size:9px;
  }
`
const P2 = styled.div`
    font-size:9px;
    color:lightgray;
`
const VERPERFIL = styled.p`
   font-size:8.8px;
   color:#F05C27;
   width:50px;
   text-align:right;
   @media (max-width: 800px) {
    font-size:7px;
  }
`

class Right extends Component{

  render(){
    return (
    <Div>  
      <MainDiv>
          <Card>
            <Content>
               <Header>
                  <LeftDiv>
                      Proxemo de voce
                  </LeftDiv>
                  <RightDiv>
                      <ButtunLeft>
                        <span style={span}>
                          <i style={{color:'gray',fontSize:'25px',marginRight:'10px'}} class="fa fa-angle-left" aria-hidden="true"></i>
                        </span>
                      </ButtunLeft>
                      <ButtunRight>
                        <span style={span}> 
                          <i style={{color:'gray',fontSize:'25px'}} class="fa fa-angle-right" aria-hidden="true"></i>
                        </span>
                      </ButtunRight>
                  </RightDiv>
               </Header>
               <Body>
                   <LeftImg></LeftImg>
                   <RightImg></RightImg>
               </Body>
              <Footer>
                  <UserImg>
                    <CirclImg></CirclImg>
                  </UserImg>
                  <UserName>
                      <P1>Paulo Sauza</P1>
                      <P2>Encanader</P2>
                  </UserName>
                  <VERPERFIL>
                      VER PERFIL
                  </VERPERFIL>
              </Footer> 
            </Content>
          </Card>
      </MainDiv>
    </Div>  
    );
  }
}

export default Right;
