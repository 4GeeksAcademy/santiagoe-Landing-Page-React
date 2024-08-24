import React from "react";
import Card from "./card";

const ContainerCard = () =>{
    return(
        <div className="container">
				<div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-4 row-cols-lg-3 justify-content-center mb-5">
					<div className="col"><Card text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam, consequuntur amet, nemo dolorum nam esse."></Card></div>
					<div className="col"><Card text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam, consequuntur amet, nemo dolorum nam esse animi fuga repudiandae id facilis dolor."></Card></div>
					<div className="col"><Card text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam, consequuntur amet, nemo dolorum nam esse."></Card></div>
					<div className="col"><Card text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam, consequuntur amet, nemo dolorum nam esse animi fuga repudiandae id facilis dolor."></Card></div>
				</div>
			</div>
    );
};
export default ContainerCard;