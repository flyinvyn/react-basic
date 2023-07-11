import React from 'react'

const Navigation = () => {
    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                <div className="container">
                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/blnja.png" alt="logo" />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item ml-2">
                                <input
                                    className="mr-2 input"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button className="srch">
                                    <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/Search%20Glyph.png" alt="" />
                                </button>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <button
                                type="button"
                                className="filter"
                                data-toggle="modal"
                                data-target="#exampleModal"
                            >
                                <img src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/filter%201.png" alt="" />
                            </button>
                            <button className="hd mr-3">
                                <img className="mr-4" src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/bell.png" alt="bell" />
                            </button>
                            <button className="hd mr-3">
                                <img className="mr-4" src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/mail.png" alt="mail" />
                            </button>
                            <button className="hd ">
                                <img
                                    className="mr-4"
                                    src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/profil.png"
                                    alt="profil"
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navigation