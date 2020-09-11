import axios from 'axios';
import {BASE_URL} from '../constants/index.js';

const fetchCharacters = (page, stateSetter) => {
    axios.get(`${BASE_URL}/?page=${page}`)
        .then((response) => {
            stateSetter(response.data.results);
        })
        .catch((err) => {
            console.log(err);
        })
}

export default fetchCharacters;