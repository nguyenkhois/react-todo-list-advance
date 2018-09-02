import { LocalStorageMethods } from '../lib/main-lib';

export const todosReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TASK':
            const stateAfterAdd = {
                ...state,
                todos: state.todos.concat(action.task)
            };
            LocalStorageMethods.store('gToDos', stateAfterAdd);
            return stateAfterAdd;

        case 'REMOVE_TASK':
            const itemIndexForRemove = state.todos.findIndex((item) => item.id === action.task.id);
            const stateAfterRemove = {
                ...state,
                todos: state.todos.map((item, index) => index === itemIndexForRemove ? { ...item, isDeleted: true } : item)
            };

            LocalStorageMethods.store('gToDos', stateAfterRemove);
            return stateAfterRemove;

        case 'CHECKED':
            const itemIndexForChecked = state.todos.findIndex((item) => item.id === action.task.id);
            const stateAfterChecked = {
                ...state,
                todos: state.todos.map((item, index) => index === itemIndexForChecked ? { ...item, isDone: !item.isDone } : item)
            };
            LocalStorageMethods.store('gToDos', stateAfterChecked);
            return stateAfterChecked;

        case 'REMOVE_COMPLETED':
            const stateAfterRemoveCompleted = {
                ...state,
                todos: state.todos.map((item) => item.isDone ? { ...item, isDeleted: true } : item)
            };
            LocalStorageMethods.store('gToDos', stateAfterRemoveCompleted);
            return stateAfterRemoveCompleted;

        case 'REMOVE_DELETED':
            const stateAfterRemoveDeleted = { 
                ...state, 
                todos: state.todos.filter((item) => !item.isDeleted)
            };
            LocalStorageMethods.store('gToDos', stateAfterRemoveDeleted);
            return stateAfterRemoveDeleted;
        default:
            LocalStorageMethods.store('gToDos', state);
            return state;
    }
};
