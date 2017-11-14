

import chai from 'chai'; //бибилтотека -импотрируем обьект с перечнем методов
import { getAdultUsers } from './tools';

const { assert, expect } = chai;//диструктуризацией вытягиваем нужные нам методы и используем подход BDD
chai.should();

const users = [{age: 15}, {age: 14}, {age: 28}, {age: 18}, {age: 45}, {age: 68}, {age: 38}, {age: 22}, {age: 14}];

describe('getAdultUsers', function() {
    it('should getAdultUsers(users)[0] bee == users[2]', () => {
       expect(getAdultUsers(users)[0]).to.equal(users[2]);
        //assert.equal(getAdultUsers(users)[0], users[2]);
    });
    it('should empty getAdultUsers() bee == []', () => {
        expect(getAdultUsers()).be.an.instanceof(Array);
    });
});