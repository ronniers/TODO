import {ListItem, Checkbox, FormControlLabel} from '@material-ui/core'

const Todo = (props) => {
    const handleCheckBox = (e) => {
        props.setTodoList(prevState => {
            return prevState.map((todo, idx) => {
                if(idx === props.id) {
                    todo.done = true;
                }
                return todo;
            });
        });    
    }
    return (
        <ListItem>
            <FormControlLabel control={
                    <Checkbox
                        color="primary"
                        inputProps={{ 'aria-label': props.todo.todo }}
                        onChange={handleCheckBox}
                    />
                }
                className={ props.todo.done === true ? 'task-done' : '' }
                label={props.todo.todo}
                onChange={handleCheckBox}
            />
        </ListItem>
    );
}

export default Todo;