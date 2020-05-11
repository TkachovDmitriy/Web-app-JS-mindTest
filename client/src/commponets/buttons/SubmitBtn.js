import React from "react";
const style = { 
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:'50px',
}

function SubmitBtn () {
    return (
        <>
        <div style={style}>

            <a className="waves-effect waves-light btn">Let's start!!!<i class="material-icons left">chevron_right</i></a>
            
            </div>
        </>
    );
}
export default SubmitBtn;