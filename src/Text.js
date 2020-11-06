import React from 'react';

const Text = (props) =>{

     let forLen = 'Text is enough';
     if(props.textLength <= 5 ){
        forLen = <b>'Text is too short'</b>;
        }
    return(
        <div>
            <br/>{forLen}<br/><br/>
        </div>
        
    )
}

export default Text;