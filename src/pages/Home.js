import React, {useState} from 'react';
import NavBar from "../components/NavBar";
import FilmDisplay from "../components/FilmDisplay";
import SearchBox from "../components/SearchBox"

const Home = () => {
    const [search, setSearch] =useState('')

    return (
        <div>
            <NavBar/>
            <SearchBox
                onChange={(e) => {
                    setSearch(e.target.value)
            }}/>
            <FilmDisplay search={search}/>
        </div>
    );
};

export default Home;