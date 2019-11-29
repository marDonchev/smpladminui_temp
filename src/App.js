import React from "react";

import {
	// BoilerplateComponent,
	ButtonComponent as Button,
	LayoutComponent as Layout,
	PageComponent as Page,
	DropmenuComponent as Dropmenu,
	CardComponent as Card
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
				<Button primary>+ add new</Button>
				<Button label={"Processing..."} processing />
				<Button disabled="disabled">Disabled</Button>
			</div>

			<h3>Dropmenu</h3>
			<div style={{ padding: 50 }}>
				<Dropmenu style={{ float: "right" }} />
			</div>

			<h3>Layout</h3>
			<div style={{ padding: 50 }}>
				<Layout>
					<Page>This is my page</Page>
				</Layout>
			</div>

			<h3>Card</h3>
			<div style={{ padding: 50 }}>
				<Card type="image" />
				<Card>
					<h1>UX Science progress experiment.</h1>
				</Card>
				<Card type="file" header={"MyFile.txt"}>
					<h1>UX Science progress experiment.</h1>
				</Card>
			</div>
		</div>
	);
}

export default App;
