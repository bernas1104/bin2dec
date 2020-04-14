export default function dec2any(dec, base) {
  const hexTable = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F'
  }

  let result = '';

  while(dec > 0){
    let remain = dec % base;

    if(base < 16){
      result = String(remain) + result;
    } else {
      if(remain <= 9)
        result = String(remain) + result;
      else{
        let hex = hexTable[remain];
        console.log(hex);
        result = hex + result;
      }
    }

    dec = Math.floor(dec / base);
  }

  return result;
}