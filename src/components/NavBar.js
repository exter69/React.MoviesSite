import React, { useState } from 'react';
import {NavLink} from "react-router-dom";

const Title = ({ title }) => {
    return <div className="navbar-title">
        <h1>{ title }</h1>
    </div>
}


const Button = ({ children, className, navLinkLocation }) => {
    const ConcaClassName = navLinkLocation + " " + className

    return <NavLink to={navLinkLocation}
                    className={ (nav) => (
                        nav.isActive ? ConcaClassName + " active" : ConcaClassName)}>
        <h1>{ children }</h1>
    </NavLink>
}

/*
* NavBar that fit top, two reactive button on left and middle banner
* Button as className --> navbar-btn + { "" button name} and h1
* Title as className --> navbar-title and h1
* */
const NavBar = () => {
    const [state, setState] = useState({
        NameBtn: ['Home', 'Likes'],
        ClassName: ['home', 'like'],
        title: 'React Movie'
    })
    const [navBar, setNavBar] = useState(false)


    const changeNavBackGroung = () => {
        window.scrollY > 10 ?
            setNavBar(true) :
                setNavBar(false)
    }

    window.addEventListener('scroll', changeNavBackGroung)

    return (
        <div className={ navBar === true ? "navbar active" : "navbar"}>
            <div className="navbar-btn-container">
                {
                    state.NameBtn
                            .map((button, index) => (
                                <Button
                                    key={index}
                                    className={"navbar-btn" }
                                    navLinkLocation={state.ClassName[index]}
                                >
                                    {button}
                                </Button>))
                }
            </div>
            <Title title={state.title}/>
        </div>
    );
};

export default NavBar;