import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Index() {
    let navigate = useNavigate()
    setTimeout(()=>{
        navigate("/work")
    },2000)
    return (
        <div>
            <p>首页</p>
        </div>
    )
}
