/* 
  ./client/components/Welcome.jsx
*/ 
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Input } from 'react-bootstrap';

//Bootstrap Button Component
const buttonsInstance = (
<div style={{textAlign: 'center'}}>  <Button bsStyle="primary">Click me!</Button></div>
);

ReactDOM.render(buttonsInstance, document.getElementById('here'));


//Welcome Component
 export class Welcome extends React.Component {
   render(){
     return (
           <div style={{textAlign: 'center'}}>
        <h1>Welcome {this.props.name}</h1>
      </div>);
   }
 }

ReactDOM.render(<Welcome name="Sujay Kundu" />,document.getElementById('root'));


//Bootstrap Header Component
export default class HeaderNavigation extends React.Component {
  render() { 
       let brand = <a href='#'>Project Name</a>;
  return (
     <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
     )
  }
}

ReactDOM.render(<HeaderNavigation />,document.getElementById('header'));