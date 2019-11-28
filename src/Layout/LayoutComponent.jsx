import React from "react";
import PropTypes from "prop-types";

import "./LayoutComponent.scss";

const propTypes = {
	//leftLabel: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	style: PropTypes.object,
	disabled: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.func,
		PropTypes.string
	])
};

const defaultProps = {
	leftLabel: "left Label",
	leftSublabel: "Left Sublabel",
	centerLabel: "Please login to the system first",
	centerSublabel: "Total of 1,567,234 hits this month",
	sidebarElements: [
		{
			type: "item",
			label: "Dashboard",
			description: "This is explanation about the dashboard section",
			icon: "icon_dashboard_white",
			selected: true
		},
		{ type: "section", label: "MAIN SECTION" },
		{
			type: "item",
			label: "Structure",
			description: "This is explanation about the dashboard section",
			icon: "icon_structure_white",
			selected: false
		},
		{
			type: "item",
			label: "Static Content",
			description: "This is explanation about the dashboard section",
			icon: "icon_static_white",
			selected: false
		},
		{
			type: "item",
			label: "Collections",
			description: "This is explanation about the dashboard section",
			icon: "icon_collections_white",
			selected: false
		},
		{
			type: "item",
			label: "Files",
			description: "This is explanation about the dashboard section",
			icon: "icon_files_white",
			selected: false
		},
		{ type: "section", label: "DEVELOPERS SECTION" },
		{
			type: "item",
			label: "Project Settings",
			description: "This is explanation about the dashboard section",
			icon: "icon_projectsettings_white",
			selected: false
		}
	],
	disabled: false
};

const LayoutComponent = props => {
	const style = props.style || {};

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
			<div className={parseClasses()} style={style}>
				<div className="smpladmin_Layout_TopHeader">
					<div>
						<h1>{props.leftLabel}</h1>
						<h2>{props.leftSublabel}</h2>
					</div>
					<div>
						<h1>{props.centerLabel}</h1>
						<h2>{props.centerSublabel}</h2>
						<div className="success smpladmin_progress">
							<div
								className="smpladmin_progress-meter"
								style={{ width: "50%" }}
							></div>
						</div>
						<i className="smpladmin_icon_logout_grey"></i>
						<h3>Martin D.</h3>
					</div>
				</div>
				<div className="smpladmin_Layout_MidBody">
					<div className="smpladmin_Layout_SideBar">
						{props.sidebarElements.map((se, seIndex) => {
							if (se.type === "item") {
								return (
									<div
										key={seIndex}
										className={
											!se.selected
												? "smpladmin_Layout_SideBar_item"
												: "smpladmin_Layout_SideBar_item smpladmin_selected"
										}
									>
										<i
											className={"smpladmin_" + se.icon}
											title={se.label}
										></i>
										<h1>{se.label}</h1>
										<h2>{se.description}</h2>
									</div>
								);
							}

							if (se.type === "section") {
								return (
									<div
										key={seIndex}
										className="smpladmin_Layout_SideBar_Section"
									>
										{se.label}
									</div>
								);
							}
						})}

						<div className="smpladmin_Layout_Footer">
							<span>Martin D.</span>
							<i
								className="smpladmin_icon_settings_white"
								title="Profile Settings"
							></i>
						</div>
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
