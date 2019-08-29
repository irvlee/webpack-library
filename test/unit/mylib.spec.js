//ES6 ways
import {add } from '../../lib/mylib';
describe('testing lib',function(){

    describe('add function :1+2=3', function(){
        it('sub function testing: 1+2=3', function(){
            var result = add(1,2);
            expect(result).toBe(3);  
        });


    });                 

    //commonjs
    describe('sub function testing: 5-3=2', function(){
        it('succeess', function(){
            let mylib = require('../../lib/mylib'); // anywhere you can use
            let res =  mylib.sub(5,3);
            expect(res).toBe(2);
        });
    });

});

