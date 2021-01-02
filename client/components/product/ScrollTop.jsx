import React from 'react';
import { Zoom, useScrollTrigger } from '@material-ui/core';
import useStyles from '../../style/theme';

const ScrollTop = ({ children }) => {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	});
	const classes = useStyles();

	const handleClick = (e) => {
		const anchor = (e.target.ownerDocument || document).querySelector(
			'#back-to-top-anchor'
		);

		if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
	};

	return (
		<Zoom in={trigger}>
			<div
				onClick={handleClick}
				role="presentation"
				className={classes.scrollTop}
			>
				{children}
			</div>
		</Zoom>
	);
};

export default ScrollTop;
