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
	header: <React.Fragment>Root / All Static Pages</React.Fragment>,
	footer: (
		<React.Fragment>
			<Button style={{ float: "left" }}>edit</Button>
			<Button style={{ float: "left" }} danger>
				delete
			</Button>
			Updated on
			<br />
			15 Dec 2017
		</React.Fragment>
	),
	style: {},
	type: "children",
	fileType: "video_mp4"
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

	console.info("Image", Image);
	return (
		<React.Fragment>
			<div className={parseClasses()} style={style}>
				<table>
					<tr>
						<th>Name</th>
						<th>Structure</th>
						<th>Updated on</th>
						<th>Actions</th>
					</tr>
					<tr>
						<td>
							UX Science progress experiment with a very very long
							name that goes on one line for a long line
						</td>
						<td>Root / All Static Pages</td>
						<td>15 Dec 12:45</td>
						<td>
							<Button danger style={{ float: "right" }}>
								delete
							</Button>
							<Button style={{ float: "right" }}>edit</Button>
							<i
								style={{ float: "right" }}
								className="smpladmin_icon_bookmark_on_grey"
							></i>
						</td>
					</tr>
					<tr>
						<td>
							UX Science progress experiment with a very very long
							name that goes on one line for a long line
						</td>
						<td>Root / All Static Pages</td>
						<td>15 Dec 12:45</td>
						<td>
							<Button danger style={{ float: "right" }}>
								delete
							</Button>
							<Button style={{ float: "right" }}>edit</Button>
							<i
								style={{ float: "right" }}
								className="smpladmin_icon_bookmark_off_grey"
							></i>
						</td>
					</tr>
				</table>
				<div className="smpladmin_List_Footer">
					<Button style={{ float: "right" }}>NEXT &gt;</Button>
					<Button style={{ float: "right" }}>4</Button>
					<Button style={{ float: "right" }}>3</Button>
					<Button style={{ float: "right" }}>2</Button>
					<Button style={{ float: "right" }}>&lt; PREV</Button>
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
