import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";
//create your first component
const Home = () => {
	return (
		<>
			<Navbar></Navbar>
			<div className="container">
				<Jumbotron></Jumbotron>
				<div className="row d-flex mb-3">
					<div className="col d-flex justify-content-center"><Card text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam, consequuntur amet, nemo dolorum nam esse."></Card></div>
					<div className="col d-flex justify-content-center"><Card text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam, consequuntur amet, nemo dolorum nam esse animi fuga repudiandae id facilis dolor."></Card></div>
					<div className="col d-flex justify-content-center"><Card text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam, consequuntur amet, nemo dolorum nam esse."></Card></div>
					<div className="col d-flex justify-content-center"><Card text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam, consequuntur amet, nemo dolorum nam esse animi fuga repudiandae id facilis dolor."></Card></div>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
};

export default Home;
