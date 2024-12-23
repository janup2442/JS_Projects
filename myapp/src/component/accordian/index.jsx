// multi selection accordian


import {data} from "./data"
import "./style.css"
import { useState } from "react"
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import Header from "../header";




export default function Accordian(){
    return(
        <>
            <div>
                <Header name="Multi-Selection Accordian" projectNo={1}/>
                <div className="container">
                    {
                        (data && data.length>0)? 
                        data.map(item=>(
                            <Item key={item.id} id={item.id}  title={item.question} info={item.answer}/>
                        ))
                        :(<p>No data found</p>)
                    }
                </div>
            </div>
        </>
    )
}

function Item(props){
    const [selected , select] = useState(null);
    function handleClick(item){
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