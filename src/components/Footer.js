import React from "react";
import { socialLinks } from "../data";
import SocailLinks from "./SocialLinks";
import PageLinks from "./PageLinks";
const Footer = () => {
	return (
		<footer className='section footer'>
			<PageLinks parentClass='footer-links' childClass='footer-link' />
			<ul className='footer-icons'>
				{socialLinks.map((link) => {
					return (
						<SocailLinks key={link.id} {...link} itemsClass='footer-icon' />
					);
				})}
			</ul>
			<p className='copyright'>
				copyright &copy; Backroads travel tours company
				<span id='date'></span> all rights reserved
			</p>
		</footer>
	);
};

export default Footer;
