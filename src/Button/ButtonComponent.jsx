import React from "react";
import PropTypes from "prop-types";

import "./ButtonComponent.scss";

const propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	style: PropTypes.object,
	disabled: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.func,
		PropTypes.string
	]),
	primary: PropTypes.bool,
	danger: PropTypes.bool,
	processing: PropTypes.bool
};

const defaultProps = {
	label: "Button",
	disabled: false,
	primary: false,
	danger: false,
	processing: false
};

const ButtonComponent = props => {
	const style = props.style || {};

	const handleClick = e => {
		if (props.onClick) props.onClick(e.target.value);
	};

	const parseClasses = () => {
		let classes = ["smpladmin_Button"];
		if (props.primary) classes.push("smpladmin_primary");
		if (props.danger) classes.push("smpladmin_danger");
		if (props.processing) classes.push("smpladmin_processing");
		return classes.join(" ");
	};

	return (
		<React.Fragment>
			<button
				className={parseClasses()}
				style={style}
				onClick={handleClick}
				// {...props}
			>
				{props.children ? props.children : props.label}
			</button>
		</React.Fragment>
	);
};

ButtonComponent.propTypes = propTypes;
ButtonComponent.defaultProps = defaultProps;

export default ButtonComponent;
