import {data} from "../accordian/data"
import "./style.css"
import { useState } from "react"
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import Header from "../header";

export default function SingleAccordian(){
    const [selected,select] = useState(null);


    console.log(data);
    const handleClick = ()=>{
        // console.log(ye)
        if(selected!=null){
            select(null);
        }else{
            select(1);
        }
    }
    return(
        <>
            <div>
                <Header name="Single selection accoridan" projectNo={2}/>
                <div>
                    {
                        data.length>0?
                            data.map(item=>(
                                (
                                    <div onClick={handleClick} key={item.id}>
                                        <p>{item.id}</p>
                                        <p>{item.question}</p>
                                        {
                                            selected!=null?(<p>{item.answer}</p>):null
                                        }
                                    </div>
                                )
                            ))
                        :null
                    }
                </div>


            </div>
        </>
    )
}


