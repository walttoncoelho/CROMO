import React from "react";
import { useState } from 'react';

import { PainelConteudo, BannerMenuItem, BannerMenuLink, DropdownContent, DropdownLink, PainelAdministrativo, PainelMenu, PainelListaMenu } from './style/AdministrativePanel'

import './AdministrativePanel.css'

export default AdministrativePanel

function AdministrativePanel() {
    const [isBannerOpen, setIsBannerOpen] = useState(false);
    const [isEmpreendimentosOpen, setIsEmpreendimentosOpen] = useState(false);
    const [isNumerosOpen, setIsNumerosOpen] = useState(false);

    const handleBannerClick = () => {
        setIsBannerOpen(!isBannerOpen);
        setIsEmpreendimentosOpen(false);
        setIsNumerosOpen(false);
    };
    const handleEmpreendimentosClick = () => {
        setIsEmpreendimentosOpen(!isEmpreendimentosOpen);
        setIsBannerOpen(false);
        setIsNumerosOpen(false);
    };
    const handleNumerosClick = () => {
        setIsNumerosOpen(!isNumerosOpen);
        setIsEmpreendimentosOpen(false);
        setIsBannerOpen(false);
    };
    return (
        <>
            <PainelAdministrativo>
                <div>
                    <PainelMenu>Painel</PainelMenu>
                    <PainelListaMenu>
                        <li className='styleList'><a href="/manager/perfil">Perfil</a></li>
                        <li className='styleList'><a href="/manager/servicos">Serviços</a></li>
                        <li className='styleList'><a href="/manager/configuracoes">Configurações</a></li>
                        <li className='styleList'><a href="/manager/suporte">Suporte</a></li>
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
                            <BannerMenuLink onClick={handleNumerosClick}>Números</BannerMenuLink>
                            <DropdownContent isOpen={isNumerosOpen}>
                                <DropdownLink> <li className='styleList'><a href="/manager/numeroedit">Editar</a></li></DropdownLink>
                            </DropdownContent>
                        </BannerMenuItem>
                    </ol>
                </div>
            </PainelAdministrativo>
        </>
    )
}