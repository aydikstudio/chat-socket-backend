const { trimStr } = require("./utils");
let users = [];

const findUser = (user) => {
    const userName = trimStr(user.username);
    const userRoom = trimStr(user.room);

    return users.find((u) => trimStr(u.username) === userName && trimStr(u.room) === userRoom);
}

const addUser = (user) => {

    
    const isExist = findUser(user);
    

    !isExist && users.push(user);

    const currentUser = isExist || user;

    return {
        isExist: !!isExist,
        user: currentUser
    }
}

const getRoomUsers = (room) => users.filter((u) => u.room === room);

const removeUser = (user) => {
    const found = findUser(user);

    if(found) {
        users = users.filter(
            ({room, username}) => room === found.room && username !== found.username
        )
    }

    return found
}

module.exports = {addUser, findUser, getRoomUsers, removeUser}