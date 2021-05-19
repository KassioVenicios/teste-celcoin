import { createStore } from 'redux';

const INITIAL_STATE = {
  menus: [
    {
      id: 1,
      to: '/',
      name: 'Dashboard',
      icon: 'home-outlined',
      clickable: true,
      active: true,
    },
    {
      id: 2,
      to: '/pacientes',
      name: 'Pacientes',
      icon: 'product-downloadable',
      clickable: true,
      active: false,
    },
    {
      id: 3,
      to: '/testes',
      name: 'Testes',
      icon: 'product-downloadable',
      clickable: false,
      active: false,
    },
    {
      id: 4,
      to: '/config',
      name: 'Configurações',
      icon: 'product-downloadable',
      clickable: false,
      active: false,
    },
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
