const user = {
    name: 'Paul',
    lastName: 'Cabrini'
};

function getUserWithFullName(user){
    return{
        ...user,
        fullName:`${user.name} ${user.lastName}`
    }
}

const UserWithFullName = getUserWithFullName(user);

console.log(UserWithFullName, user);