import React, {useState} from 'react';
import SearchList from './SearchList';
import s from "./Search.module.css"

function Search(props) {

    const [searchField, setSearchField] = useState("");

    const filteredPersons = props.details.filter(person => person.name.toLowerCase().includes(searchField.toLowerCase()));

    const handleChange = e => setSearchField(e.target.value);

    function searchList() {
        return (
            <SearchList filteredPersons={filteredPersons}/>
        );
    }

    return (
        <div className={s.search}>
            <h2>Поиск</h2>
            <input type="search" placeholder="Поиск кинорежиссера" onChange={handleChange}/>
            {searchList()}
        </div>
    );
}

export default Search;