import React from "react";
import Index from "../view/index"
import Course from "../view/course"
import Lecture from "../view/lecturer"
import Login from "../view/login"
import Work from "../view/work"
const routerList = [
    {
        name:"首页",
        path:"/index",
        exact:true,
        component:<Index></Index>
    },
    {
        name:"课程",
        path:"/course",
        exact:true,
        component:<Course></Course>
    },
    {
        name:"讲师",
        path:"/lecture",
        exact:true,
        component:<Lecture></Lecture>
    },
    {
        name:"登录",
        path:"/login",
        exact:true,
        component:<Login></Login>
    },
    {
        name:"作品",
        path:"/work",
        exact:true,
        component:<Work></Work>
    }

]
export default routerList