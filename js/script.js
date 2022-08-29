const author = {
miki: 45,
mango: 12,
kiwi: 10,
anton: 8,

};


const entries = Object.entries(author);

console.log(entries)


for (const [name, numbers] of entries) {
    
    console.log(`${name} ==> ${numbers}`);


};
























