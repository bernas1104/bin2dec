export default function bin2dec(bin){
  let sum = 0;
  let exp = bin.length - 1;

  for(let i = 0; i < bin.length; i++)
    sum += parseInt(bin[i]) * Math.pow(2, exp--);

  return sum;
}