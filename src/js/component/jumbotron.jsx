import React from "react";

const Jumbotron = () =>{
    return(
        <div className="p-5 mt-4 mb-4 bg-light rounded-3 pb-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                <p className="col-md-12 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, iure tempora nesciunt nulla repellendus assumenda rem ullam! Dolorum tempore doloremque eveniet.</p>
                <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
            </div>
        </div>
    );
}
export default Jumbotron;