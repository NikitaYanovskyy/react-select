import React from 'react'

const SelectItem = (props) =>{
    return (
        <div className="selected_item_dropdown" key={props.index} onClick={()=>props.onItemClick(props.content)}>
                    <div className="selected_item_content">
                        <p>{props.content.color}</p>
                        <div className="embadedHtml" dangerouslySetInnerHTML={{__html: props.content.html}}></div>
                    </div>  
        </div>
    )
}

export default SelectItem