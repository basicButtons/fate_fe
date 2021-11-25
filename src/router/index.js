import React from "react"
import {Routes ,Route} from "react-router-dom"
import RouterList from "./route_list"
function IndexRouter(){
    return (
        <Routes>
            {
                RouterList.map((item,index)=>{
                    console.log(item)
                    return <Route path={item.path} component={item.component} key = {index}/>
                })
            }
        </Routes>
    );
}
export default IndexRouter