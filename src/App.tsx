import { useState, type JSX } from "react"
import { Todos } from "./components/Todos"
import { type FilterValue, type TodoId, type Todo as TodoType } from "./types"
import { TODO_FILTERS } from "./consts"
import { Footer } from "./components/Footer"

const mockTodos = [
  {
    id: "1",
    title: 'Learn React',
    completed: true
  },
  {
    id: "2",
    title: 'Build a Todo App',
    completed: false
  },
  {
    id: "3",
    title: 'Deploy the App',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({id}: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleComplete = (
    {id, completed}: Pick<TodoType, "id" | "completed">
  ): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, 
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className="todoapp">
      <Todos 
      onToggleCompleteTodo={handleComplete}
      onRemoveTodo={handleRemove}
      todos={filteredTodos} 
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={() => {}}
        handleFilterChange={handleFilterChange}
        />
    </div>
  )
}

export default App
