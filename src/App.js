import React, { Component } from 'react';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
		}
	}

	componentDidMount(){
		fetch('http://localhost:5000/api/commands')
			.then(res => res.json())
			.then(json => {
				console.log(json);
				this.setState({
					isLoaded: true,
					items: json,
				});
			});
	}

	render() {
		var { isLoaded, items } = this.state;
		
		if (!isLoaded)
		{
			return <div>Loading...</div>
		}
		else
		{
			return (
				<div className="App">
					<ul>
						{items.map(item => (
							<li key={item.Id}>
								How To: {item.howTo} | Platform: {item.platform} | Command Line: {item.commandLine}
							</li>
						))}
					</ul>
				</div>
			);
		}
	}

}

export default App;
