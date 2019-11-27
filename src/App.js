import React from "react";

import {
	// BoilerplateComponent,
	ButtonComponent as Button,
	LayoutComponent as Layout
} from "../src/smpladminui";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
			</header>
			<hr />
			<h3>Buttons</h3>
			<div style={{ padding: 50 }}>
				{/* <BoilerplateComponent /> */}
				<Button primary onClick={evt => alert("test")}>
					My Button
				</Button>
				<Button label={"No Action"} danger />
				<Button title="This is the title of the button">
					Normal Button
				</Button>
				<Button />
				<Button disabled="disabled">Disabled</Button>
			</div>

			<h3>Layout</h3>
			<div style={{ padding: 50 }}>
				<Layout />
			</div>
		</div>
	);
}

export default App;
