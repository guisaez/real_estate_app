import axios from "axios"

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '88b433ff59msh39b2bed415e57b5p16c14ejsn2c449d3d692c',
           'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
            } 
    })

    return data;
}
