/* 
  ./client/components/App.jsx
*/ 
var React = require('react');
 
 export default class Welcome extends React.Component {
   render(){
     return (
           <div style={{textAlign: 'center'}}>
        <h1>Welcome {this.props.name}</h1>
      </div>);
   }
 }


