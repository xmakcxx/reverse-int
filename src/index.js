module.exports = function reverse (n) {
    let a = Array.from(String(n)).reverse().join('')
  console.log(a)
  if(a[a.length-1]==='-'){
    console.log(a)
    a = a.replace('-','') ;
  }
  if(a[0] === '0'){
    console.log(a)
    a = a.replace('0','') ;
  }
return Number(a)
}
