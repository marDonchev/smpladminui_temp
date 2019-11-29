import React from "react";
import PropTypes from "prop-types";

import "./PopupComponent.scss";
import Button from "./../Button/ButtonComponent";

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
	label: PropTypes.string,
	hint: PropTypes.string,
	type: PropTypes.string,
	time: PropTypes.number,
	onClose: PropTypes.func
};

const defaultProps = {
	label: "Popup Label",
	hint: null,
	type: "normal",
	header: <React.Fragment>Root / All Static Pages</React.Fragment>,
	// footer: (
	// 	<React.Fragment>
	// 		Updated on
	// 		<br />
	// 		15 Dec 2017
	// 	</React.Fragment>
	// ),
	style: {},
	time: 0, // in seconds
	onClose: () => {}
};

const PopupComponent = props => {
	const style = props.style || {};

	// const handleClick = e => {
	// 	if (props.onClick) props.onClick(e.target.value);
	// };

	const parseClasses = () => {
		let classes = ["smpladmin_Popup"];
		if (props.primary) classes.push("smpladmin_primary");
		if (props.danger) classes.push("smpladmin_danger");
		if (props.processing) classes.push("smpladmin_processing");
		return classes.join(" ");
	};

	const bodyClass = props.type === "message" ? "smpladmin_message" : "";

	let time = props.time || null;
	let timeInterval = null;
	const calculateTime = () => {
		time--;
		if (time === 0 && props.onClose) {
			clearInterval(timeInterval);
			props.onClose();
		}
	};
	if (time && props.visible) {
		timeInterval = setInterval(function() {
			calculateTime();
		}, 1000);
	}

	return (
		<React.Fragment>
			{props.visible ? (
				<React.Fragment>
					<div className={"smpladmin_Reveal"} />
					<div className={parseClasses()} style={style}>
						<button
							className="smpladmin_Popup_CloseButton"
							onClick={props.onClose}
						>
							&times;
						</button>
						<h1>{props.label ? props.label : null}</h1>
						{props.hint ? (
							<p className="smpladmin_Popup_Hint">{props.hint}</p>
						) : null}

						<p className={bodyClass}>
							I'm a cool paragraph that lives inside of an even
							cooler modal. Wins!
						</p>

						{props.footer ? (
							<div className="smpladmin_Popup_Footer">
								{props.footer}
							</div>
						) : null}
					</div>
				</React.Fragment>
			) : null}
			{/* <div className={"smpladmin_Reveal"} />
			<div className={parseClasses()} style={style}>
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

PopupComponent.propTypes = propTypes;
PopupComponent.defaultProps = defaultProps;

export default PopupComponent;
