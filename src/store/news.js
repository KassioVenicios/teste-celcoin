import { createStore } from 'redux';
import person1 from '../assets/images/person1.png';
import person2 from '../assets/images/person2.png';
import person3 from '../assets/images/person3.png';

const INITIAL_STATE = {
  news: [
    {
      id: 1,
      patientPhoto: person1,
      patientName: 'Renata Augusto Ferreira',
      title: 'Completou o teste:',
      titleDescription: 'TDAH CAB ADHD',
      date: '20/10/2023',
      isCompleted: true,
    },
    {
      id: 2,
      patientPhoto: person2,
      patientName: 'Carlos Nobrega Baccio',
      title: 'Cancelou o teste:',
      titleDescription: 'TDAH CAB ADHD',
      date: '20/10/2023',
      isCompleted: false,
    },
    {
      id: 3,
      patientPhoto: person3,
      patientName: 'Suelton A. Mellis',
      title: 'Cancelou o teste:',
      titleDescription: 'TDAH CAB ADHD',
      date: '20/10/2023',
      isCompleted: false,
    },
  ],
};

function news(state = INITIAL_STATE, action) {
  switch(action.type) {
    default: return state;
  }
}

const store = createStore(news);

export default store;
