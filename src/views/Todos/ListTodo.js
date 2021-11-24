import React from 'react';
import AddToDo from './AddToDo';
import Color from '../HOC/Color';
import { toast } from 'react-toastify';


class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homeworking' },
            { id: 'todo2', title: 'Making videos' },
            { id:'todo3',title: 'Fixing bugs'},
        ],
        editTodo : {}
    }
    

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos,todo],
        })
        toast.success("Add success")
        
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({listTodos: currentTodos})
    }

    handleEdit = (todo) => {
        this.setState({
            editTodo: todo
        })
    }
    
    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo:editTodoCopy
        })
    }

    handleEdit = (todo) => {
        let { editTodo, listTodos } = this.state;

        let isEmptyObj = Object.keys(editTodo).length === 0;

        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listTodosCopy = [...listTodos];

            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Update todo succeed!")
            return;
        }

        //edit
        this.setState({
            editTodo: todo
        })

    }
    
    render() {

        let { listTodos ,editTodo} = this.state;

        let isEmptyObject = Object.keys(editTodo).length === 0
        console.log("check empty object: ", isEmptyObject);
        return (
            <>
                <div className="list-todo-container">
                    <AddToDo
                        addNewTodo={this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0
                            && listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>      
                                 
                                        {isEmptyObject === true ?
                                            <span>{index + 1}-{item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input value={editTodo.title}
                                                        onChange={(event)=>this.handleOnChangeEditTodo(event)}/>
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>
                                            
                                        }
                                        <button className="edit" onClick={() => this.handleEdit(item)}>
                                            {isEmptyObject === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'}
                                        </button>
                                        <button onClick={()=>this.handleDeleteTodo(item)}>Delete</button>
                                    </div>
                                )
                            })}

                      
                    </div>
                </div> 
            </>
        )
    }
}


export default Color(ListTodo);