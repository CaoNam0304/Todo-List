import './headerTodo.scss'

HeaderTodo.propTypes = {}

interface HeaderTodo {
  handleOpenModal: (string: string) => void
  handleFillter: (element: string) => void
  handleValueInput: (event: React.ChangeEvent<HTMLInputElement>) => void
  deleteAll: () => void
}

function HeaderTodo(props: HeaderTodo) {
  const { handleOpenModal, handleFillter, handleValueInput, deleteAll } = props

  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  return (
    <div>
      <h1 onClick={() => handleOpenModal('add')} className='add-todo'>
        +
      </h1>
      <form onSubmit={handleForm} className='search-todo' action=''>
        <input onChange={handleValueInput} placeholder='Search todo list...' type='text' />
      </form>
      <div className='category'>
        <div className='category-name'>
          <p onClick={() => handleFillter('')}>All</p>
          <p onClick={() => handleFillter('Pending')}>Pending</p>
          <p onClick={() => handleFillter('Completed')}>Completed</p>
        </div>
        <div onClick={deleteAll} className='clear-all'>
          Clear All
        </div>
      </div>
    </div>
  )
}

export default HeaderTodo
