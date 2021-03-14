import {ListItem, Checkbox, FormControlLabel} from '@material-ui/core'

const Todo = (props) => {
    const handleCheckBox = e => {
        props.setTodoList(prevState => {
            return prevState.map((todo, idx) => {
                if(idx === props.id) {
                    todo.done = !todo.done;
                }
                return todo;
            });
        });
    }
    return (
        <ListItem
            style={ props.todo.done ? { textDecoration: 'line-through', color: '#898989' } : {}}
            className='todo-item' >
            <FormControlLabel control={
                    <Checkbox
                        color="primary"
                        inputProps={{ 'aria-label': props.todo.todo }}
                        onChange={ handleCheckBox }
                        checked={ props.todo.done }
                    />
                }
                label={props.todo.todo}
            />
        </ListItem>
    );
}

export default Todo;