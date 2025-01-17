import React from 'react'
import { render } from "react-dom";
import { Box,Card,CardContent,Typography} from '@mui/material'
import { borderRadius, getInitColorSchemeScript, textAlign, width } from '@mui/system'
import {Stack, CircularProgress} from '@mui/material'
import {CircularProgressbar,buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      <div style={{ marginTop: 10, display: "flex" }}>
        <div style={{ width: "50%", paddingLeft: 20}}>{props.children}</div>
        <div style={{ width: "10%" }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
// Card functions
const shivam = {
  variant:'outlined',
  marginTop:'150px',
  marginLeft:'50px',
  height:'100px',
  width: '100px'
}

function App(){
  return(
    <div>
      <div style={{display:'inline',float:'left'}}>
    <OmCard 
    title = 'Twitter'
    per = '80'
    perText = '80%'
    bg='#e2fbd7'
    pc='#34b53a'
    /></div>
    
    <div style={{display:'inline',float:'left'}}>
    <OmCard 
    title = 'Instagram'
    per = '80'
    perText = '80%'
    bg='#dad7fe'
    pc='#4339f2'
    /></div>
    
    <div style={{display:'inline',float:'left'}}>
    <OmCard 
    title = 'Facebook'
    per = '80'
    perText = '80%'
    bg='#ffe5d3'
    pc='#ff3a29'
    /></div>
    
    <div style={{display:'inline',float:'left'}}>
    <OmCard 
    title = 'Behance'
    per = '80'
    perText = '80%'
    bg='#ccf8fe'
    pc='#02a0fc'
    /></div>
    </div>
  )
}
//Creating Cards
function OmCard(props){
 
  return(
  <Card sx={shivam}>
        <center><span>{props.title}</span>
        </center>
    <div className='cstyle'>
    
      <Example >
        <CircularProgressbar value={props.per} text={props.perText}
        background
        styles={buildStyles({
          backgroundColor: `${props.bg}`,
          textColor: "black",
          pathColor: `${props.pc}`,
          trailColor: "transparent"
        })}/>
      </Example>
    </div>
  </Card>
              
  )
}
export default App
