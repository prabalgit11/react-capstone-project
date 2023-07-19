import { useEffect, useState } from "react"
import newImage from '../../assets/image 15.png'

const News = () => {
    const [news, setNews] = useState('')
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    useEffect(() => {
        const fetchNews = async () => {
            await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-02-09&sortBy=publishedAt&apiKey=4ef9b38002184be3bf2ccb7b066196af")
                .then(async (data) => await data.json()).then((res) => setNews(res.articles[0]))
        }
        fetchNews();
    }, [])
    useEffect(() => {
        const date = new Date
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        setTime(strTime)
    })
    useEffect(() => {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '-' + mm + '-' + yyyy;
        setDate(formattedToday)
    })
    return (
        <div style={{ height: "90vh", width: "30vw", position: "relative", borderRadius: "12px", padding: "6px" }}>
            <img src={newImage} style={{ height: "50vh", borderTopRightRadius: "12px", width: "30vw" }} />
            <div style={{ height: "35vh", borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px", width: "30vw", background: "white", fontSize: "1rem", padding: "24px", fontWeight: "600" }}>
                In the years since human beings first reached the summit of Mount Everest in 1953, climbing the world highest mountain has changed dramatically. Today, hundreds of mountaineers manage the feat each year thanks to improvements in knowledge, technology, and the significant infrastructure provided by commercially guided expeditions that provide a veritable highway up the mountain for those willing to accept both the......
            </div>

            <div style={{ position: "absolute", width: "30vw", height: "20vh", background: "#000000BD", top: "31vh", padding: "24px", boxSizing: "border-box" }}>
                <p style={{ color: "white", fontSize: "2rem", marginBottom: "13px", fontWeight: "900" }}>Want to climb Mount Everest?</p>
                <span style={{ color: "white", fontSize: "1.3rem", marginRight: "10px", }}>{date}</span>
                <span style={{ color: "white", fontSize: "1.3rem", marginRight: "10px", }}>{time}</span>
            </div>
        </div>
    )
}

export default News