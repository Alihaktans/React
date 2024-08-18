const getComments = (number) => {
    return new Promise((resolve, reject) => {
        if (number === 1){
            resolve('Comments;');
        }
        reject("Bir problem var.");
    });
}

getComments(2)
.then((data) => console.log(data))
.catch((e) => console.log(e));

