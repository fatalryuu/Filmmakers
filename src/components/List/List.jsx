import React from 'react';
import s from "./List.module.css";
import Search from "./Search/Search";
import initialDetails from "../../data/initialDetails.js";

const List = (props) => {
    return (
        <div>
            <Search details={initialDetails}/>
        </div>
    );
};

export default List;