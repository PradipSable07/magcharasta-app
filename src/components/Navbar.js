import React from "react";
import imglogo from "../images/logo.svg";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocailLinks from "./SocialLinks";
const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={imglogo} className='nav-logo' alt='backroads' />
					<button type='button' className='nav-toggle' id='nav-toggle'>
						<i className='fas fa-bars'></i>
					</button>
				</div>
				<PageLinks
					parentClass='nav-links'
					parentId='nav-links'
					childClass='nav-link'
				/>

				<ul className='nav-icons'>
					{socialLinks.map((link) => {
						return (
							<SocailLinks key={link.id} {...link} itemsClass='nav-icon' />
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
