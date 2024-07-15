// Side menu components 

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
    }
]

const SideMenu = ({title, link, icon, status}) => {
    const newLocal = <div  title={menuList.title} link={menuList.link} className="list-group-item list-group-item-action">{menuList.title}<div />

    </div>
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
            {newLocal}
        </div>
       </>
    )
}

export default SideMenu;