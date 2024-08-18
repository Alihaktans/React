  setTimeout(() => {
      console.log("Merhaba!");
  }, 5000);

  setInterval(() => {
      console.log("Merhaba ben her saniye çalışıyorum.");
    
  }, 1000);

  const sayHi = (cb) =>{
      cb();
    
  };
  sayHi( () => {
      console.log("Hello");
    
  });

  fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(data => data.json())
  .then(user => {
      console.log("User Yüklendi", user);
    
      fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(data => data.json())
      .then(post => console.log("Post yüklendi", post))
  }
  );

  async function getData() {
      const users = await (await fetch("https://jsonplaceholder.typicode.com/users/1")
      ).json();

      const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")
      ).json();

      const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")
      ).json();

      console.log("Users",users);
      console.log("Post1",post1);
      console.log("Post2",post2);
    
  }

  getData()

// //? Anonim Fonksiyon OLuşturma

 (async () =>{
     const users = await (await fetch("https://jsonplaceholder.typicode.com/users/1")
      ).json();

      const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")
     ).json();

      const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")
      ).json();

      console.log("Users",users);
      console.log("Post1",post1);
      console.log("Post2",post2);
    
    
 })();

// //? Axios Yapı
// import axios from "axios";
// (async () =>{
//     const users = await  axios("https://jsonplaceholder.typicode.com/users/1")

//      const post1 = await axios("https://jsonplaceholder.typicode.com/posts/1")

//      const post2 = await axios("https://jsonplaceholder.typicode.com/posts/2")

//      console.log("Users",users);
//      console.log("Post1",post1);
//      console.log("Post2",post2);
    
    
// })();