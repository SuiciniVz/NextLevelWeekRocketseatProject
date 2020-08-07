import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItens from '../../components/TeacherItens';
import Input from '../../components/input';
import Select from '../../components/Select';


import './style.css'

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">

          <Select 
              name="subject" 
              label="Matéria"
              options={[
                {value: 'Geometria', label:'Geometria'},
                {value: 'Algebra', label:'Algebra'},
                {value: 'Gramática', label:'Gramática'},
                {value: 'Literatura', label:'Literatura'},
                {value: 'Redação', label:'Redação'},
                {value: 'Geografia', label:'Geografia'},
                {value: 'Historia', label:'Historia'},
                {value: 'Programação', label:'Programação'},
                {value: 'Biologia', label:'Biologia'},
                {value: 'Química', label:'Química'},
                {value: 'Física', label:'Física'},
              ]}
            />
          
          <Select 
              name="week_day" 
              label="Dia da semana"
              options={[
                {value: '0', label:'Domingo'},
                {value: '1', label:'Segunda-feira'},
                {value: '2', label:'Terça-feira'},
                {value: '3', label:'Quarta-feira'},
                {value: '4', label:'Quinta-feira'},
                {value: '5', label:'Sexta-feira'},
                {value: '6', label:'Sábado'},
              ]}
            />
          <Input name="time" label="Hora" type="time"></Input>

        </form>
      </PageHeader>

      <main>
        <TeacherItens />
        <TeacherItens />
        <TeacherItens />
        <TeacherItens />
        <TeacherItens />
        <TeacherItens />
      </main>

    </div>
  )
}

export default TeacherList