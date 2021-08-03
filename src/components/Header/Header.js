import React from 'react';
import './Header.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


export default ({black}) =>{

    const clickMenu = () => {
        let $click = document.querySelectorAll('.menu-mobile');
    }

    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/"><img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Netflix" /></a>
                <nav className="menu-desktop">
                    <ul>
                        <li><a style={{fontWeight: 700}} href="" title="Início">Início</a></li>
                        <li><a href="" title="Séries">Séries</a></li>
                        <li><a href="" title="Filmes">Filmes</a></li>
                        <li><a href="" title="Bombando">Bombando</a></li>
                        <li><a href="" title="Minha lista">Minha lista</a></li>
                    </ul>
                </nav>

                <span className="hidden" onClick={clickMenu}>Navegar <ArrowDropDownIcon style={{position: 'relative',top: 7,left: -3}}/></span>
                <nav className="menu-mobile" id="menu-mobile">
                    <ul>
                        <li><a style={{fontWeight: 700}} href="" title="Início">Início</a></li>
                        <li><a href="" title="Séries">Séries</a></li>
                        <li><a href="" title="Filmes">Filmes</a></li>
                        <li><a href="" title="Bombando">Bombando</a></li>
                        <li><a href="" title="Minha lista">Minha lista</a></li>
                    </ul>
                </nav>
            </div>

            <div className="header--user">
                <div className="header--user--single">
                    <SearchIcon/>
                </div>

                <div className="header--user--single">
                    <NotificationsIcon/>
                </div>

                <div className="header--user--single">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário" />
                </div>
                
            </div>
        </header>
    );
}