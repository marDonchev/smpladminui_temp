import React from "react";
import PropTypes from "prop-types";

import "./DropmenuComponent.scss";

const propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	style: PropTypes.object,
	disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
};

const defaultProps = {
	label: "Button",
	disabled: false,
	hover: false
	// options: [
	// 	{
	// 		icon: "icon_listtype_list_grey",
	// 		label: "View as List",
	// 		onClick: null
	// 	},
	// 	{
	// 		icon: "icon_listtype_cards_grey",
	// 		label: "View as Cards",
	// 		onClick: null
	// 	}
	// ]
};

const DropmenuComponent = props => {
	const style = props.style || {};

	console.info("DropmenuComponent style", style);

	const parseClasses = () => {
		let classes = ["smpladmin_Dropmenu"];
		if (props.primary) classes.push("smpladmin_primary");
		if (props.danger) classes.push("smpladmin_danger");
		if (props.processing) classes.push("smpladmin_processing");
		return classes.join(" ");
	};

	return (
		<React.Fragment>
			<div className={parseClasses()} style={style}>
				<button></button>

				<div className="smpladmin_Dropmenu_Options">
					<div className="smpladmin_Dropmenu_Option">
						<i className="smpladmin_icon_listtype_list_grey"></i>
						View as List
					</div>
					<div className="smpladmin_Dropmenu_Option">
						<i className="smpladmin_icon_listtype_cards_grey"></i>
						View as Cards
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

DropmenuComponent.propTypes = propTypes;
DropmenuComponent.defaultProps = defaultProps;

export default DropmenuComponent;
