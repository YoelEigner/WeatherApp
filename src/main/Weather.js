import { Container, Table } from "react-bootstrap"
import { useEffect } from 'react'

const Weather = ({ city, weather }) => {
    useEffect(() => {
    }, [weather])

    return (<Container>
        <h1>Today's forcast in {city}</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Temperature</th>
                    <th>Wind</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{weather.temperature}</td>
                    <td>{weather.wind}</td>
                    <td>{weather.description}</td>
                </tr>
            </tbody>
        </Table>
        {weather.forecast.map((w, index) => {
            return (<div key={index}>
                <h3>Day {w.day}</h3>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>Temperature</th>
                            <th>Wind</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{w.temperature}</td>
                            <td>{w.wind}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>)
        })
        }
    </Container>)
}

export default Weather