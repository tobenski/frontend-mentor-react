import React from 'react';
import calculator from '../images/icon-calculator.svg';
import karma from '../images/icon-karma.svg';
import supervisor from '../images/icon-supervisor.svg';
import teamBuilder from '../images/icon-team-builder.svg';

export const header = {
	main: 'Reliable, efficient delivery',
	sub: 'Powered by Technology',
	content:
		'Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful',
};

export const cards = [
	{
		name: 'Supervisor',
		type: 'supervisor',
		content: 'Monitors activity to identify project roadblocks',
		icon: supervisor,
		color: 'cyan',
	},
	{
		name: 'Team Builder',
		type: 'teambuilder',
		content:
			'Scans our talent network to create the optimal team for your project',
		icon: teamBuilder,
		color: 'red',
	},
	{
		name: 'Karma',
		type: 'karma',
		content: 'Regularly evaluates our talent to ensure quality',
		icon: karma,
		color: 'orange',
	},
	{
		name: 'Calculator',
		type: 'calculator',
		content:
			'Uses data from past projects to provide better delivery estimates',
		icon: calculator,
		color: 'blue',
	},
];
