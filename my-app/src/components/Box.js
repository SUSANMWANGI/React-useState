import React from 'react';




 export default function Box(props){
    const[on, setOn]=React.useState(props.on)
    const styles={
        backgroundColor:on?"#222222":"#cccccc"
      }
      function toggle(){
        setOn(prevOn=>!prevOn)
      }
    
      //const squareElements = squares.map(square=>(
       
     // ))

    return(
        <>
     <div className="box"  style={styles}  onClick={toggle}></div>
                
           

        
        </>
       
    );
}

