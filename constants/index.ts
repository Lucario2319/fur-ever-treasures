import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// file for exporting all constants

// Category array
export const options = [
	'grooming', 
	'accessories', 
	'food-and-treats', 
	'health-and-wellness', 
	'toys-and-enrichment'
]

export const titleDict = {
	'grooming':'Grooming',
	'accessories':'Accessories', 
	'food-and-treats':'Food & Treats',
	'toys-and-enrichment':'Toys & Enrichment',  
  'health-and-wellness':'Health & Wellness', 
}

export const picArr = [
  {
		src:'/category-accessories.jpeg', 
		name:'Accessories', 
		slug: 'accessories'
	},
  {
		src:'/category-food.jpeg', 
		name:'Food & Treats', 
		slug: 'food-and-treats'
	},
  {
		src:'/category-grooming.jpeg', 
		name:'Grooming', 
		slug: 'grooming'
	},
  {
		src:'/category-health.jpeg', 
		name:'Health & Wellness', 
		slug: 'health-and-wellness'
	},
  {
		src:'/category-toys.jpeg', 
		name:'Toys & Enrichment', 
		slug: 'toys-and-enrichment'
	},
]

// Links array 
export const serviceLinks = [
	{ name: 'Pet Treats', href: '/'},
	{ name: 'Pet Grooming', href: '/'},
	{ name: 'Pet Accessories', href: '/'},
	{ name: 'Health and Wellness', href: '/'},
	{ name: 'Toys and Enrichment', href: '/'}
]

export const helpLinks = [
	{ name: 'Contact Us', href: '/'},
	{ name: 'About Us', href: '/'},
	{ name: 'Privacy Policy', href: '/'},
	{ name: 'Terms & Conditions', href: '/'}
]

export const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com', icon: faInstagram },
  { name: 'Facebook', href: 'https://facebook.com', icon: faFacebook },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: faLinkedin },
  { name: 'Twitter', href: 'https://twitter.com', icon: faTwitter },
];

// to be used later
export const navLinks = [
	{ name: 'Home', href: '/'},
	{ name: 'Categories', href: '/#categories'},
	{ name: 'Products', href: '/product-catalog'},
	// { name: 'Terms & Conditions', href: '/'}
]

export const products = [
	{
		title: 'Product A',
		src: '/category-food.jpeg',
		rating: 4.5,
		reviewsCount: 120,
		price: 29.99,
	},
	{
		title: 'Product B',
		src: '/category-food.jpeg',
		rating: 3.8,
		reviewsCount: 80,
		price: 19.99,
	},
	{
		title: 'Product C',
		src: '/category-food.jpeg',
		rating: 4.2,
		reviewsCount: 150,
		price: 24.99,
	},
	{
		title: 'Product D',
		src: '/category-food.jpeg',
		rating: 4.7,
		reviewsCount: 200,
		price: 34.99,
	},
	{
		title: 'Product E',
		src: '/category-food.jpeg',
		rating: 3.5,
		reviewsCount: 60,
		price: 14.99,
	},
	{
		title: 'Product F',
		src: '/category-food.jpeg',
		rating: 4.0,
		reviewsCount: 90,
		price: 21.99,
	},
	{
		title: 'Product G',
		src: '/category-food.jpeg',
		rating: 4.9,
		reviewsCount: 300,
		price: 39.99,
	},
	{
		title: 'Product H',
		src: '/category-food.jpeg',
		rating: 3.2,
		reviewsCount: 40,
		price: 12.99,
	},
];