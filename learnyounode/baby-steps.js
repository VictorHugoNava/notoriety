let total = 0
//console.log(process.argv)
for(let i = 2; i < process.argv.length; i++){
    total += Number(process.argv[i])
}
console.log(total)
