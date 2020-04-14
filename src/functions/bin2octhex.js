import bin2dec from './bin2dec'
import dec2any from './dec2any';

export default function bin2octhex(bin, base){
  let dec = bin2dec(bin);

  let result = dec2any(dec, base);
  
  return result;
}