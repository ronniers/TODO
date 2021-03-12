import {useState} from 'react'

import {TextField, IconButton} from '@material-ui/core'
import {AddBox} from '@material-ui/icons'

const Fields = (props) => {
    const [task, setTask] = useState('');

    const updateTodoList = e => {
        e.preventDefault();
        if(task) {
            props.setTodoList([...props.todoList, {
                todo: task,
                done: false
            }]);
            setTask('');
        }
    }

    return (
        <div>
            <TextField name="task"
                onChange={e => { setTask(e.target.value) } }
                value={task} />
            <IconButton onClick={updateTodoList} color="primary" aria-label="Add Task" component="span">
                <AddBox />
            </IconButton>
        </div>
    );
}

export default Fields;