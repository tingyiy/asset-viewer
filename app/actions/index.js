export function toggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export function deleteTodo(id) {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export function addTodo(todo) {
    return {
        type: 'ADD_TODO',
        todo
    }
}