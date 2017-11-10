
import chai from 'chai'; 
import { getRandomUsers } from './tools';

const { assert, expect } = chai;
chai.should();

const users = [{age: 15}, {age: 14}, {age: 28}, {age: 18}, {age: 45}, {age: 68}, {age: 38}, {age: 22}, {age: 14}];
const test  = () => Math.random();
describe('getRandomUsers', function() {
    it('should empty getRandomUsers() bee == false', () => {
       expect(getRandomUsers()).to.equal(false);
    });
    if( test > 0.5){
        it(' getRandomUsers() Math.random >0.5  you see', () => {
            expect(getRandomUsers(users).length).to.equal(users.slice(0, Math.round(users.length / 2)).length);
         });
      } else{
        it('should empty getRandomUsers() bee == false', () => {
            expect(getRandomUsers(users).length).equal(users.slice(Math.round(users.length / 2), users.length).length);
        });
      }
    
});