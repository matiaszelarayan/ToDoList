import { type TodoId, type TodoTitle, type Todo as Todotype } from "../types"

interface Props extends Todotype {
    onRemoveTodo: ({id}: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo }) => {
    return (
        <div className="view">
            <input
                className="toggle"
                checked={completed}
                type="checkbox"
                onChange={() => {}}
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