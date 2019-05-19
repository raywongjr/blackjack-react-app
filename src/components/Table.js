import React, { Component } from 'react';

import Deck, { shuffle } from './Deck';
import TableRules from './TableRules';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
			decks: 3,
			players: 1
		};

		this.updateNumberOfDecks = this.updateNumberOfDecks.bind(this);
	}

	updateNumberOfDecks(count) {
		this.setState({ decks: count });
	}

	dealTable() {

	}
	
    render() {
		const { decks } = this.state;

        return (
            <div className="table">
				<h1>Blackjack 21!</h1>
				<TableRules
					decks={decks}
					updateNumberOfDecks={this.updateNumberOfDecks}
				/>
				<Deck decks={decks} />
			</div>
        );
    }
}

export default Table;
