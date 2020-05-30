import React from 'react';
import './App.css';
import CardList from './card-list/CardList';
import Search from './search/Search';
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: '',
		};
		this.searchHandler = this.searchHandler.bind(this);
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((monsters) =>
				this.setState({
					monsters,
				})
			);
	}

	searchHandler(event) {
		this.setState({
			searchField: event.target.value,
		});
	}
	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		);
		return (
			<div className='App'>
				<Search
					searchChangeHandler={this.searchHandler}
					searchField={this.state.searchField}
					placeholder='search for monster'
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
