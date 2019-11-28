import React from "react";
import PropTypes from "prop-types";

import "./PageComponent.scss";

const propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	styles: PropTypes.object,
	disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
};

const defaultProps = {
	label: "Page Label",
	disabled: false,
	stickyHeader: false
};

const PageComponent = props => {
	const styles = props.styles || {};

	const parseClasses = () => {
		let classes = ["smpladmin_Page"];
		if (props.primary) classes.push("smpladmin_primary");
		if (props.danger) classes.push("smpladmin_danger");
		return classes.join(" ");
	};

	return (
		<React.Fragment>
			<div className={parseClasses()} style={styles}>
				<div
					className={
						!props.stickyHeader
							? "smpladmin_Page_HeaderRow"
							: "smpladmin_Page_HeaderRow smpladmin_sticky"
					}
				>
					<div className={"smpladmin_Page_PageTitle"}>
						{props.label}
					</div>
				</div>
				{props.children ? props.children : null}
			</div>
		</React.Fragment>
	);
};

PageComponent.propTypes = propTypes;
PageComponent.defaultProps = defaultProps;

export default PageComponent;
