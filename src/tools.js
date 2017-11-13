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
export const NAME = 'jhon';
export class Person {
    constructor(name = NAME) {
      this.name = name;
      this.creation = new Date();
    }
   
    getName() {
      return this.name;
    }
   
    setName(name) {
      this.name = name;
    }
    getCreation() {
        const hours = this.creation.getHours();
     
        if (hours > 22 || hours > 0 && hours <= 6) { return 'night child'; }
     
        if (hours > 6 && hours < 11) { return 'morning child'; }
     
        if (hours >= 11 && hours < 19) { return 'day child'; } //заменили для проверки теста
     
        return 'evening child';
    }
}   


 