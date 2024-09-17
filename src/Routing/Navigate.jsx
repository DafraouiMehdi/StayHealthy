import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Acteur from "../Pages/Acteur";
import Service from "../Pages/Service";
import Materiel from "../Pages/Materiel";
import NotFound from "../Pages/NotFound";
import Layouts from "../Layouts/Layouts";
import Login from "../Connection/Login";

const Navigate = createBrowserRouter([
    {
        path : '/StayHealthy',
        element : <Layouts/> ,
        children : [
            {
                path : '/StayHealthy' ,
                element : <Home />
            },
            {
                path : '/StayHealthy/Acteur',
                element : <Acteur/>
            },{
                path : '/StayHealthy/Service',
                element : <Service/>
            },{
                path : '/StayHealthy/Materiels',
                element : <Materiel/>
            },{
                path : '/StayHealthy/Login' ,
                element : <Login/>
            },{
                path : '*',
                element : <NotFound/>
            }
        ]
    }
])

export default Navigate ;