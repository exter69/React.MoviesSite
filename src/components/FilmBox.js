import React, {useEffect, useState} from 'react';
import axios from "axios";
import {findAllByDisplayValue} from "@testing-library/react";


const GenreBox = ({ children }) => {
  return <div className="genre-box">
      <h2>{children}</h2>
  </div>
}



const FilmBox = ({ film }) => {
    const [active, setActive] = useState(false)


    const genreFinder = () => {
        let genreArray = []

        for (let i=0; i < film.genre_ids.length; i++){

            switch (film.genre_ids[i]) {

                case 28:
                    genreArray.push('Action')
                    break;
                case 12:
                    genreArray.push('Adventure')
                    break;
                case 16:
                    genreArray.push('Animation')
                    break;
                case 35:
                    genreArray.push('Comedy')
                    break;
                case 80:
                    genreArray.push('Crime')
                    break;
                case 99:
                    genreArray.push('Documentary')
                    break;
                case 18:
                    genreArray.push('Drama')
                    break;
                case 10751:
                    genreArray.push('Familly')
                    break;
                case 14:
                    genreArray.push('Fantasy')
                    break;
                case 36:
                    genreArray.push('History')
                    break;
                case 27:
                    genreArray.push('Horror')
                    break;
                case 10402:
                    genreArray.push('Music')
                    break;
                case 9648:
                    genreArray.push('Mystery')
                    break;
                case 10749:
                    genreArray.push('Romance')
                    break;
                case 878:
                    genreArray.push('Science Fiction')
                    break;
                case 10770:
                    genreArray.push('Tv Movie')
                    break;
                case 53:
                    genreArray.push('Thriller')
                    break;
                case 10752:
                    genreArray.push('War')
                    break;
                case 37:
                    genreArray.push('Western')
                    break;
                default:
                    break;
            }
        }
        return genreArray.map((genre, index) => <li key={index}>
            {genre}
        </li>);
    }

    const handleOnMouseEnter = () => {
        active ?
            setActive(false):
                setActive(true)
    }

    return (
        <div className={active ? "film-box active" : "film-box"}
             onMouseEnter={handleOnMouseEnter}
             onMouseLeave={handleOnMouseEnter}
        >
            <div className="film-img">
                <img src={
                    film.poster_path ?
                        "https://image.tmdb.org/t/p/w500" + film.poster_path:
                        ""}
                     alt={film.original_title}/>
            </div>
            <div className="film-main-info">
                <div>
                    <h2>{film.original_title}</h2>
                    <h3>Sorti le : {film.release_date}</h3>
                    <h4>{film.vote_average.toLocaleString()} / 10</h4>
                </div>
                <div className="film-categories">
                    <ul>
                        {
                            genreFinder()
                        }
                    </ul>
                </div>
            </div>
            <div className="film-short">
                <h2>Synopsis</h2>
                <p>{film.overview}</p>
            </div>
        </div>
    );
};

export default FilmBox;