/** @format */

import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import "./App.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import NotFound from "./pages/NotFound";

const about = ["О нас"];
const catalog = ['Каталог']

export default class App extends React.Component {
	render() {
		const pages = (content) => {
			return (
				<React.Fragment>
					<Header about={about} catalog={catalog} />
					{content}
					<Footer />
				</React.Fragment>
			);
		};
		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<Route exact path="/home" render={() => pages(<Home />)} />
						<Route path="/catalog" render={() => pages(<Catalog />)} />
						<Route path="*" component={NotFound} />
					</Switch>
				</div>
			</BrowserRouter>

			// <BrowserRouter>
			// 	<div className="Airwin">
			// 		<Header about={about} />
			// 		<Switch>
			// 			<Route exact path="/home">
			// 				<Home />
			// 			</Route>
			// 			<Route path="/catalog">
			// 				<Catalog />
			// 			</Route>
			// 		</Switch>
			// 		<Footer />
			// 	</div>
			// </BrowserRouter>
		);
	}
}
