import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
	<div id="index">
		<nav className="navbar">
		<div className="logo">
			<img src="images/mahindra-new-logo.webp" className="img_logo"/>
		</div>
		<div className="menu">
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="about">About Us</Link></li>
				<li><Link to="contact">Contact Us</Link></li>
				<li><Link to="#">Vehicles</Link></li>
				<li><Link to="#">Services</Link></li>
			</ul>
		</div>
	</nav>
 </div>
    </>
  )
}

export default Header