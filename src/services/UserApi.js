import axios from "axios";
import { ref } from "vue";

class UserApi {
    constructor() {
        this.data = ref(null)
    }

    async setData() {
        try {
            const url = 'https://randomuser.me/api?results=2'
            const { data } = await axios.get(url)
            this.data.value = data.results
        } catch (error) {
            console.log(error)
        }
    }
}

export default UserApi