import dec2any from './../../src/functions/dec2any';

describe('Decimal-2-Any Converter', () => {
  it('should convert any decimal to it\'s binary counterpart', () => {
    const values = [
      ['01010101', 85], ['11100011', 227], ['11100110', 230], ['00101110', 46], 
      ['01110000', 112], ['00010100', 20], ['10000011', 131], ['11111100', 252], 
      ['00011110', 30], ['11000111', 199], ['01110011', 115], ['00100000', 32], 
      ['01010111', 87], ['11101000', 232], ['10101110', 174], ['01001110', 78],
    ];

    values.forEach(value => {
      const result = dec2any(value[1], 2);
      expect(parseInt(result, 2)).toBe(parseInt(value[0], 2));
    });
  });

  it('should convert any decimal to it\'s octal counterpart', () => {
    const values = [
      ['125', 85], ['343', 227], ['346', 230], ['56', 46], 
      ['160', 112], ['24', 20], ['203', 131], ['374', 252], 
      ['36', 30], ['307', 199], ['163', 115], ['40', 32], 
      ['127', 87], ['350', 232], ['256', 174], ['116', 78],
    ];

    values.forEach(value => {
      const result = dec2any(value[1], 8);
      expect(parseInt(result, 8)).toBe(parseInt(value[0], 8));
    });
  });

  it('should convert any decimal to it\'s hexadecimal counterpart', () => {
    const values = [
      ['55', 85], ['E3', 227], ['E6', 230], ['2E', 46], 
      ['70', 112], ['14', 20], ['83', 131], ['FC', 252], 
      ['1E', 30], ['C7', 199], ['73', 115], ['20', 32], 
      ['57', 87], ['E8', 232], ['AE', 174], ['4E', 78],
    ];

    values.forEach(value => {
      const result = dec2any(value[1], 16);
      expect(parseInt(result, 16)).toBe(parseInt(value[0], 16));
    });
  });
});