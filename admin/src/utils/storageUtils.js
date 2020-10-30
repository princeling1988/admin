//存储用户信息
import store from 'store'
const USER_KEY = 'USER_KEY'

export default {
    saveUser(user) {
        store.set(USER_KEY, user)
    },
    getUser() {
        return store.get(USER_KEY)
    },
    removeUser() {
        store.remove(USER_KEY)
    }
}