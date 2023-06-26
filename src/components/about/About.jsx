import React from 'react'
import './about.css';
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Venha me conhecer</h5>
      <h2>Sobre mim</h2>


      <div className='container about__container'>    
        <div className='about__me'>
              <div className='about__me-image'>
                <img src={ME} alt="About"></img>
              </div>
          </div>

          <div className='about__content'>
              <div className='about__cards'>
                <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Experiência</h5>
                  <small>10+ Anos de atuação</small>
                </article>

                <article className='about__card'>
                  <FiUsers className='about__icon'/>
                  <h5>Clientes</h5>
                  <small>Diversos Clientes</small>
                </article>

                <article className='about__card'>
                  <VscFolderLibrary className='about__icon'/>
                  <h5>Projetos</h5>
                  <small>Muitos projetos completos</small>
                </article>
              </div>

              <p>
              Sou Lucas, um desenvolvedor autodidata de 32 anos, atualmente morando no Brasil.
              Sou formado em Análise e Desenvolvimento de Sistemas e Pós Graduado em Gestão Ágil e Desenvolvimento de Software. 
              Trabalho há mais de 10 anos como programador, passando por diversas pilhas como HTML, CSS, JavaScript, Bootstrap, Angular, Java, MySQL, Spring Boot e outros Front-End e tecnologias de Back-end.

              Eu sempre quero aprender mais e fazer mais. Também acredito firmemente que nunca devemos nos acomodar. Sou trabalhador, super curioso, apaixonado, comprometido e aprendo rápido!
              </p>

              <a href='#contact' className='btn btn-primary'>Entrar em contato</a>
          </div>
      </div>
    </section>
  )
}

export default About