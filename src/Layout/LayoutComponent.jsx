import React from "react";
import PropTypes from "prop-types";

import "./LayoutComponent.scss";

const propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	styles: PropTypes.object,
	disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
};

const defaultProps = {
	leftLabel: "left Label",
	leftSublabel: "Left Sublabel",
	centerLabel: "Please login to the system first",
	centerSublabel: "Total of 1,567,234 hits this month",
	disabled: false
};

const LayoutComponent = props => {
	const styles = props.styles || {};

	const handleClick = e => {
		if (props.onClick) props.onClick(e.target.value);
	};

	const parseClasses = () => {
		let classes = ["smpladmin_Layout"];
		if (props.primary) classes.push("smpladmin_primary");
		if (props.danger) classes.push("smpladmin_danger");
		return classes.join(" ");
	};

	return (
		<React.Fragment>
			<div className={parseClasses()} style={styles}>
				<div className="smpladmin_Layout_TopHeader">
					<div>
						<h1>{props.leftLabel}</h1>
						<h2>{props.leftSublabel}</h2>
					</div>
					<div>
						<h1>{props.centerLabel}</h1>
						<h2>{props.centerSublabel}</h2>
					</div>
				</div>
				<div className="smpladmin_Layout_MidBody">
					<div className="smpladmin_Layout_SideBar">
						<div class="smpladmin_Layout_Footer"></div>
					</div>
					<div className="smpladmin_Layout_Page">
						{props.children ? props.children : null}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

LayoutComponent.propTypes = propTypes;
LayoutComponent.defaultProps = defaultProps;

export default LayoutComponent;
