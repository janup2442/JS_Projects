// multi selection accordian


import {data} from "./data"
import "./style.css"
import { useState } from "react"
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
export default function Accordian(){
    return(
        <>
            <div className="container">
                {
                    (data && data.length>0)? 
                    data.map(item=>(
                        <Item key={item.id} id={item.id}  title={item.question} info={item.answer}/>
                    ))
                    :(<p>No data found</p>)
                }
            </div>
        </>
    )
}

function Item(props){
    const [selected , select] = useState(null);
    function handleClick(item){
        console.log(item)
        selected==null?select(1):select(null);
    }
    return(
        <>
           <div className="itemRow" onClick={()=>handleClick(props.id)}>
            <p>{props.id}</p>
            <p>{props.title}</p>
            {
                (selected==null)? (<ArrowDropDownOutlinedIcon/>) : (<ArrowDropUpOutlinedIcon/>)
            }
            {
                selected!=null? (<p className="itemInfo">{props.info}</p>):null
            }
           </div>
        </>
    )
}