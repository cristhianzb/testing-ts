import { Calculator } from "../src/Calculator";

describe('calculate', function(){
  it('sum', function(){
    const calculator = new Calculator();
    const a: number = 2;
    const b: number = 6;
    
    const actualResult = calculator.sum(a,b);

    expect(actualResult).toBe(8);
  });
});
