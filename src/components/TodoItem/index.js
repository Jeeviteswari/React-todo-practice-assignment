import './index.css'

const TodoItem = props => {
  const {todoDetails} = props
  const {technology} = todoDetails

  return (
    <>
      <li className="list-container mb-5">
        <input className="mr-5" type="checkbox" id="checkboxId" />
        <label className="label-name" htmlFor="checkboxId">
          {technology}
        </label>
      </li>
      <hr className="hr-line" />
    </>
  )
}

export default TodoItem
