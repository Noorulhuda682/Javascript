import React,{Component} from 'react';
import {ThemeProvider}  from 'styled-components'
import styled from "styled-components";

const Div = styled.div`
  // border: 1px solid gray;
  flex: 2.5
`
const MainDiv = styled.div`
  // border: 2px solid dodgerblue;
  padding:15px;
`
const Header = styled.div`
  display: flex;
  margin-top:7px;
  flex-direction: row;
`

const HeaderLeft = styled.div`
  flex:.4
`
const image = {
  borderRadius:'50%',
}
const HeaderRight = styled.div`
  // border: 1px solid red;
  flex:5;
  margin-left:10px;
`
const Input = styled.input`
  border: 1px solid #D3D0D8;
  border-radius:3px;
  width:100%;
  height:68px;
`
const InputBottom = styled.input`
  border: 1px solid #D3D0D8;
  border-radius:3px;
  width:100%;
  height:50px;
  margin-left:5px;
`

const IconsSection = styled.div`
  margin-top:6px;
  display:flex;
  flex-direction:row;
  // border: 1px solid #D3D0D8;
`
const IconsSecLeft = styled.div`
   flex:.4;
   width:55px;
`
const IconsSecRight = styled.div`
  flex:5;
  margin-left:20px;
  @media(max-width:1100px){
    margin-left:40px;
  }
`
const LeftIcons = styled.div`
  //  border:1px solid black;
   flex:3;
`
const RightIcons = styled.div`
  //  border:1px solid black;
   flex:1;
   text-align:right;
`
const Buttton = styled.span`
     background:#F05C27;
     color:white;
     font-size:9px;
     border-radius:4px;
     padding:7px 15px;
`

const Body = styled.div`
   border-top: 1px solid #ECECEC;;
   margin-top:40px
`
const BodyTop = styled.p`
    color:gray;
    font-size:12px;
    padding-left:3px;
    margin-top:30px
`
const CardSection = styled.div`
  margin-top:20px;
`
const Card = styled.div`
  box-shadow: 0px 0px 4px #aaaaaa;
  border-radius:2px;
  margin-top:10px;
`
const CardHeader = styled.div`
      // border:1px solid gray;
      display:flex;
      padding:5px 10px;
      flex-direction:row;
`
const CardHL = styled.div`
      flex:5;
      display:flex;
      flex-direction:row;
      align-items:center;
      // border:1px solid black
`
const CardHR = styled.div`
    flex:1;
    display:flex;
    flex-direction:row;
    // text-align:right;
    // border:1px solid black;
    align-items:center;
    justify-content:flex-end;
`
const Wraped = styled.p`
    width:40px;
    // border:1px solid black
`
const UserImg = styled.div`
   flex:.4;
   display:flex;
   align-items:center;
`
const UserName = styled.div`
   flex:7;
   display:flex;
   flex-direction:column;
   margin-left:7px;
`
const P1 = styled.div`
   font-size:11px;
`
const P2 = styled.div`
    font-size:10px;
    color:lightgray;
    white-space: nowrap;
`
const CardBody = styled.div`
   width:100%;
   height:200px;
   background-image: url("https://images.pexels.com/photos/2758210/pexels-photo-2758210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500jpg");
   background-size:cover;
   background-position:center;
   background-repeat: no-repeat;
`
const CradFooter = styled.div`
  //  border:1px solid gray;
  padding:10px 10px;
`
const ParagraphSection = styled.div`
     padding:2px 5px;
`
const CommentLikeSection = styled.div`
   display:flex;
   flex-direction:row;
   padding:10px 10px;
   border: 1px solid rgba(0, 0, 0, 0.03);
   border-left-width:0px;
   border-right-width:0px;

`
const CLLeft = styled.div`
   flex:5;
   display:flex;
   align-items:flex-start;
`
const CLRight = styled.div`
   flex:1.5
   display:flex;
   align-items:flex-start;
   justify-content:flex-end;
`
const UserMessageSection = styled.div`
  padding:5px 5px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  border-left-width:0px;
  border-right-width:0px;
  border-top-width:0px;
`

const UserMsgeSecChild = styled.div`
  // border:1px solid red;
  display:flex;
  flex-direction:row;
`

const CardFooterPostSection = styled.div`
  //  border:1px solid blue;
   margin-top:15px;
   padding:10px 5px;
`
const PostSectionLeft = styled.div`
  //  border:1px solid blue;
   margin-top:5px;
   display:flex;
   flex-direction:row;
`

class Center extends Component{

  render(){
    return (
    <Div>  
      <MainDiv>
        <Header>
            <HeaderLeft>
            <img src="https://images.pexels.com/photos/6231/marketing-color-colors-wheel.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                     style={image} height="55" width="55"/>
            </HeaderLeft>
            <HeaderRight>
             <Input></Input>
            </HeaderRight>
        </Header>
        <Header>
            <IconsSecLeft>
            </IconsSecLeft>
            <IconsSecRight>
              <IconsSection>
                 <LeftIcons>
                    <i style={{color:'lightgray',fontSize:'12px'}}   class="fa fa-paper-plane" aria-hidden="true"></i>
                    <i style={{marginLeft:'10px',color:'lightgray',fontSize:'12px'}}   class="fa fa-camera" aria-hidden="true"></i>
                    <i style={{marginLeft:'10px',color:'lightgray',fontSize:'12px'}}  class="fa fa-video-camera" aria-hidden="true"></i>
                 </LeftIcons>
                <RightIcons>
                      <Buttton>Publicar</Buttton>
                </RightIcons>
              </IconsSection>
            </IconsSecRight>
        </Header>
        <Body>
          <BodyTop>postagens</BodyTop>
          <CardSection>
            <Card>
                 <CardHeader>
                   <CardHL>
                      <UserImg>
                        <img src="https://images.pexels.com/photos/6231/marketing-color-colors-wheel.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                         style={{borderRadius:'50%'}} height="30" width="30"/>
                      </UserImg>
                      <UserName>
                          <P1>Paulo Sauza</P1>
                          <P2>Encanader
                          <i style={{color:'gray',marginLeft:'10px'}} class="fa fa-star" aria-hidden="true"></i>
                           <span style={{marginLeft:'2px'}}>4.37</span>
                          </P2>
                      </UserName>
                   </CardHL>
                   <CardHR>
                    <Wraped> 
                     <i style={{marginLeft:'5px',color:'lightgray',fontSize:'10px'}}   class="fa fa-map-marker" aria-hidden="true"></i>
                     <span style={{fontSize:'10px',color:'lightgray',marginLeft:'2px'}}>35.km</span>
                    </Wraped>
                   </CardHR>
                 </CardHeader>
                 <CardBody> </CardBody>
                 <CradFooter>
                    <ParagraphSection>
                      <p style={{padding:'0px 5px',fontSize:'12px',color:'gray'}}>
                        O encanador é um daqueles profissionais tão necessários em horas urgentes, 
                        daqueles que solucionam problemas que nos parecem impossíveis, em poucos minutos.
                          Nossa empresa trabalha 24 horas por dia.
                      </p>
                    </ParagraphSection>
                    <CommentLikeSection>
                        <CLLeft>
                          <i style={{fontSize:'10px',color:'#F05C27'}} class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                          <span style={{color:'#F05C27',fontSize:'10px',marginLeft:'2px'}}>8</span>
                          <i style={{color:'gray',fontSize:'12px',marginLeft:'15px'}} class="fa fa-commenting" aria-hidden="true"></i>
                          <span style={{color:'#38302D',fontSize:'10px',marginLeft:'2px'}}>0</span>
                        </CLLeft>
                        <CLRight>
                          <i style={{color:'#38302D',fontSize:'12px'}} class="fa fa-commenting-o" aria-hidden="true"></i>
                          <span style={{color:'#38302D',fontSize:'10px',marginLeft:'2px'}}>comment</span>
                        </CLRight>
                    </CommentLikeSection>
                    <CardFooterPostSection>
                        <PostSectionLeft>
                            <div style={{flex:.5,}}>
                                <img src="https://images.pexels.com/photos/6231/marketing-color-colors-wheel.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                        style={image} height="30" width="30"/>
                            </div>
                            <div style={{flex:10,}}>
                                <InputBottom></InputBottom>
                            </div>
                        </PostSectionLeft>
                        <div style={{display:'flex',justifyContent:'flex-end',marginTop:'15px'}}>
                              <Buttton>Publicar</Buttton>
                        </div>
                    </CardFooterPostSection> 
                 </CradFooter>
            </Card>


            <Card>
                 <CardHeader>
                   <CardHL>
                      <UserImg>
                        <img src="https://images.pexels.com/photos/6231/marketing-color-colors-wheel.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                         style={{borderRadius:'50%'}} height="30" width="30"/>
                      </UserImg>
                      <UserName>
                          <P1>Paulo Sauza</P1>
                          <P2>Encanader{'   '} <i style={{color:'gray'}} class="fa fa-star" aria-hidden="true"></i>
                           <span>4.37</span>
                          </P2>
                      </UserName>
                   </CardHL>
                   <CardHR>
                    <Wraped> 
                      <i style={{marginLeft:'5px',color:'lightgray',fontSize:'10px'}}   class="fa fa-map-marker" aria-hidden="true"></i>
                      <span style={{fontSize:'10px',color:'lightgray',marginLeft:'2px'}}>35.km</span>
                    </Wraped>
                   </CardHR>
                 </CardHeader>
                 <CardBody> 
                 </CardBody>
                 <CradFooter>
                    <ParagraphSection>
                     <p style={{padding:'0px 5px',fontSize:'12px',color:'gray'}}>
                       O encanador é um daqueles profissionais tão necessários em horas urgentes, 
                     daqueles que solucionam problemas que nos parecem impossíveis, em poucos minutos.
                      Nossa empresa trabalha 24 horas por dia.</p>
                    </ParagraphSection>
                    <CommentLikeSection>
                        <CLLeft>
                          <i style={{fontSize:'10px',color:'#F05C27'}} class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                          <span style={{color:'#F05C27',fontSize:'10px',marginLeft:'2px'}}>8</span>
                          <i style={{color:'gray',fontSize:'12px',marginLeft:'15px'}} class="fa fa-commenting" aria-hidden="true"></i>
                          <span style={{color:'#38302D',fontSize:'10px',marginLeft:'2px'}}>0</span>
                        </CLLeft>
                        <CLRight>
                          <i style={{color:'#38302D',fontSize:'12px'}} class="fa fa-commenting-o" aria-hidden="true"></i>
                          <span style={{color:'#38302D',fontSize:'10px',marginLeft:'2px'}}>comment</span>
                        </CLRight>
                    </CommentLikeSection>

                    <UserMessageSection>
                        <p style={{color:'#746E6C',fontSize:'10px'}}>1commentario</p>
                        <UserMsgeSecChild>
                            <div style={{flex:.1,}}>
                              <img src="https://images.pexels.com/photos/6231/marketing-color-colors-wheel.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                              style={image} height="27" width="27"/>
                            </div>
                            <div style={{flex:3,marginTop:'0px',marginBottom:'0px',marginLeft:'10px'}}>
                              <p style={{fontSize:'11px',color:'#38302D',marginTop:'0px',marginBottom:'0px'}}>
                                Gaurem Ronaldo Gaueds Malo
                              </p>
                              <p style={{fontSize:'8px',color:'#746E6C',marginTop:'0px',marginBottom:'0px'}}>
                                Ha 10 min
                              </p>
                            </div>
                        </UserMsgeSecChild>
                        <p style={{color:'gray',fontSize:'10px',marginTop:'1px',padding:'0px 5px'}}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Cras posuere et nisl in vehicula. Nam accumsan justo purus, 
                          id dignissim nulla molestie ac. Quisque vel odio hendrerit, tempus turpis at, suscipit tortor.
                        </p>
                    </UserMessageSection>
                    <CardFooterPostSection>
                        <PostSectionLeft>
                            <div style={{flex:.5,}}>
                                <img src="https://images.pexels.com/photos/6231/marketing-color-colors-wheel.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                        style={image} height="30" width="30"/>
                            </div>
                            <div style={{flex:10,}}>
                                <InputBottom></InputBottom>
                            </div>
                        </PostSectionLeft>
                        <div style={{display:'flex',justifyContent:'flex-end',marginTop:'15px'}}>
                              <Buttton>Publicar</Buttton>
                        </div>    
                    </CardFooterPostSection> 
                 </CradFooter>
            </Card>
          </CardSection>
        </Body>
      </MainDiv>
    </Div>  
    );
  }
}

export default Center;
