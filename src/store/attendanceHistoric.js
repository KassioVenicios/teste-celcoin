import { createStore } from 'redux';

const INITIAL_STATE = {
  attendanceHistoric: [
    {
      id: 1,
      icon: 'uil-brain',
      patientName: 'Renata Augusto Ferreira',
      testName: 'TDAH CAB ADHD',
      date: '20/10/2023',
    },
    {
      id: 2,
      icon: 'uil-cell',
      patientName: 'Renata Augusto Ferreira',
      testName: 'Autismo',
      date: '20/09/2023',
    },
    {
      id: 3,
      icon: 'uil-brain',
      patientName: 'Renata Augusto Ferreira',
      testName: 'TDAH CAB ADHD',
      date: '20/10/2023',
    },
    {
      id: 4,
      icon: 'uil-cell',
      patientName: 'Renata Augusto Ferreira',
      testName: 'Autismo',
      date: '20/09/2023',
    },
    {
      id: 5,
      icon: 'uil-brain',
      patientName: 'Renata Augusto Ferreira',
      testName: 'TDAH CAB ADHD',
      date: '20/10/2023',
    },
    {
      id: 6,
      icon: 'uil-cell',
      patientName: 'Renata Augusto Ferreira',
      testName: 'Autismo',
      date: '20/09/2023',
    },
  ],
};

function attendanceHistoric(state = INITIAL_STATE, action) {
  switch(action.type) {
    default: return state;
  }
}

const store = createStore(attendanceHistoric);

export default store;
