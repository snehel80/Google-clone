import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyB0NskBDKg53yLvPV9bJdM1fxF14isMlzc",
    cx: "11b6821eb5cf24187",
}

export const fetchDataFromApi = async(payload) => {
    const {data} = await axios.get(BASE_URL ,{
        params:{...params,...payload}
    })
    return data;
};
