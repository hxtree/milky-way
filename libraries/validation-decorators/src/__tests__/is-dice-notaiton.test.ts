import { validateSync, ValidationError } from 'class-validator';
import { IsDiceNotation } from '../custom/is-dice-notation';

describe('IsDiceNotation', () => {
  class TestClass {
    @IsDiceNotation()
    public property: string;
  }

  describe('create', () => {
    let testClass: TestClass;

    beforeEach(async () => {
      testClass = new TestClass();
    });

    it('should not error on valid dice notation', () => {
      testClass.property = '1d6';
      const errors: ValidationError[] = validateSync(testClass);
      expect(errors.length).toBe(0);
    });

    it('should error on invalid dice notation', () => {
      testClass.property = 'rrr';
      const errors: ValidationError[] = validateSync(testClass);
      expect(errors.length).toBe(1);
    });
  });
});
