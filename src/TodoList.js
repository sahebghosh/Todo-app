import React from 'react'
import { white } from 'color-name';

const TodoList = (props) => {
    const { mytodo, deleteTask } = props;
    const todotaskList = mytodo.length ? (
        mytodo.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <div className="row">
                        <div className="col-md-8">
                            <p>{todo.content}</p>
                        </div>
                        <div className="col-md-4">
                            <a class="waves-effect waves-light btn-small red" onClick={() => { deleteTask(todo.id) }}>Delete</a>
                        </div>
                    </div>
                </div >
            )
        })
    ) : (
            <div>
                <p className="center" style={{ padding: 20 }}>You have no more task to do!!!!</p>
            </div>

        )
    return (
        <div className="collection">
            {todotaskList}
        </div>

    )
}

export default TodoList