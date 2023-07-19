import './Category.css'
import action from '../../assets/action.png'
import drama from '../../assets/drama.png'
import fantasy from '../../assets/fantasy.png'
import fiction from '../../assets/fiction.png'
import horror from '../../assets/horror.png'
import music from '../../assets/music.png'
import romance from '../../assets/romance.png'
import thriller from '../../assets/thriller.png'
import western from '../../assets/western.png'
import Chips from './Chips'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'


const genres = [
    {
        id: "Action",
        color: "#FF5209",
        image: <img style={{ width: "160px", height: "95px", marginTop: "16%" }} src={action} alt="action" />
    },

    {
        id: "Drama",
        color: "#D7A4FF",
        image: <img style={{ width: "160px", height: "95px", marginTop: "16%" }} src={drama} alt="drama" />
    },

    {
        id: "Romance",
        color: "#11B800",
        image: <img style={{ width: "160px", height: "95px", marginTop: "16%" }} src={romance} alt="romance" />
    },

    {
        id: "Thriller",
        color: "#84C2FF",
        image: <img style={{ width: "160px", height: "95px", marginTop: "16%" }} src={thriller} alt="thriller" />
    },

    {
        id: "Western",
        color: "#912500",
        image: <img style={{ width: "160px", height: "95px", marginTop: "16%" }} src={western} alt="wesgtern" />
    },

    {
        id: "Horror",
        color: "#7358FF",
        image: <img style={{ width: "160px", height: "95px", marginTop: "16%" }} src={horror} alt="horror" />
    },

    {
        id: "Fantasy",
        color: " #FF4ADE",
        image: <img style={{ width: "160px", height: "95px", marginTop: "16%" }} src={fantasy} alt="fantasy" />
    },

    {
        id: "Music",
        color: "#E61E32",
        image: <img style={{ width: "160px", height: "95px", marginTop: "16%" }} src={music} alt="music" />
    },

    {
        id: "Fiction",
        color: "#6CD061",
        image: <img style={{ width: "160px", height: "95px", marginTop: "16%" }} src={fiction} alt="fiction" />
    },
]
const Category = () => {
    const [categories, setCategories] = useState([])
    const [lengthError, setLengthError] = useState(0)
    const navigate = useNavigate()
    const handleSignUp = () => {
        if (categories.length < 3) {
            setLengthError(true)
            return
        } else {
            setLengthError(0)
            window.localStorage.setItem("genres", JSON.stringify([...categories]))
            navigate("/browse")
        }
    }
    return (
        <div className='body'>
            <div className='left'>
                <p className='supreHeading'>Super app</p>
                <p className='subHeading'>Choose your entertainment category</p>
                <div class="alert">
                    <Chips categories={categories} color={"green"} setCategories={setCategories} />
                    {lengthError ? <><p class='error'><FontAwesomeIcon icon={faTriangleExclamation} /> Minimum 3 category required</p></> : <></>}
                </div>
            </div>
            <div className='right'>
                {genres.map((data, idx) =>
                    <Block data={data} idx={idx} categories={categories} setCategories={setCategories} />
                )}
            </div>
            <button className='next' onClick={handleSignUp}>Next Page</button>
        </div>
    )
}


const Block = ({ data, idx, setCategories, categories }) => {
    const [selected, setSelected] = useState()
    const handleClick = (e) => {
        if (categories.includes(data.id)) {
            const index = categories.indexOf(data.id)
            categories.splice(index, 1)
            setCategories([...categories])
        }
        else {
            setCategories([...categories, data.id])
        }
        setSelected(!selected)
    }
    useEffect(() => {
        setSelected(categories.includes(data.id) === true)
    })
    return (
        <div data={data} onClick={(e) => handleClick(e)} key={idx} style={{ background: data['color'], color: "white", padding: "16px", borderRadius: "12px", }}>
            <p style={{ marginBottom: "4px", fontSize: "18px" }}>{data.id}</p>
            {data.image}
        </div>
    )
}
export default Category