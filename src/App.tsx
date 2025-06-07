import { useState, type JSX } from "react"
import { Todos } from "./components/Todos"
import type { TodoId, Todo as TodoType } from "./types"

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

  return (
    <div className="todoapp">
      <Todos 
      onToggleCompleteTodo={handleComplete}
      onRemoveTodo={handleRemove}
      todos={todos} />
    </div>
  )
}

export default App
