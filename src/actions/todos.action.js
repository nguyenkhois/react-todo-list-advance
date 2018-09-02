export const actions = {
    addTask: (item) => ({ type: 'ADD_TASK', task: item }),
    removeTask: (item) => ({ type: 'REMOVE_TASK', task: item }),
    checked: (item) => ({ type: 'CHECKED', task: item }),
    removeCompleted: () => ({ type: 'REMOVE_COMPLETED' })
};
