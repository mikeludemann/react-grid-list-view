import React from 'react';
import logo from './logo.svg';
import './App.css';

import { GridListContainer, GridListButton, GridListElementContainer, GridListElements } from './components/grid-list-view';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
      <GridListContainer>
        <GridListButton></GridListButton>
        <GridListElementContainer>
          <GridListElements>
            <h2>Headline 1</h2>
            <p>Some text..</p>
          </GridListElements>
          <GridListElements>
            <h2>Headline 2</h2>
            <p>Some text..</p>
          </GridListElements>
          <GridListElements>
            <h2>Headline 3</h2>
            <p>Some text..</p>
          </GridListElements>
          <GridListElements>
            <h2>Headline 4</h2>
            <p>Some text..</p>
          </GridListElements>
        </GridListElementContainer>
      </GridListContainer>
		</div>
	);
}

export default App;
