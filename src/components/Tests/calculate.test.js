import calculate from '../../logic/calculate';
import operate from '../../logic/operate';
describe('Test calculate & oprrate', () => {
  test('Check if operate returns the correct answer', () => {
    const result = operate(10, 5, '-');
    expect(result).toBe('5');
  });
  test('Check if calculate returns the correct answer', () => {
    const obj = { total: 6, operation: '+', next: 4 };
    const result = calculate(obj, '=');
    expect(result.total).toBe('10');
  });
});
