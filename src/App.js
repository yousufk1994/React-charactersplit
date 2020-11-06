import React, { Component } from 'react';
import Text from './Text';
import CharComponent from './CharComponent';

class App extends Component{
  state = {UserData: ''}

  inputToddler = event =>{
    this.setState({UserData:event.target.value})
  }

  forDelete = (index) =>{
    const text = this.state.UserData.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({UserData:updatedText});
  }

  render(){
    const CharList = this.state.UserData.split('').map(
      (ch,index) =>{ 
        return <CharComponent key={index} Character={ch} Clicked= {()=>this.forDelete(index)} textLength={this.state.UserData.length}/>
      }
    );

  return (
    <div >
      <input type='text' onChange={this.inputToddler} value={this.state.UserData}/>
      <Text textLength={this.state.UserData.length}/>
      {CharList}
    </div>
  );
}
}
export default App;
