import React from "react";
const style = {color:'green', border:'1px black solid'}
function AddButton () {
    return (
        <>
            <a className="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>
            <div className='p' style={style}> stylized cont </div>
        </>
        
        )
}
export default AddButton