import React, { Component } from "react";

import {
	// BoilerplateComponent,
	ButtonComponent as Button,
	LayoutComponent as Layout,
	PageComponent as Page,
	DropmenuComponent as Dropmenu,
	CardComponent as Card,
	ListComponent as List,
	PopupComponent as Popup,
	IconComponent as Icon,
	WrapperComponent as Wrapper
} from "../src/smpladminui";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			popupVisible: false,
			popup2Visible: false,
			popup3Visible: false
		};
	}
	togglePopupVisible = e => {
		// console.info("togglePopupVisible e", e);
		this.setState({ popupVisible: !this.state.popupVisible });
	};
	togglePopup2Visible = e => {
		// console.info("togglePopup2Visible e", e);
		this.setState({ popup2Visible: !this.state.popup2Visible });
	};
	togglePopup3Visible = e => {
		// console.info("togglePopup3Visible e", e);
		this.setState({ popup3Visible: !this.state.popup3Visible });
	};

	render() {
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
					<Card
						type="file"
						fileType="application_msword"
						header={"MyFile.txt"}
					>
						<h1>UX Science progress experiment.</h1>
					</Card>
				</div>

				<h3 style={{ clear: "both" }}>List</h3>
				<div style={{ padding: 50 }}>
					<List />
				</div>

				<h3 style={{ clear: "both" }}>Popup</h3>
				<div style={{ padding: 50 }}>
					<Button onClick={this.togglePopupVisible}>
						Show popup
					</Button>
					<Button onClick={this.togglePopup2Visible}>
						Show second popup
					</Button>
					<Button onClick={this.togglePopup3Visible}>
						Show third popup
					</Button>
					<br />
					<Popup
						visible={this.state.popupVisible}
						onClose={this.togglePopupVisible}
						footer={
							<React.Fragment>
								<div
									style={{ width: "100%", textAlign: "left" }}
								>
									<Button style={{ float: "right" }} danger>
										delete
									</Button>
									<Button
										style={{ float: "right" }}
										onClick={this.togglePopupVisible}
									>
										close
									</Button>
									Updated on
									<br />
									15 Dec 2017
								</div>
							</React.Fragment>
						}
						hint={"This is the hint of the popup"}
					/>
					<Popup
						visible={this.state.popup2Visible}
						onClose={this.togglePopup2Visible}
						type={"message"}
						time={5}
						label={"Popup will autoclose in 5 seconds"}
					>
						This is the message body
					</Popup>
					<Popup
						visible={this.state.popup3Visible}
						onClose={this.togglePopup3Visible}
						type={"message"}
						label={
							<React.Fragment>
								<Icon
									type="files"
									variant="white"
									style={{
										marginRight: 10,
										marginBottom: -5,
										marginLeft: -8
									}}
									onClick={e => alert(e)}
								/>
								Popup with icon
							</React.Fragment>
						}
						footer={
							<div
								style={{ lineHeight: 2.2, textAlign: "center" }}
							>
								My Footer
							</div>
						}
					>
						<Icon type="dashboard" style={{ marginRight: 10 }} />
						I'm a cool paragraph that lives inside of an even cooler
						modal. Wins!
					</Popup>
				</div>

				<h3 style={{ clear: "both" }}>Icons</h3>
				<div style={{ padding: 50 }}>
					type = <br />
					bookmark_off
					<br />
					bookmark_on
					<br />
					collections
					<br />
					dashboard
					<br />
					downarrow
					<br />
					edit
					<br />
					files
					<br />
					listtype_cards
					<br />
					listtype_list
					<br />
					logout
					<br />
					projectsettings
					<br />
					settings
					<br />
					static
					<br />
					structure
					<br />
					threedots
					<br />
					<br />
					variant = grey / white
					<br />
					<br />
					<Icon disabled="disabled" />
					<Icon type="logout" />
					<Icon type="listtype_cards" />
					<Icon type="threedots" />
					<Icon type="dashboard" />
					<Icon type="collections" onClick={e => alert(e)} />
				</div>
				<h3 style={{ clear: "both" }}>Wrapper</h3>
				<div style={{ padding: 50 }}>
					<Wrapper>
						<label>
							This is label
							<input type="text" placeholder="Project name" />
						</label>
						This is inside a wrapper
						<br />
						Don't have an account? Register one{" "}
						<a href="register.html">here</a>.
						<hr size="1" noshade="noshade" />
						<h1>Title 1 / H1</h1>
					</Wrapper>
				</div>
			</div>
		);
	}
}

export default App;
