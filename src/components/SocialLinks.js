import React from "react";

const SocialLinks = ({ itemsClass, href, icon }) => {
	return (
		<li>
			<a href={href} target='_blank' rel='noreferrer' className={itemsClass}>
				{icon}
			</a>
		</li>
	);
};

export default SocialLinks;
