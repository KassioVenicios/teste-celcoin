import { createStore } from 'redux';

const INITIAL_STATE = {
  mostPerformedTest: {
    name: 'Autismo',
    icon: 'uil-cell',
    data: 13,
  },
};

function mostPerformedTest(state = INITIAL_STATE, action) {
  switch(action.type) {
    default: return state;
  }
}

const store = createStore(mostPerformedTest);

export default store;
