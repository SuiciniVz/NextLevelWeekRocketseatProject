import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

function TeacherList() {
  return (
    <article className="teacher-item">
      <header>

        <img 
          src="https://avatars1.githubusercontent.com/u/50074236?s=460&v=4" 
          alt="Lucas Vinicius"
        />

        <div>
          <strong>Lucas Vinicius</strong>
          <span>Matemático</span>
        </div>

      </header>
      <p>
        Especialista em desenhar perfeitamente uma função de 1° grau.
        <br/><br/>
        Dez de criança ja gostava muito de desenhar retas perfeitas com uma régua e acabei me aperfeiçoando na arte de criar retas em um plano cartesiano. 
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 61,05</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em contado
        </button>
      </footer>
    </article>
  );
}

export default TeacherList;