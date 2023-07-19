import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './Chips.css'
const Chips = ({ id, setCategories, categories }) => {
    const handleClick = () => {
        const index = categories.indexOf(id)
        categories.splice(index, 1)
        setCategories([...categories])
    }
    return (
        <div className="main">
            {categories.map((category) => (
                <button className="choice" onClick={handleClick}>{category}<span><FontAwesomeIcon icon={faTimes} /></span></button>
            ))}
        </div>
    )
}

export default Chips