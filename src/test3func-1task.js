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
  
 // test(sum(2, 3)).equal(5);
  //test(sum()).defined();
    

//1
const getDay = () => {
    return new Date().getDay();
};

const testDate = (result) => {
    if ( result < 0 ) console.log(`${result} is not new Date().getDay().Today is ${new Date().getDay()} day`); 
    else if (result <= 6 )console.log('success');
    else console.log(`${result} is not new Date().getDay().Today is ${new Date().getDay()} day`);
}
testDate(getDay());
//or
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

  if(Math.random() > 0.5){
    test(getRandomUsers(users).length).equal(users.slice(0, Math.round(users.length / 2)).length);
  };
  Math.random = originRandom;  


  const originRandomtwo = Math.random;
  Math.random = () => 0.3;
  if(Math.random() < 0.5){
    test(getRandomUsers(users).length).equal(users.slice(Math.round(users.length / 2), users.length).length);
  }
  Math.random = originRandomtwo;  
  test(getRandomUsers()).defined(false);

 
//2
const originRandom = Math.random;
Math.random = () => 0.8;
Math.random = originRandom;  
