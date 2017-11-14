const testObj = {
  equal(result) {
    if (this.input === result) console.log('Success'); 
    else console.error(`${this.input} not equals to ${result}` );
  },
  defined() {
    if (this.input !== undefined) console.log('Success'); 
    else console.error(`${this.input} is not defined` );
  } 
};
const test = (input) => {
  testObj.input = input;
  return testObj;
};
  
//1
const getDay = () => {
    return new Date().getDay();
};
test(getDay()).equal(new Date().getDay());

//2
const users = [{age: 15}, {age: 14}, {age: 28}, {age: 18}, {age: 45}, {age: 68}, {age: 38}, {age: 22}, {age: 14}];
const getAdultUsers = (users = []) => users.filter(user => user.age > 18);

test(getAdultUsers(users)[0]).equal(users[2]);
test(getAdultUsers()).defined([]);


//3
const users = [{age: 15}, {age: 14}, {age: 28}, {age: 18}, {age: 45}, {age: 68}, {age: 38}, {age: 22}, {age: 14}];

const getRandomUsers = (users) => {
    const numb = Math.random();
    console.log('numb',numb);

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

  const originRandom = Math.random;
  Math.random = () => 0.8;

  test(getRandomUsers(users).length).equal(5);
  test(getRandomUsers(users).length).equal(Math.round(users.length / 2));
  test(getRandomUsers(users)[0]).equal(users[0]);
  test(getRandomUsers()).defined(false);
  Math.random = originRandom;  

