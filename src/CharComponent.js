import React from 'react';

const CharComponent = (Props) =>{

    const style = {
       display : 'inline-block',
       padding : '16px',
       textAlign : 'center',
       margin : '16px',
       border : '1px solid black',
       backgroundColor: 'white'
    }
    if(Props.textLength <=5){
     style.backgroundColor='red';
    }
    return(
        <div style={style} onClick={Props.Clicked}>
         {Props.Character} 
        </div>
    )
}

export default CharComponent;