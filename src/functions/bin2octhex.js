import bin2dec from './bin2dec'

export default function bin2octhex(bin, base){
  let dec = bin2dec(bin);

  let result = '';
  while(dec > 0){
    let remain = dec % base;

    result = String(remain) + result;

    dec = Math.floor(dec / base);
  }

  return result;
}