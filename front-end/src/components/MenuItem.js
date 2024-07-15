import React from 'react'

const MenuItem = ({title, link, icon, status}) => {
  return (
    <div className='list-group-item list-group-item-action'>{title}</div>
  )
}

export default MenuItem