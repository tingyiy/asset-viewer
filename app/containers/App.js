import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo, deleteTodo, addTodo } from '../actions';
import Todos from '../components/Todos';

const mapStateToProps = (state) => {
    return {
        todos: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => dispatch(toggleTodo(id)),
        onDeleteClick: (id) => dispatch(deleteTodo(id)),
        onAddClick: (todo) => dispatch(addTodo(todo))
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(Todos);
