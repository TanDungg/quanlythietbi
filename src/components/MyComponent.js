import { useState } from "react";

const MyComponent = () => {
    const [newTodo, setNewTodo] = useState("");
    const [listTodo, setListTodo] = useState([
        { id: 1, value: 'Làm tại Thaco' },
        { id: 2, value: 'Làm tại nhà' }
    ]);
    const [editTodo, setEditTodo] = useState(null);

    const handleChangeInput = (event) => {
        setNewTodo(event.target.value);
    };

    const handleAddTodo = () => {
        alert('Thêm thành công');
        const newId = listTodo.length > 0 ? listTodo[listTodo.length - 1].id + 1 : 1;
        setListTodo([...listTodo, { id: newId, value: newTodo }]);
        setNewTodo("");
    };

    const handleDeleteTodo = (todoId) => {
        const updatedList = listTodo.filter((todo) => todo.id !== todoId);
        setListTodo(updatedList);
        alert('Xóa thành công ' + todoId);
    };

    const handleEditTodo = (todoId) => {
        const todo = listTodo.find((todo) => todo.id === todoId);
        setEditTodo(todo);
        setNewTodo(todo.value);
    };

    const handleUpdateTodo = () => {
        const updatedList = listTodo.map((todo) => {
            if (todo.id === editTodo.id) {
                return { ...todo, value: newTodo };
            }
            return todo;
        });
        setListTodo(updatedList);
        setEditTodo(null);
        setNewTodo("");
        alert('Cập nhật thành công');
    };

    return (
        <div>
            <h1 className="title">To do list</h1>
            <table className="todo-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Value</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listTodo.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.value}</td>
                            <td>
                                <button className="edit-btn" onClick={() => handleEditTodo(todo.id)}>
                                    Sửa
                                </button>
                                <button className="delete-btn" onClick={() => handleDeleteTodo(todo.id)}>
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <div>My to do = {newTodo}</div>
            {editTodo && (
                <div>
                    <input type="text" value={newTodo} onChange={handleChangeInput} />
                    <button className="update-btn" onClick={handleUpdateTodo}>
                        Cập nhật
                    </button>
                </div>
            )}
            {!editTodo && (
                <div>
                    <input type="text" onChange={handleChangeInput} />
                    <button className="add-btn" onClick={handleAddTodo}>
                        Thêm
                    </button>
                </div>
            )}
        </div>
    );
};

export default MyComponent;
