import React from "react";
import { pageLinks } from "../data";
const PageLinks = ({ parentClass, childClass, parentId }) => {
	return (
		<ul className={parentClass} id={parentId}>
			{pageLinks.map((link) => {
				const { id, href, text } = link;
				return (
					<li key={id}>
						<a href={href} className={childClass}>
							{text}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default PageLinks;
