// eslint-disable-next-line no-unused-vars
import _React, { useContext, useState } from 'react';
import '../styles/components/ItemAdd.css'
import TaskContext from '../context/taskContext';

function ItemAdd() {
  const [description, setDescription] = useState("");
  const { addTask } = useContext(TaskContext);
  // console.log(addTask);
  const handleAdd = async () => addTask(description);

  return (
    <div className="form">
      <label htmlFor="">
        <input
          type="text"
          value={description}
          onChange={
            ({target: { value }}) => setDescription(value)
          }
        />
        <button
          onClick={handleAdd}
        >
          Add Task!
        </button>
      </label>
    </div>
  )
}

export default ItemAdd
