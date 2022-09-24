const fs = require('fs');

//Creating two files that return a Promise, one for writing gile and another for copying a file. Below is a javascript promoise! Promises can be pending, fulfilled (resolved) or fail (rejected). 

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('/.dist/index.html', fileContent, err=> {
            // if there's an error, reject the Promise and ensd the error to the Promise's `/catch()` method
            if (err) {
                reject(err);
                //return out of the function here to make sure the Promise doesn't actually execute the resolve() function as well
                return;
            }

            //if everything went well, resolve the Promise and send the successful data to teh `.then() `method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};


//copying file; asked to do this solo in the module. Turning fs.copyFile() functionality and turning it into a promise-based function. 
//
//1. creating a new function called copyFile that doesn't need to accept any paramters
const copyFile = () => {
//2. make copyFile() return a new Promise object, like we did with writeFile() above
    return new Promise((resolve,reject) => {
        //3. move the fs.copyFile() code from app.js into the returning Promise object's function in our copyFile() function
        fs.copyFile('./src/style.css', '.dist/style.ccss', err => {
            //4. if there's an error... reject() the error and return out of the function
            if (err) {
                reject(err);
            return;            
        }
            //5. if it's successful, resolve() it with a successful message
            resolve ({
                ok: true,
                message: 'Stylesheet created!'
            });
        });    
    });
};

//ES6, shorthand property names
module.exports = {writeFile, copyFile};
