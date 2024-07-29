// Menu Item component

import { Link } from "react-router-dom"

const MenuItem = ({title, link, icon, status}) => {
  return (
    <Link key={title} to={link} className='list-group-item list-group-item-action'>{title}</Link>
  )
}

export default MenuItem