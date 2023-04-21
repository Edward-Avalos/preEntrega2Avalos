import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({label, src = "/"}) => {
  return (
    <Link exact to={src}>{label}</Link>
  )
}

export default NavItem