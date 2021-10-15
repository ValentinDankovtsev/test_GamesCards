
import * as axios from "axios";

const getGames = () => {
    return axios.get('https://pcg-appstore.s3.amazonaws.com/applications_for_import.json').then((response) => response.data)
}
const game = getGames()
window.game= game
console.log(getGames())