import React from "react";
import { useState } from 'react';

import { PainelConteudo, BannerMenuItem, BannerMenuLink, DropdownContent, DropdownLink, PainelAdministrativo, PainelMenu, PainelListaMenu, NavLinkStyled } from './style/AdministrativePanel'

import './AdministrativePanel.css'

export default AdministrativePanel

function AdministrativePanel() {
    const [isBannerOpen, setIsBannerOpen] = useState(false);
    const [isEmpreendimentosOpen, setIsEmpreendimentosOpen] = useState(false);
    const [isInfraestruturasOpen, setIsInfraestruturasOpen] = useState(false);
    const [isNumerosOpen, setIsNumerosOpen] = useState(false);
    const [isUsuariosOpen, setIsUsuariosOpen] = useState(false);
    const [isContatosOpen, setIsContatosOpen] = useState(false);

    let resetAllStates = () => [
        setIsBannerOpen,
        setIsEmpreendimentosOpen,
        setIsInfraestruturasOpen,
        setIsNumerosOpen,
        setIsUsuariosOpen,
        setIsContatosOpen
    ].forEach(setState => setState(false));

    const handleBannerClick = () => {
        resetAllStates();
        setIsBannerOpen(!isBannerOpen);
    };
    const handleEmpreendimentosClick = () => {
        resetAllStates();
        setIsEmpreendimentosOpen(!isEmpreendimentosOpen);
    };
    const handleInfraestruturasClick = () => {
        resetAllStates();
        setIsInfraestruturasOpen(!isInfraestruturasOpen);
    };
    const handleNumerosClick = () => {
        resetAllStates();
        setIsNumerosOpen(!isNumerosOpen);
    };
    const handleUsuariosClick = () => {
        resetAllStates();
        setIsUsuariosOpen(!isUsuariosOpen);
    };
    const handleContatosClick = () => {
        resetAllStates();
        setIsContatosOpen(!isContatosOpen);
    };
    return (
        <>
            <PainelAdministrativo>
                <div>
                    <PainelMenu>Painel</PainelMenu>
                    <PainelListaMenu>
                        <NavLinkStyled to="/manager/perfil" activeClassName="active">
                            <p>Perfil</p>
                        </NavLinkStyled >
                        <NavLinkStyled to="/manager/servicos" activeClassName="active">
                            <p>Serviços</p>
                        </NavLinkStyled>

                        <NavLinkStyled to="/manager/configuracoes" activeClassName="active">
                            <p>Configurações</p>
                        </NavLinkStyled>
                        <NavLinkStyled to="/manager/suporte" activeClassName="active">
                            <p>Suporte</p>
                        </NavLinkStyled>

                    </PainelListaMenu>

                </div>
                <div>
                    <PainelConteudo>Conteúdo</PainelConteudo>
                    <ol>
                        <BannerMenuItem>
                            <BannerMenuLink onClick={handleBannerClick}>Banner</BannerMenuLink>
                            <DropdownContent isOpen={isBannerOpen}>
                                <DropdownLink> <li className='styleList'><a href="/manager/bannerlist">Listar</a></li></DropdownLink>
                                <DropdownLink> <li className='styleList'><a href="/manager/bannercreate">Adicionar</a></li></DropdownLink>
                            </DropdownContent>
                        </BannerMenuItem>
                        <BannerMenuItem>
                            <BannerMenuLink onClick={handleEmpreendimentosClick}>Empreendimentos</BannerMenuLink>
                            <DropdownContent isOpen={isEmpreendimentosOpen}>
                                <DropdownLink> <li className='styleList'><a href="/manager/empreendimentolist">Listar</a></li></DropdownLink>
                                <DropdownLink> <li className='styleList'><a href="/manager/empreendimentocreate">Adicionar</a></li></DropdownLink>
                            </DropdownContent>
                        </BannerMenuItem>
                        <BannerMenuItem>
                            <BannerMenuLink onClick={handleInfraestruturasClick}>Infraestruturas</BannerMenuLink>
                            <DropdownContent isOpen={isInfraestruturasOpen}>
                                <DropdownLink> <li className='styleList'><a href="/manager/infraestruturalist">Listar</a></li></DropdownLink>
                                <DropdownLink> <li className='styleList'><a href="/manager/infraestruturacreate">Adicionar</a></li></DropdownLink>
                            </DropdownContent>
                        </BannerMenuItem>
                        <BannerMenuItem>
                            <BannerMenuLink onClick={handleNumerosClick}>Números</BannerMenuLink>
                            <DropdownContent isOpen={isNumerosOpen}>
                                <DropdownLink> <li className='styleList'><a href="/manager/numeroedit">Editar</a></li></DropdownLink>
                            </DropdownContent>
                        </BannerMenuItem>
                        <BannerMenuItem>
                            <BannerMenuLink onClick={handleUsuariosClick}>Usuários</BannerMenuLink>
                            <DropdownContent isOpen={isUsuariosOpen}>
                                <DropdownLink> <li className='styleList'><a href="/manager/usuariolist">Listar</a></li></DropdownLink>
                                <DropdownLink> <li className='styleList'><a href="/manager/usuariocreate">Adicionar</a></li></DropdownLink>
                            </DropdownContent>
                        </BannerMenuItem>
                        <BannerMenuItem>
                            <BannerMenuLink onClick={handleContatosClick}>Contatos</BannerMenuLink>
                            <DropdownContent isOpen={isContatosOpen}>
                                <DropdownLink> <li className='styleList'><a href="/manager/contatolist">Listar</a></li></DropdownLink>
                            </DropdownContent>
                        </BannerMenuItem>
                    </ol>
                </div>
            </PainelAdministrativo>
        </>
    )
}