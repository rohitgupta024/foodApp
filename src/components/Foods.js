import React from "react";


const Food = (props) => {
    const { food } = props;
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        food.map((item) => {
                            return (
                                <>

                                    <div className="col-md-3">
                                        <div className="card text-center">
                                            <img src={item.recipe.image} className="img-fluid rounded-circle pt-3 w-50 m-auto" />
                                            <div className="card-body">
                                                <h6>{item.recipe.label}</h6>
                                            </div>
                                           
                                        </div>
                                       
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Food;