import { Alert, Container } from 'react-bootstrap'
import Weather from './Weather'
import { useState } from 'react'
import GetWeather from './../utils/GetWeather';


const Main = () => {
    const [city, setCity] = useState("")
    const [showWeather, setShowWeather] = useState(false)
    // const [newCity, setNewCity] = useState(false)
    const [weather, setWeather] = useState([])
    const [err, setErr] = useState({ isErr: false, msg: "" })

    const getWeather = async (city) => {
        try {
            let resp = await GetWeather(city)
            if (resp.description === "") {
                setShowWeather(false)
                setErr({ isErr: true, msg: "Uknown City, please try again" })
            }
            else {
                setErr({ isErr: false, msg: "" })
                setWeather(resp)
                setShowWeather(true)
            }
        } catch (error) {
            setErr({ isErr: true, msg: String(error) })
            setShowWeather(false)
        }
    }

    const handleChange = async (e) => {
        setCity(e)
        await getWeather(e)
    }

    return (<div>
        <br />
        <br />
        <br />
        <Container >
            <select onChange={(e) => { handleChange(e.target.value) }}>
                <option>Select City</option>
                <option>Tel-Aviv</option>
                <option>Haifa</option>
                <option>Montreal</option>
                <option>Halifax</option>
                <option>Cancun</option>
                <option>Valletta</option>
            </select>
            <br />
            <br />
            <input type="text" placeholder="Manual City Search" onChange={(e) => { setCity(e.target.value) }} />{" "}
            <input type="button" value="Search" onClick={(e) => { handleChange(city) }} />

            <br />
            <br />
            <br />
            <br />
            {err.isErr === false && showWeather && <Weather weather={weather} city={city} />}
            {err.isErr === true && <Alert variant={"danger"}>{err.msg}</Alert>}
        </Container>
    </div>)
}

export default Main