import getTruthy from '../../src/index';
describe('unit test falsy', function(){
    it('truthy', function(){
        var result = getTruthy;
        expect(result).toBeTruthy();     
    });
});                 
        
describe('unit test falsy', function(){
    it('falsy', function(){
        var result = !getTruthy();
        expect(result).toBeFalsy();     
    });
});