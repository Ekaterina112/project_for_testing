import axios from "axios";
import {mapArrToString} from "../mapArrToString/mapArrToString";

const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const usersIds = response.data.map((user) => user.id)
        return mapArrToString(usersIds)

    } catch (e) {

    }

}

export default getData;