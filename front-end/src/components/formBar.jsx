import '../styles/components/formBar.css'
function FormBar() {
  return (
    <div className="form">
      <label htmlFor="">
        <input type="text" />
        <button>Add Task!</button>
      </label>
    </div>
  )
}

export default FormBar
