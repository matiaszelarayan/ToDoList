import { type TodoId, type TodoTitle, type Todo as Todotype } from "../types"

interface Props extends Todotype {
    onToggleCompleteTodo: ({id, completed}: Pick<Todotype, "id" | "completed">) => void
    onRemoveTodo: ({id}: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }) => {
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleCompleteTodo({
            id,
            completed: event.target.checked
        })
    } 
    return (
        <div className="view">
            <input
                className="toggle"
                checked={completed}
                type="checkbox"
                onChange={handleChangeCheckbox}
            />
            <label>{title}</label>
            <button 
                className="destroy" 
                onClick={() => {
                    onRemoveTodo({id})
                }}>
            </button>
        </div>
    )}