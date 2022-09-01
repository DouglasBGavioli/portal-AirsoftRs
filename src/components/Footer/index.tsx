import { Link } from "react-router-dom"

import logo from "../../assets/icons/LogoFundoBranco.png"

import { ReactComponent as TwitchTv } from "../../assets/icons/twitchTv.svg"
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg"
import { ReactComponent as Youtube } from "../../assets/icons/youtube.svg"
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg"
import { ReactComponent as Instragram } from "../../assets/icons/instagram.svg"

import "./style.min.css"

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__infos">
                <section className="footer__infos__labelTitle">
                    <div className="footer__infos__labelTitle-title">
                        <h1>Portal de notícias Airsoft RS</h1>
                    </div>
                </section>
                <p>Site voltado para divulgação do esporte Airsoft no RS e Brasil.</p>
                <p>As Armas de Airsoft possuem obrigatoriamente a Ponta de cor vermelha ou laranja</p>
                <p>Violar essa condição é crime!</p>
            </div>
            <div className="footer__midias">
                <div className="footer__midias-logo">
                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                    <h1>AIRSOFT-RS</h1>
                </div>
                <div className="footer__midias-dedicatoria">
                    <p>Criado em Agosto de 2016 por Joelmir Scheleski.</p>
                    <p> Atualizado em Setembro de 2022 por Douglas Gavioli</p>
                </div>
                <div className="footer__midias-icons">
                    <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer"><TwitchTv /></a>
                    <a href="/"><Youtube /></a>
                    <a href="/"><Facebook /></a>
                    <a href="/"><Twitter /></a>
                    <a href="/"><Instragram /></a>
                </div>
            </div>
        </footer>
    )
}