import { Formik, Form, ErrorMessage, Field } from "formik"
import { useEffect, useState } from "react"

export default function ToDoList() {

    const [isEdit, editFieldStatus] = useState(-1)

    const [todoList, getTodoList] = useState(
        [])
    useEffect(() => {
        getTodoList([{ id: 1, title: 'Wakeup at 8.00', isCompleted: false },
        { id: 2, title: 'Freshup', isCompleted: false },
        { id: 3, title: 'Eating breakfast', isCompleted: false },
        { id: 4, title: 'Coming to office', isCompleted: false }])
    }, [])

    function changeStatus(event, id) {
        let selectedTodoIndex = todoList.findIndex((todo) => todo.id == id)
        todoList[selectedTodoIndex]['isCompleted'] = event.target.checked
        getTodoList([...todoList])
    }

    function updateTitle(event, task) {
        const { name, value } = event.target
        const editData = todoList.map((todo) =>
            todo.id === task.id && name ? { ...todo, "title": value } : todo
        )
        getTodoList(editData)
    }

    function saveUpdatedTodo() {
        editFieldStatus(-1)
        getTodoList(todoList)
    }

    function editTodo(id) {
        editFieldStatus(id)
    }

    function deleteTodo(id) {
        let selectedTodoIndex = todoList.findIndex((todo) => todo.id == id)
        if (selectedTodoIndex != -1) {
            todoList.splice(selectedTodoIndex, 1)
            getTodoList([...todoList])
        }
    }

    return (
        <div className="ps-5">
            <h3>Todo List</h3>
            <div className="row w-100">
                <Formik
                    initialValues={{ title: '' }}

                    onSubmit={(values) => {
                        let maxValue = Number.MIN_VALUE;
                        for (let i = 0; i < todoList.length; i++) {
                            if (todoList[i].id > maxValue) {
                                maxValue = todoList[i].id;
                            }
                        }
                        let newTodo = { id: maxValue + 1, title: values.title, isCompleted: false }
                        getTodoList([...todoList, newTodo])
                    }}

                    validate={(values) => {
                        const errors = {}
                        if (!values.title)
                            errors.title = '* Title is required'
                        return errors;
                    }}
                >
                    {() => (
                        <Form className="d-flex align-items-start">
                            <div>
                                <Field className="mb-2 rounded" style={{ width: '42.8vw' }}
                                    type="text"
                                    name="title"
                                    placeholder="Enter your title"
                                />
                                <ErrorMessage className="text-danger" name="title" component="div" />
                            </div>
                            <button type="submit" className="btn btn-primary py-0 rounded ms-2" >
                                Add
                            </button>
                        </Form>
                    )}
                </Formik>
                <div className="row w-50 ps-4 mt-3">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Is Completed</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todoList.map(task => (
                                <tr key={task.id}>
                                    <td>{task.id}</td>
                                    <td>
                                        {!(isEdit == task.id) && task.title}
                                        {isEdit == task.id && <input type="text" name="title" value={task.title} onChange={(e) => updateTitle(e, task)} />}
                                    </td>
                                    <td>
                                        <input className="me-1" type="checkbox" onChange={(event) => changeStatus(event, task.id)} />
                                        {task.isCompleted ? 'Yes' : 'No'}
                                    </td>
                                    <td>
                                        {isEdit == task.id && <button className="btn btn-success py-0 me-2" onClick={saveUpdatedTodo}>Update</button>}
                                        {!(isEdit == task.id) && <button className="btn btn-secondary py-0 me-2" onClick={() => editTodo(task.id)}>Edit</button>}
                                        <button className="btn btn-danger py-0" onClick={() => deleteTodo(task.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}