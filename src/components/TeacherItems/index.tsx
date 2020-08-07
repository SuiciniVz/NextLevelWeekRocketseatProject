import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: string;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemsProps<> {
  teacher: Teacher;
}

const TeacherList: React.FC<TeacherItemsProps>= ({ teacher }) => {
  return (
    <article className="teacher-item">
      <header>

        <img 
          src={teacher.avatar}
          alt="Avatar"
        />

        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>

      </header>
      
      <p>
        {teacher.bio}
      </p>

      <footer>

        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
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