import React from "react";
import PropTypes from "prop-types";

import "./ListComponent.scss";
import Button from "./../Button/ButtonComponent";

const propTypes = {
	header: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.func,
		PropTypes.string
	]),
	footer: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.func,
		PropTypes.string
	]),
	style: PropTypes.object,
	type: PropTypes.string,
	fileType: PropTypes.string
};

const defaultProps = {
	header: ["Name1", "Structure1", "Updated on1", "Actions1"], //<React.Fragment>Root / All Static Pages</React.Fragment>,
	list: [
		[
			"1UX Science progress experiment with a very very long name that goes on one line for a long line",
			"1Root / All Static Pages",
			"115 Dec 12:45",
			<React.Fragment>
				<Button danger style={{ float: "right" }}>
					1delete
				</Button>
				<Button style={{ float: "right" }}>1edit</Button>
				<i
					style={{ float: "right" }}
					className="smpladmin_icon_bookmark_on_grey"
				></i>
			</React.Fragment>
		],
		[
			"2UX Science progress experiment with a very very long name that goes on one line for a long line",
			"2Root / All Static Pages",
			"215 Dec 12:45",
			<React.Fragment>
				<Button danger style={{ float: "right" }}>
					2delete
				</Button>
				<Button style={{ float: "right" }}>2edit</Button>
				<i
					style={{ float: "right" }}
					className="smpladmin_icon_bookmark_on_grey"
				></i>
			</React.Fragment>
		]
	],
	footer: (
		<React.Fragment>
			<Button style={{ float: "right" }}>NEXT &gt;</Button>
			<Button style={{ float: "right" }}>4</Button>
			<Button style={{ float: "right" }}>3</Button>
			<Button style={{ float: "right" }}>2</Button>
			<Button style={{ float: "right" }}>&lt; PREV</Button>
		</React.Fragment>
	),
	// (
	// 	<React.Fragment>
	// 		<Button style={{ float: "left" }}>edit</Button>
	// 		<Button style={{ float: "left" }} danger>
	// 			delete
	// 		</Button>
	// 		Updated on
	// 		<br />
	// 		15 Dec 2017
	// 	</React.Fragment>
	// ),
	style: {}
};

const ListComponent = props => {
	const style = props.style || {};

	// const handleClick = e => {
	// 	if (props.onClick) props.onClick(e.target.value);
	// };

	const parseClasses = () => {
		let classes = ["smpladmin_List"];
		if (props.primary) classes.push("smpladmin_primary");
		if (props.danger) classes.push("smpladmin_danger");
		if (props.processing) classes.push("smpladmin_processing");
		return classes.join(" ");
	};

	return (
		<React.Fragment>
			<div className={parseClasses()} style={style}>
				<table>
					<tr>
						{props.header &&
							props.header.map((h, hIndex) => {
								return <th key={hIndex}>{h}</th>;
							})}
					</tr>
					{props.list
						? props.list.map(l => {
								let content = (
									<tr>
										{l.map(le => {
											return <td>{le}</td>;
										})}
									</tr>
								);
								return content;
						  })
						: null}
				</table>
				<div className="smpladmin_List_Footer">
					{props.footer ? props.footer : null}
				</div>
			</div>

			{/* <div className={parseClasses()} style={style}>
				<div className="smpladmin_Card_Header">
					{props.header}
					<i
						className="smpladmin_icon_bookmark_on_grey"
						style={{ float: "right" }}
					/>
				</div>
				<div
					className={
						props.type === "children"
							? "smpladmin_Card_Body"
							: props.type === "file"
							? props.fileType
								? "smpladmin_Card_Body smpladmin_Card_BodyFile " +
								  props.fileType
								: "smpladmin_Card_Body smpladmin_Card_BodyFile"
							: "smpladmin_Card_Body smpladmin_Card_BodyImage"
					}
					style={
						props.type === "image"
							? {
									backgroundImage: `url(${Image})`
							  }
							: null
					}
				>
					{props.children ? props.children : null}
				</div>
				<div className="smpladmin_Card_Footer">{props.footer}</div>
			</div> */}
		</React.Fragment>
	);
};

ListComponent.propTypes = propTypes;
ListComponent.defaultProps = defaultProps;

export default ListComponent;
