# SimpleAdmin UI Library / for React

> A simple react components library for creating standart admin interface

## Installation

You can install this library simply by typing the following in your project's folder

```
$ npm i smpladminui
```

This will install the library in your `node_modules` folder and you will be able to use it.

###### All the components are functional (stateless) react components. If you are not familiar with functional (stateless) components, you can read [that](https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541) article, or some others on the net.

###### You can also find this library at the NPM site [here](https://www.npmjs.com/package/smpladminui)

## Usage

In order to use one of the components of the library, you have to import it in your application or component file. Use the following line to install any of the components of the library (for example the ButtonComponent)

```javascript
import { ButtonComponent as Button } from "smpladminui";
ReactDOM.render(<Button />, mountNode);

/* or somewhere in your code */

<Button primary>+ add new</Button>;
```

###### You can can read all the details about different components down bellow.

## Styling

The library comes with one default theme which you can overwrite by importing your own CSS/SCSS file after importing the library, but in the upcoming versions I plan to make different themes with an ability to easily change or alter them by the developer.

## Components

### Button

This is the a simple button component that renders a styled button having the basic button's functionality.

**Usage**

```javascript
import { ButtonComponent as Button } from "smpladminui";

<Button>My Button</Button>;
```

**Props**

This component has the following props
| Prop name | Type | Default | Description |
| - | - | - | - |
| `label` | string | "Button" | This is the text on the button in case there are no children to be used |
| `disabled` | boolean, function, string | false | Renders the button as disabled |
| `primary` | boolean | false | Renders the button in green (primary color) |
| `danger` | boolean | false | Renders the button in red (danger color) |
| `processing` | boolean | false | Shows a loading icon on the button and makes it disabled for no accidental clicking |
| `style` | object | {} | A style object to be passed to the button |
| `onClick` | function | none | Event handler for the clicking of the button |

**Examples**

```javascript
import { ButtonComponent as Button } from "smpladminui";

<Button>My Button</Button>; // Normal button
<Button label="Custom Label"></Button>; // Custom label button
<Button disabled="disabled">Disabled</Button> // Disabled button
<Button primary>Primary Button</Button>; // Primary button
<Button danger>Delete</Button> // Danger button
<Button processing={true}>Save</Button> // Processing button
<Button style={{border: "1px solid red"}}>Styled</Button> // Styled button
<Button onClick={evt => alert("test")}>Click me Button</Button> // Button with click handler
```

---

### Card

This is card component which renders a popupar card interface component with header, body and footer.

**Usage**

```javascript
import { CardComponent as Card } from "smpladminui";

<Card>
	<h1>UX Science progress experiment.</h1>
</Card>;
```

**Props**

This component has the following props
| Prop name | Type | Default | Description |
| - | - | - | - |
| `type` | string | "children","image" or "file" | This prop controls the way the card looks. Here are the options: <ul><li>`children` - it will use the children of the component in its body</li><li>`image` - the body of the card will display an image (use the `imageUrl` prop to set the image url)</li><li>`file` - the card body will represent an file type icon (use the `fileType` prop to set the icon type)</li></ul> |
| `imageUrl` | string | "" | The url to the image which will be displayed inside the card's body. Note: The type prop has to be set to "image" in order to use this prop |
| `fileType` | string | "" | The filetype to be used for the proper file icon. Options are: <ul><li>`application_pdf`</li><li>`application_msword`</li><li>`application_vnd_openxmlformats_officedocument_wordprocessingml_document`</li><li>`application_zip`</li><li>`application_x_rar`</li><li>`application_vnd_openxmlformats_officedocument_spreadsheetml_sheet`</li><li>`application_vnd_ms_excel`</li><li>`audio_mpeg`</li><li>`application_vnd_openxmlformats_officedocument_presentationml_presentation`</li><li>`application_vnd_ms_powerpoint`</li><li>`text_plain`</li><li>`video_mp4`</li></ul> ... other options will be added soon. <br />_Note: The type prop has to be set to "file" in order to use this prop_ |
| `style` | object | {} | A style object to be passed to the card element |
| `header` | React Node | "Sample Card Header" | Elements that will be placed inside the Card's header |
| `footer` | React Node | "Sample Card Footer" | Elements that will be placed inside the Card's footer |
**Examples**

```javascript
import { CardComponent as Card } from "smpladminui";

// Normal card
<Card>
    <h1>UX Science progress experiment.</h1>
</Card>

// Image card
<Card type="image" imageUrl="https://placeimg.com/400/300/any"></Card>;

// Filetype Card + Header
<Card
    type="file"
    fileType="application_msword"
    header="MyFilename.doc"
></Card>

// Header (text + icon) and Footer (Buttons and Text) Card
<Card
    header={
            <React.Fragment>
                Header Title
                <Icon
                    type={"bookmark_off"}
                    variant={"grey"}
                    style={{ float: "right" }}
                />
            </React.Fragment>
            }
    footer={
            <React.Fragment>
                <Button style={{ float: "left" }}>edit</Button>
                <Button style={{ float: "left" }} danger>
                    delete
                </Button>
                Updated on
                <br />
                15 Dec 2019
            </React.Fragment>
            }
></Card>
```

### Dropdown

This is a simple three dots menu with a dropdown options listed on hover.

**Usage**

```javascript
import { DropdownComponent as Dropdown } from "smpladminui";

<Dropmenu style={{ float: "right" }}></Dropdown>;
```

**Props**

This component has the following props
| Prop name | Type | Default | Description |
| - | - | - | - |
| `style` | object | {} | A style object to be passed to the button |
| `options` | array | _simple array with two options_ | Array of objects with the following properties: <ul><li>`icon` - _Icon of the menu_</li><li>`label` - _label of the menu_</li><li>`onClick` - _Event handler for the click event of the menu_</li></ul> |

**Examples**

```javascript
import { DropdownComponent as Dropdown } from "smpladminui";

// Float Right Dropdown menu
<Dropmenu
	style={{ float: "right" }}
	options={[
		{
			icon: <Icon type={"listtype_list"} variant={"grey"} />,
			label: "View as List",
			onClick: null
		},
		{
			icon: <Icon type={"listtype_cards"} variant={"grey"} />,
			label: "View as Cards",
			onClick: () => {
				alert("test");
			}
		}
	]}
></Dropdown>;
```

---

### Icon

This is the a simple icon component that renders a styled icon from a predefined list of images.

**Usage**

```javascript
import { IconComponent as Icon } from "smpladminui";

<Icon />;
```

**Props**

This component has the following props
| Prop name | Type | Default | Description |
| - | - | - | - |
| `type` | string | "settings" | This is the type of the icon that will be displayed. The list of available types is: <ul><li>`bookmark_off`</li><li>`bookmark_on`</li><li>`collections`</li><li>`dashboard`</li><li>`downarrow`</li><li>`edit`</li><li>`files`</li><li>`listtype_cards`</li><li>`listtype_list`</li><li>`logout`</li><li>`projectsettings`</li><li>`settings`</li><li>`static`</li><li>`structure`</li><li>`threedots`</li></ul> |
| `variant` | string | "grey" | This is the color option that will be used. Currently there are only two options: <ul><li>`grey` - default one</li><li>`white` - white version of the icon</li></ul> |
| `disabled` | boolean, function, string | false | Renders the Icon as disabled |
| `style` | object | {} | A style object to be passed to the icon |
| `onClick` | function | none | Event handler for the clicking of the icon |

**Examples**

```javascript
import { IconComponent as Icon } from "smpladminui";

<Icon type="dashboard"></Icon> // Dashboard icon
<Icon disabled="disabled" type="static"></Icon> // Disable static icon
<Icon type="collections" onClick={e => alert(e)}></Icon> // Collections icon with click handler
```

---

### Layout

This is the an admin navigational structure with header, sidebar, footer and page. It can be used to structure an admin page with ease.

**Usage**

```javascript
import { LayoutComponent as Layout } from "smpladminui";

<Layout>
	<Page>
		<h1>This is my page</h1>
		Something else here
	</Page>
</Layout>;
```

**Props**

This component has the following props
| Prop name | Type | Default | Description |
| - | - | - | - |
| `leftLabel` | string | "left Label" | This is the smaller label on top of the sidebar (top left hand corner of the interface) |
| `leftSublabel` | string | "Left Sublabel" | This is the bigger (second) label on top of the sidebar|
| `centerLabel` | string | "Please login to the system first" | This is the main text that is displayed on the first level of the header section |
| `centerSublabel` | string | "Total of 1,567,234 hits this month" | This is the second text that is displayed on the second level of the header section |
| `centerRightIcon` | object | `<Icon type={"logout"} variant={"grey"} />` | This is the icon on the right hand side of the header |
| `centerRightText` | string | "Martin D." | This is the text next to the right hand side icon |
| `progress` | number | null | Sets the % of the progress bar in the header. If not passed to the component or the value is null, the progress bar will not be displayed. If is passed it can accept values between 0 and 100, representing the percentage of the progress bar |
| `sidebarElements` | array | array of several elements | List of elements for the sidebar. Each element of the array has to be object with the following properties: <ul><li>`type` - `section` (title) or `item` (normal clickable menu)</li><li>`label` - the label of the menu</li><li>`description` - the description of the menu</li><li>`icon` - the Icon component for the menu</li><li>`selected` - true/false (boolean) - whether the menu is rendered as selected</li></ul> |
**Examples**

```javascript
import { LayoutComponent as Layout } from "smpladminui";

// Some comments
<Layout
	progress={66}
	leftLabel="Martin D."
	leftSublabel="myAdmin"
	centerLabel="MyAdmin / CurrentSection"
	centerSubLevel="User slots used: 6 of 9"
>
	<Page>This is my page</Page>
</Layout>;
```

---

### List

This is the a simple list component that displays array of data in a table style view.

**Usage**

```javascript
import { ListComponent as List } from "smpladminui";

<List />;
```

**Props**

This component has the following props
| Prop name | Type | Default | Description |
| - | - | - | - |
| `header` | array | ["Name", "Structure", "Updated on", "Actions"] | This is the array of texts that will be used as headers for the list. |
| `list` | array | array of two fake list items | Array of the rows for the list. Each element (row) should be an array of itself with elements for each column. Example: `["MyName","No Structure","12 Dec 2019"`, `<React.Fragment><Button>delete</Button><Button>edit</Button></React.Fragment>`] |
| `footer` | object | five buttons rendered like pagination numbers | This is the footer of the list |
| `style` | object | {} | A style object to be passed to the list |

**Examples**

```javascript
import { ListComponent as List } from "smpladminui";

// Normal list
<List
	header={["Name", "Structure", "Updated on", "Actions"]}
	list={[
		[
			"UX Science progress experiment with a very very long name",
			"Root / All Static Pages",
			"15 Dec 12:45",
			<React.Fragment>
				<Button danger style={{ float: "right" }}>
					delete
				</Button>
				<Button style={{ float: "right" }}>edit</Button>
				<Icon
					type={"bookmark_on"}
					variant={"grey"}
					style={{ float: "right" }}
				/>
			</React.Fragment>
		],
		[
			"UX Science progress experiment with a very very long name",
			"Root / All Static Pages",
			"15 Dec 12:45",
			<React.Fragment>
				<Button danger style={{ float: "right" }}>
					delete
				</Button>
				<Button style={{ float: "right" }}>edit</Button>
				<i
					style={{ float: "right" }}
					className="smpladmin_icon_bookmark_on_grey"
				></i>
			</React.Fragment>
		]
	]}
	footer={
		<React.Fragment>
			<Button style={{ float: "right" }}>NEXT &gt;</Button>
			<Button style={{ float: "right" }}>4</Button>
			<Button style={{ float: "right" }}>3</Button>
			<Button style={{ float: "right" }}>2</Button>
			<Button style={{ float: "right" }}>&lt; PREV</Button>
		</React.Fragment>
	}
></List>;
```

---

### Page

This is the a simple page component that renders a styled page container.

**Usage**

```javascript
import { PageComponent as Page } from "smpladminui";

<Page>
	<Wrapper>
		This is my page
		<h1>Title 1 / H1</h1>
		<h2>Title 2 / H2</h2>
		<h3>Title 3 / H3</h3>
		<h4>Title 4 / H4</h4>
		<h5>Title 5 / H5</h5>
		<h6>Title 6 / H6</h6>
	</Wrapper>
</Page>;
```

**Props**

This component has the following props
| Prop name | Type | Default | Description |
| - | - | - | - |
| `label` | string | "Page Label" | This is the that will be placed on top of the page |
| `stickyHeader` | boolean | false | Whether the page label should be sticky on top if the page height is bigger than the awailable height |
| `style` | object | {} | A style object to be passed to the page component |

**Examples**

```javascript
import { PageComponent as Page } from "smpladminui";

<Page label="My Page" stickyHeader={true}>
	This is my page
	<h4>Title</h4>
	<p>My parameter</p>
</Page>;
```

---

### Popup

This is the a popup component that renders a styled popup window in having a background overlay disabling the click events behind it.

**Usage**

```javascript
import { PopupComponent as Popup } from "smpladminui";

...

<Button onClick={this.togglePopupVisible}>Show Popup</Button>

...


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
                15 Dec 2019
            </div>
        </React.Fragment>
    }
    hint={"This is the hint of the popup"}
/>
```

**Props**

This component has the following props
| Prop name | Type | Default | Description |
| - | - | - | - |
| `vsible` | boolean | false | Shows or hides the popup component |
| `label` | string or object | "Popup Label" | This is the text to be used as a label for the popup. You can use React.Fragment and put some more elements there like icons or something |
| `hint` | string | null | If passed, will display a small yellow hint under the label of the popup |
| `type` | string | "normal" | Sets the different type for the popup. <br>Options are: <ul><li>`normal` - renders a popup with header and footer and content</li><li>`message` - renders a popup but with bigger font size for the content - usefull for displaying messsages</li></ul> |
| `time` | number | 0 | Sets a delay (in seconds) before the popup autocloses. |
| `style` | object | {} | A style object to be passed to the button |
| `onClose` | function | none | Event handler for the closing of the popup. Will be used when clicking on the X button on top of the popup |

**Examples**

```javascript
import { PopupComponent as Popup } from "smpladminui";

// Simple popup with visible, onClose handler, type is message and will display a message for 5 seconds
<Popup
	visible={this.state.popup2Visible}
	onClose={this.onPopupClose}
	type="message"
	time={5}
	label="Popup will autoclose in 5 seconds"
>
	This is the message body
</Popup>;
```

---

### Wrapper

This is the a simple wrapper component that wraps whatever you place inside it and applies some stying to them.

**Usage**

```javascript
import { WrapperComponent as Wrapper } from "smpladminui";

...

<Wrapper>
    <label>
        This is label
        <input type="text" placeholder="Project name" />
    </label>
</Wrapper>
...

```

**Props**

This component has the following props
| Prop name | Type | Default | Description |
| - | - | - | - |
| `style` | object | {} | A style object to be passed to the wrapper component |

**Examples**

```javascript
import { WrapperComponent as Wrapper } from "smpladminui";

...
// Simple wrapper showing label and text input element as well as other
// html elements

<Wrapper>
	<label>
		This is label
		<input type="text" placeholder="Project name" />
	</label>
	This is inside a wrapper
	<br />
	Don't have an account? Register one <a href="register.html">here</a>.
	<hr size="1" noshade="noshade" />
	<h4>Title 4 / H4</h4>
	<button>My Button</button>
</Wrapper>
```

## Footer thoughts

This is the initial version of this components library which I've started as a try to separate some UI elements I often use as a stand alone library and publish it to NPM.

###### As always all suggestions to improve the usability or functionality of this library is welcome. <br />Don't hesitate to contact me at [mdonchev@msn.com](mailto:mdonchev@msn.com)
