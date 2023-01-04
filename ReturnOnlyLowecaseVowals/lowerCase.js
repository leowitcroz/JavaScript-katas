function shortcut (string) {
    return string.replace(/[aeiou]/g,'')
}

let str = 'hello'


console.log(shortcut(str))