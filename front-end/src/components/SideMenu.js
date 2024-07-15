// Side menu components 
// call menu item component and pass props to menu item props

import MenuItem from "./MenuItem"

const menuList = [
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
    {
        title: "Genres",
        link: "/genres",
        icon: "",
        status: true
    },
    {
        title: "Add Movie",
        link: "/add-movies",
        icon: "",
        status: true
    },
    {
        title: "Manage Calalogue",
        link: "/manage-calalogue",
        icon: "",
        status: true
    },
    {
        title: "GraphQL",
        link: "/graphql",
        icon: "",
        status: true
    }
]

const SideMenu = () => {

    return (
       <>
        <div className="list-group">
            {
                menuList.map((menu) => {
                   return (
                   <MenuItem key={menu.title} title={menu.title} />
                   )
                })
            }
        </div>
       </>
    )
}

export default SideMenu;