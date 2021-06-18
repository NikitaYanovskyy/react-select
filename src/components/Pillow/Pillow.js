import React from 'react'

const Pillow = (props) =>{
    return (
        <div>
            <div className="color_block" style={{backgroundColor: props.activeValue.color}}></div>
        </div>
    )
}

export default Pillow