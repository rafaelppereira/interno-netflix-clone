import React from 'react';
import './Footer.css';

export default () =>{
    return (
        <div>
        <footer>
            <div className="footer-flex">
            <div className="footer-single">
                <ul>
                <li><a href="" title="Idioma e legendas">Idioma e legendas</a></li>
                <li><a href="" title="Empresa">Empresa</a></li>
                <li><a href="" title="Privacidade">Privacidade</a></li>
                <li><a href="" title="Entre em contato">Entre em contato</a></li>
                </ul>
            </div>

            <div className="footer-single">
                <ul>
                <li><a href="" title="Audiodescrição">Audiodescrição</a></li>
                <li><a href="" title="Relações com investidores">Relações com investidores</a></li>
                <li><a href="" title="Avisos legais">Avisos legais</a></li>
                </ul>
            </div>

            <div className="footer-single">
                <ul>
                <li><a href="" title="Centro de ajuda">Centro de ajuda</a></li>
                <li><a href="" title="Carreiras">Carreiras</a></li>
                <li><a href="" title="Preferências de cookies">Preferências de cookies</a></li>
                </ul>
            </div>

            <div className="footer-single">
                <ul>
                <li><a href="" title="Cartão pré-pago">Cartão pré-pago</a></li>
                <li><a href="" title="Termos de uso">Termos de uso</a></li>
                <li><a href="" title="Informações corporativas">Informações corporativas</a></li>
                </ul>
            </div>
            </div>
            <div className="termos">
                Todos os direitos reservados <br/>
                Feito com muito ❤ por Rafael dos Santos Pereira
            </div>
        </footer>
        </div>
    )
}