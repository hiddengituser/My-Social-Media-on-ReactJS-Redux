import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "6ea0edf3-8af8-4005-8a44-59778857b236"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`,)
                .then(response => {
                    return response.data;
                })
        )
    },

}
