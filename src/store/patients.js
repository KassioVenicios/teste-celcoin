import { createStore } from 'redux';

const INITIAL_STATE = {
  patients: [
    {
      id: 1,
      patientName: 'Renata Augusto Ferreira',
      diagnostic: 'TDAH CAB ADHD, Autismo',
      realizedTests: 3,
      canceledTests: 1,
      pendingTests: 1,
    },
    {
      id: 2,
      patientName: 'Leandro Motta Braga',
      diagnostic: 'TDAH CAB ADHD, Autismo',
      realizedTests: 6,
      canceledTests: 0,
      pendingTests: 50,
    },
    {
      id: 3,
      patientName: 'Kuromi Naori Kagasawa',
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
