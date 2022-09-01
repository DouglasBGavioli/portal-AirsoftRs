import { ReactElement, useState } from "react"
import { Link } from "react-router-dom"

import logo from "../../assets/icons/Logo.png"

import { ReactComponent as Login } from '../../assets/icons/login.svg';
import { ReactComponent as Lupa } from '../../assets/icons/lupa.svg';
import { ReactComponent as Hamburguer } from '../../assets/icons/hamburguer.svg';
import { ReactComponent as Close } from '../../assets/icons/close.svg';

import "./style.min.css"




export function Header() {
    const [isMenuTogle, setIsMenuTogle] = useState(false);

    return (
        <div className="header">
            <div className="header-top">
                <div className="header-top__logo">
                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                    <h1>AIRSOFT-RS</h1>
                </div>
                <div className="header-top__buttons">
                    <Link to={"/login"} className="a"><Login />Login</Link>
                    <Link to={"/login"} className="b"><Lupa />Busca</Link>
                </div>

            </div>
            <div className="header-mid">
                <div className="header-mid__links">
                    <div className="header-mid__links-mob">
                        <button onClick={() => setIsMenuTogle(
                            !isMenuTogle)}><Hamburguer /></button>

                        {isMenuTogle && (
                            <div className={"header-mid__links-mob__content"}>
                                <div className="header-mid__links-mob__content-top">
                                    <button onClick={() => setIsMenuTogle(
                                        false)}><Close /></button>
                                </div>
                                <div className="header-mid__links-mob__content-links">
                                    <div className="dropdown">
                                        <p>Agenda</p>
                                        <div className="dropdown-content">
                                            <Link to={"/proximos-eventos"}>Próximos eventos</Link>
                                            <Link to={"/"}>Eventos realizados</Link>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <p>Campos</p>
                                        <div className="dropdown-content">
                                            <Link to={"/"}>Rio Grande do Sul</Link>
                                            <Link to={"/"}>Santa Catarina</Link>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <p>Vídeos</p>
                                        <div className="dropdown-content">
                                            <Link to={"/"}>Giro pelos campos</Link>
                                            <Link to={"/"}>Lives</Link>
                                            <Link to={"/"}>Jogadores parceiros</Link>
                                            <Link to={"/"}>Reviews</Link>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <p>Dicas</p>
                                        <div className="dropdown-content">
                                            <Link to={"/"}>Armeiros de airsoft</Link>
                                            <Link to={"/"}>Iniciando no airsoft</Link>
                                            <Link to={"/"}>Missões</Link>
                                            <Link to={"/"}>Equipamentos de proteção</Link>
                                            <Link to={"/"}>Táticas</Link>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <p>Histórias</p>
                                        <div className="dropdown-content">
                                            <Link to={"/"}>Relatos de guerra</Link>
                                            <Link to={"/"}>Superação</Link>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <p>Mais conteúdos</p>
                                        <div className="dropdown-content">
                                            <Link to={"/"}>Equipes</Link>
                                            <Link to={"/"}>Parceiros</Link>
                                            <Link to={"/"}>Podcast & Buteco</Link>
                                            <Link to={"/"}>Novidades</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        }
                    </div>

                    <div className="header-mid__links-desk">
                        <div className="dropdown">
                            <p>Agenda</p>
                            <div className="dropdown-content">
                                <Link to={"/proximos-eventos"}>Próximos eventos</Link>
                                <Link to={"/"}>Eventos realizados</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <p>Campos</p>
                            <div className="dropdown-content">
                                <Link to={"/"}>Rio Grande do Sul</Link>
                                <Link to={"/"}>Santa Catarina</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <p>Vídeos</p>
                            <div className="dropdown-content">
                                <Link to={"/"}>Giro pelos campos</Link>
                                <Link to={"/"}>Lives</Link>
                                <Link to={"/"}>Jogadores parceiros</Link>
                                <Link to={"/"}>Reviews</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <p>Dicas</p>
                            <div className="dropdown-content">
                                <Link to={"/"}>Armeiros de airsoft</Link>
                                <Link to={"/"}>Iniciando no airsoft</Link>
                                <Link to={"/"}>Missões</Link>
                                <Link to={"/"}>Equipamentos de proteção</Link>
                                <Link to={"/"}>Táticas</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <p>Histórias</p>
                            <div className="dropdown-content">
                                <Link to={"/"}>Relatos de guerra</Link>
                                <Link to={"/"}>Superação</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <p>Mais conteúdos</p>
                            <div className="dropdown-content">
                                <Link to={"/"}>Equipes</Link>
                                <Link to={"/"}>Parceiros</Link>
                                <Link to={"/"}>Podcast & Buteco</Link>
                                <Link to={"/"}>Novidades</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="header-down">
                <div className="header-down__verde"></div>
                <div className="header-down__vermelho"></div>
                <div className="header-down__amarelo"></div>
            </div>
        </div>

    )
}