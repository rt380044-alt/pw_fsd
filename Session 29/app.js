import path from "path";

const username= "rohit";
const txt = "jpg";


// const filepath = path.join("src", "files", `${username}.${txt}`);
console.log(path.resolve ("src", "files", '..' , 'uploads', 'profiles', `${username}.${txt}`));

// console.log(filepath);

// uplodes/profiles/rohit.jpg
// Components

// src/files: Directory
// data.txt : filename
// .txt : extension

// const filepath = path.format({
//   dir: path.join("src", "files"),
//   name: username,
//   ext: `.${txt}`
// });
// console.log(filepath);

 fs . watch ('/data.txt', (eventType, filename) => {
    if (filename) {
        console.log(`File ${filename} has been changed!`);
    }
 });
 console.log("Watching data.txt");

 // writable stream

// const.writableStream = fs.createWriteStream('output.txt');

// writableStream.write('Hello, World!\n');
// writableStream.write('This is a writable stream example.\n');


// Duplex stream

// const duplexStream = new Duplex({

// transform(chunk, encoding, callback) 
const duplexStream = new Duplex({
  transform(chunk, encoding, callback) {
    // Convert the chunk to uppercase
    chunk = chunk.toString().toUpperCase();
    callback(null, chunk);
  }
});

// Pipe the duplex stream to process.stdout
duplexStream.pipe(process.stdout);
const readableStream = fs.createReadStream('input.txt');
readableStream.pipe(duplexStream);

