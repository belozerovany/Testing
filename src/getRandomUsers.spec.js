
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

    it(' getRandomUsers() Math.random >0.5  you see', () => {
        const originRandom = Math.random;
        Math.random = () => 0.8;
        expect(getRandomUsers(users).length).to.equal(5);
        Math.random = originRandom; 
    });

    it(' getRandomUsers() Math.random < 0.5  you see', () => {
        const originRandom = Math.random;
        Math.random = () => 0.3;
        expect(getRandomUsers(users).length).to.equal(4);
        Math.random = originRandom; 
    });
    
});