import React from "react";
import Heading from "./Heading";
import { servicesItems } from "../data";

const Services = () => {
	return (
		<section className='section services' id='services'>
			<Heading title='Our' subtitle='services' />
			<div className='section-center services-center'>
				{servicesItems.map((service) => {
					const { id, icon, title, text } = service;
					return (
						<article className='service' key={id}>
							<span className='service-icon'>{icon}</span>
							<div className='service-info'>
								<h4 className='service-title'>{title}</h4>
								<p className='service-text'>{text}</p>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
