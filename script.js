function reversorString(string) {
    let n_string = '', i = string.length -1;
    for (i; i >=0; i--) {
        n_string += string[i];
    }
    return n_string
}

console.log(reversorString('ArielVenancioMarques'));