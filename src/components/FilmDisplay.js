import React, {useEffect, useState} from 'react';
import axios from "axios"
import FilmBox from "./FilmBox";


const FilmDisplay = ({ search }) => {
    const [data, setData] = useState([])
    const [genre, setGenre] =useState()

    useEffect(() => {
        axios
            .get("https://api.themoviedb.org/3/genre/" +
                "movie/list?api_key=02a25dec74240152f84826345e161084&language=en-US")
            .then((data) => {
                setGenre(data.data.genres)
            })

    }, [])

    useEffect(() => {
        if (search !== '' && search !== null){
            axios
                .get("https://api.themoviedb.org/3/search/movie?api_key=02a25dec74240152f84826345e161084&query=" + search + "&page=1")
                .then((res) => setData(res.data.results))
        }else {
            axios
                .get(
                    "https://api.themoviedb.org/3/trending/movie/week?api_key=02a25dec74240152f84826345e161084")
                .then((res) => setData(res.data.results))
        }
    }, [search])


    return (
        <div className="film-display">
            {
                data.length === 0 ?
                    <div>
                        <h1>No movie has been find</h1>
                    </div> :
                        data.map((film, index) => (
                            <FilmBox
                                key={index}
                                film={film}
                                genre={genre}>
                            </FilmBox>
                ))
            }
        </div>
    );
};

export default FilmDisplay;