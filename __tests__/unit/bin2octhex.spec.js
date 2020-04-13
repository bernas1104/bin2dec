import bin2octhex from './../../src/functions/bin2octhex';

describe('Binary-2-Octal/Hexadecimal Converter', () => {
  it('should convert any binary to it\'s octal counterpart', () => {
    const values = [
      ['01010101', 85], ['11100011', 227], ['11100110', 230], ['00101110', 46], 
      ['01110000', 112], ['00010100', 20], ['10000011', 131], ['11111100', 252], 
      ['00011110', 30], ['11000111', 199], ['01110011', 115], ['00100000', 32], 
      ['01010111', 87], ['11101000', 232], ['10101110', 174], ['01001110', 78],
    ];

    values.forEach(value => {
      const result = bin2octhex(value[0], 8);
      expect(result).toBe(value[1].toString(8));
    });
  });
});