import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItens, { Teacher } from '../../components/TeacherItems';
import Input from '../../components/input';
import Select from '../../components/Select';

import api from '../../services/api';

import './style.css'

function TeacherList() {

  const [teachers , setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  async function searchTeacher (e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })
    setTeachers(response.data);

  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">


        <form id="search-teachers" onSubmit={searchTeacher}>

          <Select 
              name="subject" 
              label="Matéria"
              value={subject}
              onChange={e => setSubject(e.target.value)}
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
            value={week_day}
            onChange={e => setWeek_day(e.target.value)}
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

          <Input 
            name="time" 
            label="Hora" 
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
          />

            <button type="submit">
              Buscar
            </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItens key={teacher.id} teacher={teacher}/>
        })}
      </main>

    </div>
  )
}

export default TeacherList