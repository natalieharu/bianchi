const plugin = require('tailwindcss/plugin');
const tailwindPseudoElements = require('tailwindcss-pseudo-elements');
const imgURL = '/img';

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	separator: '_',
	theme: {
    	fontFamily: {
      		roboto: ['Roboto', 'sans-serif'],
      		playfair: ['Playfair Display', 'serif'],
    	},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1rem',
			},
		},
		extend: {
			colors: {
				dark: '#1F1E1E',
				gold: '#CFA688',
				gray: '#F5F6F8',
				menu: '#2F2E2E',
			},
			backgroundImage: theme => ({
				'bg-header': `url('${imgURL}/bg-header.jpg')`,
				'team1': `url('${imgURL}/team1.jpg')`,
				'team2': `url('${imgURL}/team2.jpg')`,
				'team3': `url('${imgURL}/tab3.jpg')`,
			}),
			width: {
				'750': '750px',
				'144': '144px',
				'400': '400px',
				'350': '350px',
				'250': '250px',
				'220': '220px',
				'300': '300px',
				'500': '500px',
				'550': '550px',
				'90': '90px',
			},
			height: {
				'500': '500px',
				'144': '144px',
				'480': '487px',
				'650': '650px',
				'450': '450px',
				'300': '300px',
				'350': '350px',
				'90': '90px',
			},
			fontSize: {
				'64': '64px',
				'15': '15px',
			},
			zIndex: {
				'1': '-1',
				'2': '-2',
			},
    	},
	},
	variants: {
    	extend: {
			inset: ['before', 'after'],
			position: ['before', 'after'],
			backgroundColor: ['before', 'after'],
			backgroundOpacity: ['before', 'after'],
			backgroundImage: ['before', 'after'],
			padding: ['hover'],
			transform: ['before', 'after'],
			translate: ['before', 'after'],
			width: ['before', 'after'],
			height: ['before', 'after'],
			zIndex: ['before', 'after'],
			display: ['before', 'after'],
			scale: ['hover', 'group-hover'],
			opacity: ['before', 'after'],
    	},
  	},
	plugins: [
		tailwindPseudoElements,
	],
};
