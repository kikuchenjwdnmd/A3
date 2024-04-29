const tokenKey = 'kiku-token'

const common = {
    getToken,
    setToken,
    removeToken,
    getUserInfo,
    setUserInfo,
    removeUserInfo,
}

function getToken(){
    localStorage.getItem(tokenKey)
}
function setToken(token){
    localStorage.setItem(tokenKey, token)
    
}
function removeToken(){
    localStorage.removeItem(tokenKey)
}

function getUserInfo(){
    localStorage.getItem('userInfo')
}
function setUserInfo(userInfo){
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
}
function removeUserInfo(){
    localStorage.removeItem('userInfo')
}