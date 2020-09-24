import React from 'react';
import './todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentToDoItem: null,
            toDoList: []
        };
    }
    setCurrentToDoItem = (toDoItem) => {
        this.setState({
            currentToDoItem: toDoItem
        });
    };

    saveToDoListItem = (toDoItem) => {
        this.setState({
            toDoList: [...this.state.toDoList, toDoItem]
        });
    };

    crossLine = (event) => {
        const element = event.target;
        element.classList.toggle("crossed-line");
    };

    render() {
        return (
            <div>
                <h1>To Do List</h1>                
                <input onChange={event =>this.setCurrentToDoItem(event.target.value)} />
                <button onClick={() =>this.saveToDoListItem(this.state.currentToDoItem)}>Add Item</button>
                <div>                   
                    {this.state.toDoList.map((item, index) => {
                        return (
                            <p onClick={this.crossLine} key={index}>
                                {item}{" "}
                            </p>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Todo;