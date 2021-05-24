import React from "react";
import "../App.css";

const Header = (props) => {
    const {Search,onInuputChange,getClick} =props;
    return (
        <>
            <div className="jumbotron">
                <h1 className="display-1">FoodApp</h1>
                <div className="input-group mb-3">
                    <div className="input-group mb-3 w-50 m-auto">
                        <input type="text" className="form-control" placeholder="Search-food" value={Search} onChange={onInuputChange} />
                        <div className="input-group-append">
                            <button className="btn btn-dark" onClick={getClick} >Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;