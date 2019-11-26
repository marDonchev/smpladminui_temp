import React from "react";
import PropTypes from "prop-types";

import "./ButtonComponent.scss";

const propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	styles: PropTypes.object,
	disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
};

const defaultProps = {
	label: "Button",
	disabled: false
};

const ButtonComponent = props => {
	const styles = props.styles || {};

	const handleClick = e => {
		if (props.onClick) props.onClick(e.target.value);
	};

	const parseClasses = () => {
		let classes = ["smpladmin_Button"];
		if (props.primary) classes.push("smpladmin_primary");
		if (props.danger) classes.push("smpladmin_danger");
		return classes.join(" ");
	};

	return (
		<React.Fragment>
			<button
				className={parseClasses()}
				style={styles}
				onClick={handleClick}
				{...props}
			>
				{props.children ? props.children : props.label}
			</button>
		</React.Fragment>
	);
};

// export default ButtonComponent;
// class ButtonComponent extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	handleClick = e => {
// 		if (this.props.onClick) this.props.onClick(e.target.value);
// 	};

// 	parseClasses = () => {
// 		let classes = ["smpladmin_Button"];
// 		if (this.props.primary) classes.push("smpladmin_primary");
// 		if (this.props.danger) classes.push("smpladmin_danger");
// 		return classes.join(" ");
// 	};

// 	render() {
// 		const styles = this.props.styles || {};

// 		return (
// 			<React.Fragment>
// 				<button
// 					className={this.parseClasses()}
// 					style={styles}
// 					onClick={this.handleClick}
// 					{...this.props}
// 				>
// 					{this.props.children
// 						? this.props.children
// 						: this.props.label}
// 				</button>
// 			</React.Fragment>
// 		);
// 	}
// }

ButtonComponent.propTypes = propTypes;
ButtonComponent.defaultProps = defaultProps;

export default ButtonComponent;