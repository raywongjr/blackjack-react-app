import React from 'react';
import PropTypes from 'prop-types';

const TableRules = (props) => {
	const { decks, updateNumberOfDecks } = props;
	return (
		<div className="table-rules">
			<h6>Table Rules</h6>
			<label>
				Decks:
				<input
					type="number"
					value={decks}
					min="1"
					onChange={(e) => updateNumberOfDecks(e.target.value)}
				/>
			</label>

			<div>
				<input
					type="button"
					value="Deal"
					onClick=""
				/>
			</div>
		</div>
	);
};

TableRules.propTypes = {
	decks: PropTypes.number.isRequired,
	updateNumberOfDecks: PropTypes.func.isRequired
};

export default TableRules;
