/** @format */

import React from "react";
import {NavLink, Link} from "react-router-dom";

const home = {
	pathname: "/home",
};
const catalog = {
	pathname: "/catalog",
};
const about = {
	pathname: "/about",
};

export default class Header extends React.Component {
	isRoute = window.location.pathname.includes("/home");
	nStyle = this.isRoute ? {height: "100%"} : {height: "50px"};
	sStyle = this.isRoute ? {background: "green"} : {background: "black"};
	render() {
		return (
			<header className="header" style={this.sStyle}>
				<nav className="wrapper-header" style={this.nStyle}>
					<ul>
						<li>Продукция</li>
						<li>Контакты</li>
						<li>Оплата и доставка</li>
					</ul>
					<Link to={home} className="btn btn-primary">
						Airwin
					</Link>
					<Link to={catalog} className="btn btn-primary">
						{this.props.catalog}
					</Link>
					<Link to={about} className="btn btn-primary">
						{this.props.about}
					</Link>
				</nav>
			</header>
		);
	}
}
