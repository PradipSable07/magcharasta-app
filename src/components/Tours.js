import React from "react";
import Heading from "./Heading";
import { toursData } from "../data";
const Tours = () => {
	return (
		<section className='section' id='tours'>
			<Heading title='Featured' subtitle='tours' />

			<div className='section-center featured-center'>
				{toursData.map((tour) => {
					const { id, img, date, title, info, location, duration, price } =
						tour;
					return (
						<article className='tour-card' key={id}>
							<div className='tour-img-container'>
								<img src={`${img}`} className='tour-img' alt='' />
								<p className='tour-date'>{date}</p>
							</div>
							<div className='tour-info'>
								<div className='tour-title'>
									<h4>{title}</h4>
								</div>
								<p>{info}</p>
								<div className='tour-footer'>
									<p>
										<span>
											<i className='fas fa-map'></i>
										</span>{" "}
										{location}
									</p>
									<p>{duration}</p>
									<p>from ${price}</p>
								</div>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Tours;
