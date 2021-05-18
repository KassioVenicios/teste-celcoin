import { createStore } from 'redux';

const INITIAL_STATE = {
  menus: [
    { id: 1, name: 'Dashboard', icon: 'home-outlined', clickable: true, active: true },
    { id: 2, name: 'Pacientes', icon: 'product-downloadable', clickable: true },
    { id: 3, name: 'Testes', icon: 'product-downloadable', clickable: false },
    { id: 4, name: 'Configurações', icon: 'product-downloadable', clickable: false },
  ],
};

const changeActivedMenu = (id, menus) => menus.map(item => {
  item.id === id ? item.active = true : item.active = false;
  return item;
});

function menus(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'CHANGE_ACTIVED_MENU':
        return { ...state, menus: changeActivedMenu(action.id, state.menus)};
    default: return state;
  }
}

const store = createStore(menus);

export default store;
