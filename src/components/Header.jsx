import logo from '/imgs/container-logo.png'
import { Header_content } from './Header_content'
import { Content } from './Content'
import { ContentMenu } from './ContentMenu'
import { useState } from 'react'
import {styled} from 'styled-components'
import {LiComponent} from './LiComponent'
import { Header_content2 } from './Header_content2'
import { Menu_mobile } from './Menu_mobile'
export const Header = () => {

  function handleClickMenuHamburguer(){
    document.querySelector('.menu-mobile').style.display = 'block'
  }

    return (
        <header>
        <Header_content>
          <a href="./"><img src={logo} alt="Logo" /></a>
          <Content>
              <ContentMenu>
                    <LiComponent url="./domestico" text="Uso Domestico" />
                    <LiComponent url="./comercial" text="Uso Comercial" />
                    <LiComponent url="#" text="Para Parceiros" />
              </ContentMenu>
              <ContentMenu>
                    <LiComponent url="#" text="Segurança" />
                    <LiComponent url="#" text="Privacidade" />
                    <LiComponent url="#" text="Desempenho" />
              </ContentMenu>
          </Content>
        </Header_content>
        <span className="btn-menu-hamburguer material-symbols-outlined" onClick={handleClickMenuHamburguer}>menu</span>
        <Header_content2>
            <LiComponent url="#" text="Quem somos" />
            <LiComponent url="#" text="Blogs" />
            <LiComponent url="#" text="Brasil" />
            <LiComponent url="./login" text="Login" />
        </Header_content2>
        <Menu_mobile>
            <LiComponent url="./login" text="Login"/>
            <LiComponent url="./domestico" text="Uso domestico"/>
            <LiComponent url="./comercial" text="Uso Comercial"/>
            <LiComponent url="#" text="Para parceiros"/>
            <LiComponent url="#" text="Segurança"/>
            <LiComponent url="#" text="Privacidade"/>
            <LiComponent url="#" text="Desempenho"/>
        </Menu_mobile>
      </header>
    )
}