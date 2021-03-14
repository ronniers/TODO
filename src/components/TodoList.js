import List from '@material-ui/core/List'

// Components
import Todo from './Todo'

const TodoList = props => {
    const todos = props.todoList.filter(d => {
        if(props.display === 2) {
            return d.done;
        } else if(props.display === 3) {
            return !d.done;
        }
        return true;
    }).map((todo, idx) => {
        return (<Todo key={idx} id={idx} todo={todo} setTodoList={props.setTodoList} />);
    });

    return (
        <List>
            {todos}
        </List>
    );
}

export default TodoList;