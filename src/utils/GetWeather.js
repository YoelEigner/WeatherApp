import axios from 'axios'

const GetWeather = async (city) => {
    let resp = await axios.get('https://goweather.herokuapp.com/weather/' + city)
    return resp.data
}

export default GetWeather
