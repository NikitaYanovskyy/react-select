import React, {useState, Fragment} from 'react'
import Pillow from '../Pillow/Pillow'
import Select from '../Select/Select'

const Card = () =>{
    const [data, setData] = useState([{
        color: 'palegoldenrod',
        html: '<div style="color: red">color</div>'
    }, {
        color: 'palegreen',
        html: '<div>color</div>'
    },
    {
        color: 'paleturquoise',
        html: '<div>color</div>'
    },
    {
        color: 'palevioletred',
        html: '<div>color</div>'
    }])
    const [activeValue, setActiveValue] = useState(data[0]);
    return( 
        <div className="card">
            <Pillow activeValue={activeValue}/>
            <Select itemList={data} initialValue={data[0]} onChange={setActiveValue}/>
        </div>
    )
}

export default Card