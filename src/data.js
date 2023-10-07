import {
	RiTwitterXLine,
	RiInstagramLine,
	RiFacebookFill,
} from "react-icons/ri";
import { GiWallet, GiSocks } from "react-icons/gi";
import { FaTree } from "react-icons/fa";
import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";

export const pageLinks = [
	{ id: 1, href: "#home", text: "home" },
	{ id: 2, href: "#services", text: "services" },
	{ id: 3, href: "#tours", text: "tours" },
	{ id: 4, href: "#about", text: "about" },
];

export const socialLinks = [
	{ id: 1, href: "https://www.twitter.com", icon: <RiFacebookFill /> },
	{ id: 2, href: "https://www.twitter.com", icon: <RiInstagramLine /> },
	{ id: 3, href: "https://www.twitter.com", icon: <RiTwitterXLine /> },
];

export const servicesItems = [
	{
		id: 1,
		icon: <GiWallet />,
		title: "saving money",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
	},
	{
		id: 2,
		icon: <FaTree />,
		title: "Endless Hiking",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
	},
	{
		id: 3,
		icon: <GiSocks />,
		title: "Amazing Comfort",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
	},
];

export const toursData = [
	{
		id: 1,
		img: tour1,
		date: "august 26th, 2020",
		title: "Tibet Adventure",
		info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		location: "china",
		duration: "6 days",
		price: "2100",
	},
	{
		id: 2,
		img: tour2,
		date: "september 15th, 2020",
		title: "explore hong kong",
		info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		location: "hong kong",
		duration: "5 days",
		price: "2900",
	},
	{
		id: 3,
		img: tour3,
		date: "august 26th, 2020",
		title: "Tibet Adventure",
		info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		location: "hontai",
		duration: "8 days",
		price: "5000",
	},
];
