import { createStore } from 'redux';
import person1 from '../assets/images/person1.png';
import person4 from '../assets/images/person4.png';
import person5 from '../assets/images/person5.png';

const INITIAL_STATE = {
  patients: [
    {
      id: 1,
      name: 'Renata Augusto Ferreira',
      photo: person1,
      diagnostic: 'TDAH CAB ADHD, Autismo',
      realizedTests: 3,
      canceledTests: 1,
      pendingTests: 1,
    },
    {
      id: 2,
      name: 'Leandro Motta Braga',
      photo: person4,
      diagnostic: 'TDAH CAB ADHD, Autismo',
      realizedTests: 6,
      canceledTests: 0,
      pendingTests: 50,
    },
    {
      id: 3,
      name: 'Kuromi Naori Kagasawa',
      photo: person5,
      diagnostic: 'TDAH CAB ADHD, Autismo',
      realizedTests: 22,
      canceledTests: 0,
      pendingTests: 2,
    },
  ],
};

function patients(state = INITIAL_STATE, action) {
  switch(action.type) {
    default: return state;
  }
}

const store = createStore(patients);

export default store;
