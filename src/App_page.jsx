import { useState } from 'react'
import woman from '/imgs/woman.png'
import feedback from '/imgs/container-feedback.png'
import premiado from '/imgs/premiado.png'
import analise from '/imgs/analise.png'
import qualificado from '/imgs/qualificado.png'
import melhores from '/imgs/melhores.png'
import free from '/imgs/free_antivirus.png'
import secure from '/imgs/secure.png'
import vector from '/imgs/vector.png'
import wifisecure from '/imgs/wifisecure.png'
import woman_in_pc from '/imgs/woman-in-pc.png'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  function handleClickDownload(){
    window.location.href = './domestico'
  }
  return (
    <>
      <Header/>
      <div className="container">
        <div className="part-1">
            <h1>Um anti virus que protege sua navegação de graça</h1>
            <p>Um anti virus que protege sua navegação com as melhores técnicas de segurança cibernética da atualidade, temos as melhores desenvolvedores da net.</p>
            <button onClick={handleClickDownload}>
              BAIXAR DE GRAÇA
            </button>
          <img src={feedback} alt="" />
        </div>
        <div className="content-woman">
          <img src={woman} alt="" />
        </div>
      </div>
      <div className="vantagens">
        <button>
          <img src={premiado} alt="" />
          ANTIVIRUS PREMIADO
        </button>
        <button>
          <img src={analise} alt="" />
          ANÁLISE DE VÍRUS INTELIGENTE
        </button>
        <button>
          <img src={qualificado} alt="" />
          ANTI VÍRUS QUALIFICADO
        </button>
        <button>
          <img src={melhores} alt="" />
          TEMOS OS MELHORES DESENVOLVEDORES
        </button>
      </div>
      <div className="free-antivirus">
        <button>
          <img src={free} alt="" srcset="" />
          Free AntiVírus
        </button>
        <h1>Obtenha um AntiVírus Gratuito</h1>
        <p>Somos mais que um AntiVírus, somos a segurança da sua navegação, temos ferramentas especializadas na sua segurança.</p>
      </div>
      <div className="vantagens2">
        <button>
          <img src={secure} alt="" />
          <h3>6 camadas de segurança </h3>
          <p>A instalação do  Antivirus é rápida e, depois de feita, o aplicativo funciona imperceptivelmente em segundo plano, protegendo você contra vírus e outras ameaças em tempo real, 24 horas por dia.</p>
        </button>
        <button>
          <img src={vector} alt="" />
          <h3>Fácil de instalar e usar</h3>
          <p>A instalação do  Antivirus é rápida e, depois de feita, o aplicativo funciona imperceptivelmente em segundo plano, protegendo você contra vírus e outras ameaças em tempo real, 24 horas por dia.</p>
        </button>
        <button>
          <img src={wifisecure} alt="" />
          <h3>Segurança de rede Wi-Fi</h3>
          <p>A instalação do  Antivirus é rápida e, depois de feita, o aplicativo funciona imperceptivelmente em segundo plano, protegendo você contra vírus e outras ameaças em tempo real, 24 horas por dia.</p>
        </button>
        <button>
          <img src={vector} alt="" />
          <h3>Proteja-se contra ataques</h3>
          <p>A instalação do  Antivirus é rápida e, depois de feita, o aplicativo funciona imperceptivelmente em segundo plano, protegendo você contra vírus e outras ameaças em tempo real, 24 horas por dia.</p>
        </button>
      </div>
      <div className="download">
        <button onClick={handleClickDownload}><strong>Baixar grátis</strong></button>
        <button><strong>Saiba mais</strong></button>
      </div>
      <div className="more-info">
        <img src={woman_in_pc} alt="" />
          <div className="more">
            <h2>É muito fácil de instalar - a troca para o AntiVírus leva poucos segundos</h2>
            <span>Você pode começar a usar o antivírus premiado agora mesmo. Sua instalação é fácil e rápida, dando a você toda a proteção necessária para viver a sua vida online com segurança. E ele é totalmente grátis - então faça um teste agora mesmo.</span>
          </div>
          
      </div>
      <div className="comments">
      
        <div className="comment">
          <p>“A interface de usuário do software é incrível! Trabalho bem feito e em constante evolução. Só tenho elogios.”</p>
          <strong>Ryan R.</strong>
          <div className="stars">
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
          </div>
        </div>
        <div className="comment">
          <p>“A interface de usuário do software é incrível! Trabalho bem feito e em constante evolução. Só tenho elogios.”</p>
          <strong>Ryan R.</strong>
          <div className="stars">
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
          </div>
        </div>
        <div className="comment">
          <p>“A interface de usuário do software é incrível! Trabalho bem feito e em constante evolução. Só tenho elogios.”</p>
          <strong>Ryan R.</strong>
          <div className="stars">
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
          </div>
        </div>
        <div className="comment">
          <p>“A interface de usuário do software é incrível! Trabalho bem feito e em constante evolução. Só tenho elogios.”</p>
          <strong>Ryan R.</strong>
          <div className="stars">
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
