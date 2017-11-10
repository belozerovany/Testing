export const sum = (a =0, b= 0) => a + b;

export const getDay = () => {
    return new Date().getDay();
};


export const getAdultUsers = (users = []) => users.filter(user => user.age > 18);

export const getRandomUsers = (users) => {
    const numb = Math.random();

    if (!users) {
        return false;
    }

    const length = users.length;
    const middleUser = Math.round(length / 2);

    if (numb > 0.5) {
        
        return users.slice(0, middleUser);
    }

    return users.slice(middleUser, length);

};