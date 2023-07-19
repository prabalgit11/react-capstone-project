import Info from '../components/Browse/info'
import Weather from '../components/Browse/Weather'
import Notes from '../components/Browse/Notes'
import News from '../components/Browse/News'
import Timer from '../components/Browse/Timer'
import { useNavigate } from 'react-router-dom'
const Browse = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/movies')
    }
    return (
        <div style={{ height: "100vh", width: "100vw", background: "black", paddingLeft: "3vw", paddingTop: "3vh", boxSizing: "border-box" }}>
            <div style={{ display: "flex", gap: "20px" }}>
                <div>
                    <Info />
                    <Weather />
                    <Timer />
                </div>
                <div>
                    <Notes />
                </div>
                <div>
                    <News />
                </div>
            </div>
            <button style={{ position: "absolute", bottom: "3vh", right: "9vw", background: "green", border: "none", color: "white", padding: "12px", borderRadius: "20px", fontSize: "1rem", fontWeight: "600" }} onClick={handleClick}>Next Page</button>
        </div>
    )
}

export default Browse