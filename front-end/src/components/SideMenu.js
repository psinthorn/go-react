// Side menu components 
// call menu item component and pass props to menu item props

import { useState } from "react";
import SideMenuItem from "./SideMenuItem"
import { Link, useNavigate,} from "react-router-dom";

const SideMenu = ({ jwtToken, setJwtToken  }) => {
    const navigate = useNavigate();
    // const [jwtToken, SetJwtToken] = useState();
    console.log("side menu: " + jwtToken);

    return (
       <>
        <div className="list-group mb-3">
            {
                menuItemList.map((menu) => {
                   return (
                   <SideMenuItem link={menu.link} key={menu.link} title={menu.title} />
                   )
                })
            }
        </div>
        <div className="list-group mb-3">
            {jwtToken !== false &&
                adminMenuList.map((menu) => {
                   return (
                   <SideMenuItem link={menu.link} key={menu.title} title={menu.title} />
                   )
                })
            }
        </div>
    
        <div className="list-group">
            {jwtToken !== false ? 
            <a href="#!" className="badge badge-danger bg-danger" onClick={() => { setJwtToken(false); navigate("/login"); }}>Log Out</a>
            :
            <Link to="/login" className="badge badge-success bg-success">Log in</Link>
            }
        </div>
       </>
    )
}

const menuItemList = [
    {
        title: "Home",
        link: "/",
        icon: "",
        status: true
    },
    {
        title: "Movies",
        link: "/movies",
        icon: "",
        status: true
    }, 
    // {
    //     title: "Movie",
    //     link: "/movie/:id",
    //     icon: "",
    //     status: true
    // }, 
    {
        title: "Genres",
        link: "/genres",
        icon: "",
        status: true
    },
];

const adminMenuList = [
    {
        title: "Manage Movie",
        link: "/movie-manage",
        icon: "",
        status: true
    },
    {
        title: "Manage Calalogue",
        link: "/manage-catalogue",
        icon: "",
        status: true
    },
    {
        title: "GraphQL",
        link: "/graphql",
        icon: "",
        status: true
    },
];

const loginLogout = [
    {
        title: "Log In",
        link: "/login",
        icon: "",
        status: true
    },
    {
        title: "Log Out",
        link: "/logout",
        icon: "",
        status: true
    }
]

export default SideMenu;