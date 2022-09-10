console.log('__one___');
setTimeout(() => {
    console.log('__two__');
}, 2000);
// the above code doesn't block the script written in the next line
console.log('__three__');