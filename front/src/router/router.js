import AddElement from "../pages/AddElement";
import DetailElement from "../pages/DetailElement";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";

export const ROUTES =[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"addelement",
                element:<AddElement/>
            },
            {
                path:"detailelement/:id",
                element:<DetailElement/>
            }
        ]
    }
]