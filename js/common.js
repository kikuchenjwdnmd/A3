const tokenKey = 'kiku-token'

const common = {
    getToken,
    setToken,
    removeToken,
    getUserInfo,
    setUserInfo,
    removeUserInfo,
}

function getToken() {
    return localStorage.getItem(tokenKey)
}

function setToken(token) {
    localStorage.setItem(tokenKey, token)

}

function removeToken() {
    localStorage.removeItem(tokenKey)
}

function getUserInfo() {
    return localStorage.getItem('userInfo')
}

function setUserInfo(userInfo) {
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
}

function removeUserInfo() {
    localStorage.removeItem('userInfo')
}