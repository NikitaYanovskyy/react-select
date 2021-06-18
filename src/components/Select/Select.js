import React, {useState, useEffect, useRef} from 'react'
import SelectedItem from './SelectItem'

const Select = (props) =>{
    const [initialValue, setInitialValue] = useState(props.initialValue);
    const [isHidden, setIsHidden] = useState(true)


    const onItemClick = (content) =>{
        setIsHidden(!isHidden)
        setInitialValue({color: content.color, html: content.html})
        if(props.onChange){
            props.onChange({color: content.color, html: content.html})
        }
    }
    const onValueClick = ()=>{
        setIsHidden(!isHidden)
    }

    const itemList = props.itemList.map((value, index)=>{
        return <SelectedItem key={index} onItemClick={onItemClick} content={value}/> 
    })
    return (
        <div className="select">
            <div className="selected_item" onClick={onValueClick}>
                <div className="selected_item_content">
                    <p>{initialValue.color}</p>
                    <div className="embadedHtml" dangerouslySetInnerHTML={{__html: initialValue.html}}>
                    </div>
                </div>
                <div className="select_arrow">
                    <div className="arrow_line"></div>
                    <div className="arrow_line"></div>
                </div>
            </div>
            {isHidden ? null :
            <div className="select_items">{itemList}</div>
            }
        </div>
    )
}

export default Select