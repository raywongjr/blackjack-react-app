import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const suits = [
	'Hearts',
	'Diamonds',
	'Spades',
	'Clubs',
];

const values = [
	'A',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'J',
	'Q',
	'K',
];

// function adapted from http://sedition.com/perl/javascript-fy.html
export const shuffle = (cards) => {
	let i = cards.length;
	if ( i === 0 ) return false;
	while ( --i ) {
		var j = Math.floor( Math.random() * ( i + 1 ) );
		var tempi = cards[i];
		var tempj = cards[j];
		cards[i] = tempj;
		cards[j] = tempi;
	}
};

class Deck extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			cards: []
		};

		this.remainingCards = [];

		this.generateFullDeck = this.generateFullDeck.bind(this);
	}

	componentDidMount() {
		this.generateFullDeck(this.props.decks);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.decks !== this.props.decks) {
			this.generateFullDeck(this.props.decks);
		}
	}

	generateFullDeck(decks) {
		const oneDeck = [];

		suits.forEach((suit) => {
			values.forEach((value) => {
				oneDeck.push(<Card value={value} suit={suit} />);
			});
		});

		const cards = Array.from({ length: decks }, () => oneDeck).flat();
		shuffle(cards);

		this.setState({ cards });
	}

	showCards(cards) {
		return cards.map((card, i) => (
			<div key={i}>{card}</div>
		));
	}

	render() {
		const { decks } = this.props;
		const { cards } = this.state;

		return (
			<div>
				<h6>Number of decks: {decks}</h6>
				<h6>Number of cards: {cards.length}</h6>
				{this.showCards(cards)}
			</div>
		);
	}
}

Deck.propTypes = {
	decks: PropTypes.number
};

Deck.defaultProps = {
	decks: 1
};

export default Deck;
