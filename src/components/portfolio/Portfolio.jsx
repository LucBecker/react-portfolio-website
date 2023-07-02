import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'
import IMG9 from '../../assets/portfolio9.png'

const data = [
  {
    id: 1, 
    image: IMG9,
    title: 'Serverless Node AWS Lambda',
    github: 'https://github.com/LucBecker/serverless-node-aws-lambda',
    demo: '#',
  },
  {
    id: 2, 
    image: IMG3,
    title: 'Sistema de ordens de serviço (REST APIs)',
    github: 'https://github.com/LucBecker/order-service-api',
    demo: 'https://order-service-api-production.up.railway.app/',
  },
  {
    id: 3, 
    image: IMG2,
    title: 'Ordens de Serviço',
    github: 'https://github.com/LucBecker/order-service-front',
    demo:   'https://lucbecker.github.io/',
  },
  {
    id: 4, 
    image: IMG1,
    title: 'Shopping App Angular',
    github: 'https://github.com/LucBecker/shopping-app',
    demo: 'https://shopping-app-lucbecker.vercel.app/products',
  },
  {
    id: 5, 
    image: IMG3,
    title: 'Testes com JUnit 5 Mockito e Spring Boot (REST APIs)',
    github: 'https://github.com/LucBecker/api-resource',
    demo: 'https://api-resource-production.up.railway.app/',
  },
  {
    id: 6, 
    image: IMG4,
    title: 'Bookstore Frontend',
    github: 'https://github.com/LucBecker/bookstore-frontend',
    demo: 'https://lucbecker.github.io/bookstore-frontend/',
  },
  {
    id: 7, 
    image: IMG3,
    title: 'Bookstore Backend API',
    github: 'https://github.com/LucBecker/bookstore-api',
    demo: 'https://bookstore-api-production-6f66.up.railway.app/category',
  },
  {
    id: 8, 
    image: IMG5,
    title: 'Help-desk Frontend',
    github: 'https://github.com/LucBecker/helpdesk-front',
    demo: 'https://helpdesk-front-becker.vercel.app/login',
  },
  {
    id: 9, 
    image: IMG3,
    title: 'Help-desk Backend API',
    github: 'https://github.com/LucBecker/helpdesk-back',
    demo: 'https://helpdesk-back-production.up.railway.app/',
  },
  {
    id: 10, 
    image: IMG7,
    title: 'Integração da API Spring Boot + OpenAI ChatGPT',
    github: 'https://github.com/LucBecker/springboot-chatgpt',
    demo: '#',
  },
  {
    id: 11, 
    image: IMG6,
    title: 'Spring Boot e React',
    github: 'https://github.com/LucBecker/spring-boot-and-react',
    demo: '#',
  },
  {
    id: 12, 
    image: IMG8,
    title: 'Backstage Demo App',
    github: 'https://github.com/LucBecker/backstage-demo-app',
    demo: '',
  }
] 


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus projetos recentes</h5>
      <h2>Portfólio </h2>

      <div className='container portfolio__container'>
          {
            data.map(({id, image, title, github, demo}) =>{
              return(
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
            <img src={image} alt={title}></img>
            </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
          </article>
              )
            })
          }


      </div>
    </section>
  )
}

export default Portfolio