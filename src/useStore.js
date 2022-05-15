import create from 'zustand';
import { nanoid } from 'nanoid';

const useStore = create(set => {
  return {
    rooms: [
      { name: 'Kitchen', id: nanoid(), assignee: null, status: false },
      { name: 'Bathroom', id: nanoid(), asignee: false },
      { name: 'Hallway', id: nanoid(), asignee: false },
      { name: 'Livingroom', id: nanoid(), asignee: false },
    ],

    flatmates: [
      {
        name: 'Maria',
        id: nanoid(),
        photoProfile: `https://randomuser.me/api/portraits/women/4.jpg`,
      },
      {
        name: 'Eugen',
        id: nanoid(),
        photoProfile: `https://randomuser.me/api/portraits/women/56.jpg`,
      },
      {
        name: 'Daria',
        id: nanoid(),
        photoProfile: `https://randomuser.me/api/portraits/women/56.jpg`,
      },
      {
        name: 'Flo',
        id: nanoid(),
        photoProfile: `https://randomuser.me/api/portraits/women/56.jpg`,
      },
    ],

    addTodo: name => {
      set(state => {
        return { todos: [...state.todos, { name, id: nanoid() }] };
      });
    },
    deleteTodo: id => {
      set(state => {
        return { todos: state.todos.filter(todo => todo.id !== id) };
      });
    },
    checkTodo: id => {
      set(state => {
        return {
          todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
          ),
        };
      });
    },
  };
});

export default useStore;
