import React from "react";
const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

function SubmitBtn() {
    return (
        <>
            <div style={style}>
                <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                     <i class="material-icons right">send</i>
                </button>
            </div>
        </>
    );
}
export default SubmitBtn;