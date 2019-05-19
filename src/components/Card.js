import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
	const { value, suit } = props;

	return (
		<div className="card__container">
			{value} {suit}
		</div>
	);
};

Card.propTypes = {
	value: PropTypes.string.isRequired,
	suit: PropTypes.string.isRequired
};

export default Card;
