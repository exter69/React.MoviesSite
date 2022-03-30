import React, { useState} from 'react';


const Button = ({ onChange }) => {

    return (
        <div className="search-filter">
            <div className="top-filter">
                {/*Icon*/}
                <h3>Top</h3>
            </div>
                <div className="flop-filter">
                    {/*Icon*/}
                    <h3>Flop</h3>
                </div>
    </div>)
}


const SearchBox = ({ onChange }) => {
    const [search, setSearch] = useState('')


    return (
        <div className="search-container">
            <div className="search-box">
                <div className="search-input">
                    <input

                        onChange={onChange}
                        defaultValue={search}
                        type="text"
                        placeholder="Entrez le titre d'un film"/>
                </div>
                <div className="search-commit">
                    <h2> Rechercher </h2>
                </div>
                <Button/>
            </div>
        </div>
    );
};

export default SearchBox;