import { createStore } from 'redux';

const INITIAL_STATE = {
  info: [
    {
      id: 1,
      name: 'Pacientes ativos',
      icon: 'baseline-person-outline',
      color: '#0057FF',
      data: 26,
      variance: 0.30,
      hoverinfo: {
        data: '268',
        title: 'Pacientes totais',
        dataColor: '#1CBF84',
      },
    },
    {
      id: 2,
      name: 'Testes realizados',
      icon: 'bx-test-tube',
      color: '#0057FF',
      data: 306,
      variance: -0.10,
      hoverinfo: {
        data: '1.265',
        title: 'Testes totais',
        dataColor: '#1CBF84',
      },
    },
    {
      id: 3,
      name: 'Testes concluídos',
      icon: 'bx-test-tube-ok',
      color: '#1CBF84',
      data: 139,
      variance: 0.30,
      hoverinfo: {
        data: '10.550',
        title: 'Testes totais concluídos',
        dataColor: '#1CBF84',
      },
    },
    {
      id: 4 ,
      name: 'Testes cancelados',
      icon: 'bx-test-tube-x',
      color: '#EF0C35',
      data: 11,
      variance: -0.03,
      hoverinfo: {
        data: '618',
        title: 'Testes totais cancelados   ',
        dataColor: '#EB0D35',
      }, 
    },
  ],
};

function generalInfo(state = INITIAL_STATE, action) {
  switch(action.type) {
    default: return state;
  }
}

const store = createStore(generalInfo);

export default store;
