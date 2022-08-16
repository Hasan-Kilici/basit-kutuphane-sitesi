let bookApi = {
  whoIs: {
    Kawethra: function () {
      console.log(`Back-end & Front-end Developer`);
    },
    Medulla: function () {
      console.log(`Back-end & Front-end Developer`)
    },
  },
  theme: {
    status: function () {
      let theme = document.body.getAttribute("theme");
      if (theme == "dark") {
        console.log(`Mevcut Kawethra.js Teması : ${theme}`);
      }
      if (theme == "light") {
        console.log(`Mevcut Kawethra.js Teması : ${theme}`);
      }
      if (theme == "red") {
        console.log(`Mevcut Kawethra.js Teması : ${theme}`);
      }
      if (theme == "orange") {
        console.log(`Mevcut Kawethra.js Teması : ${theme}`);
      }
      if (theme == "yellow") {
        console.log(`Mevcut Kawethra.js Teması : ${theme}`);
      }
      if (theme == "lime") {
        console.log(`Mevcut Kawethra.js Teması : ${theme}`);
      }
      if (theme == "green") {
        console.log(`Mevcut Kawethra.js Teması : ${theme}`);
      }
      if (theme == "blue") {
        console.log(`Mevcut Kawethra.js Teması : ${theme}`);
      }
      if (theme == "blurple") {
        console.log(`Mevcut Kawethra.js Teması : ${theme}`);
      }
      if (theme == "purple") {
        console.log(`Mevcut Kawethra.js Teması : ${theme}`);
      }
      if (theme == "magenta") {
        console.log(`Mevcut Kawethra.js Teması : ${theme}`);
      }
      if (theme == "pink") {
        console.log(`Mevcut Kawethra.js Teması : ${theme}`);
      }
    },
  },
  data:{
  books :{},
  book: {},
  }
};
