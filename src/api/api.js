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
    follow(userId) {
        return (instance.post(`follow/${userId}`))
    },
    unfollow(userId) {
        return (instance.delete(`follow/${userId}`))
    },
    getProfile(userId) {
        console.warn('Obsolete method. Use profileAPI object.')
        return profileAPI.getProfile(userId);
    }

}

export const profileAPI = {
    getProfile(userId) {
        return (instance.get(`profile/` + userId))
    },
    getStatus(userId) {
        return (instance.get(`profile/status/` + userId))
    },
    updateStatus(status) {
        return (instance.put(`profile/status`, {status: status}))
    }
}

export const authAPI = {
    me() {
        return (instance.get('auth/me'));
    },
}