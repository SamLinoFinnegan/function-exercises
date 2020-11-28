const calculateSupply = function (age, dayAmount) {
    const maxAge = 80;
    const total = (dayAmount * 365) * (dayAmount - maxAge);
    const msg = 'You will need ' + total + ' cups of tea to last you until the ripe old age of ' + maxAge;
    console.log(msg)

}
calculateSupply(25, 3);