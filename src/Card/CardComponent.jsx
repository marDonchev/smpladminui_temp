import React from "react";
import PropTypes from "prop-types";

import "./CardComponent.scss";
import Image from "./../img/sample_image.jpg";
import Button from "./../Button/ButtonComponent";
import Icon from "./../Icon/IconComponent";

const propTypes = {
	header: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.func,
		PropTypes.string,
		PropTypes.object
	]),
	footer: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.func,
		PropTypes.string,
		PropTypes.object
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

const CardComponent = props => {
	const style = props.style || {};

	// const handleClick = e => {
	// 	if (props.onClick) props.onClick(e.target.value);
	// };

	const parseClasses = () => {
		let classes = ["smpladmin_Card"];
		if (props.primary) classes.push("smpladmin_primary");
		if (props.danger) classes.push("smpladmin_danger");
		if (props.processing) classes.push("smpladmin_processing");
		return classes.join(" ");
	};

	return (
		<React.Fragment>
			<div className={parseClasses()} style={style}>
				<div className="smpladmin_Card_Header">
					{props.header}
					<Icon
						type={"bookmark_off"}
						variant={"grey"}
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
			</div>
		</React.Fragment>
	);
};

CardComponent.propTypes = propTypes;
CardComponent.defaultProps = defaultProps;

export default CardComponent;
