import chai from 'chai'; 
import { Person } from './tools';
import { NAME } from'./tools';

const { assert, expect } = chai;
//chai.should();

describe('Person',()=>{
    let person;
    beforeEach(()=>{
        person = new Person()
    })
    it('should create instance with name',()=>{
        const tesName = 'test';
        expect(new Person(tesName).name).to.equal(tesName);
    })

    it('should create instance for defoult name',()=>{
        expect(person).to.have.own.property('name'); //проверяем если вызываем пустой конструктор то выведится собственное свойство name
        expect(person.name).to.exist; // проверяем существует ли вообще свой сво name
        expect(person.name).to.equal(NAME);
    })

    it('should create date fild "creation"',()=>{  // this.creation  проверяем работает или нет
        expect(person.creation).to.be.instanceOf(Date);
    
    })

    it('should use name in getName',()=>{
        const tesName = 'test';
        expect(person.getName()).to.equal(person.name);
    })
    it('should set name setName',()=>{
        const tesName = 'test';
        person.setName(tesName);
        expect(person.name).to.equal(tesName);
    })

    // it('should show "day child" on getCreation()',()=>{  // getCreation() проверяем работает или нет
    //    // console.log(person. getCreation());
    //     person.creation.setHours(14);
    //     expect(person.getCreation()).to.equal('day child');
      
    // })
    // еще один вариант
    it('should return appropriate text on getCreation()', () => {
        const tests = [
          {hour: 23, text: 'night child'}, {hour: 7, text: 'morning child'}, 
          {hour: 12, text: 'day child'}, {hour: 20, text: 'evening child'}
        ];
       
        tests.forEach(({hour, text}) => {
          person.creation.setHours(hour);
          console.log(hour,text);
          expect(person.getCreation()).to.equal(text);
        });

    });

})