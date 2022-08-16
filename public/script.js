/*
------------------
Kawethra.js v2.0.0
------------------
*/
let clientLang = window.navigator.language;

function chanceTheme(){
 let theme = document.body.getAttribute('theme');
   if (theme == "dark") {
   document.body.style.backgroundColor = data.themeColors.dark.bg;
   document.body.style.color = data.themeColors.dark.fg;
   }
   if (theme == "light") {
   document.body.style.backgroundColor = data.themeColors.light.bg;
   document.body.style.color = data.themeColors.light.fg;
   }
   if (theme == "red") {
   document.body.style.backgroundColor = data.themeColors.red.bg;
   document.body.style.color = data.themeColors.red.fg;
   }
   if (theme == "orange") {
   document.body.style.backgroundColor = data.themeColors.orange.bg;
   document.body.style.color = data.themeColors.orange.fg;
   } if (theme == "yellow"){
   document.body.style.backgroundColor = data.themeColors.yellow.bg;
   document.body.style.color = data.themeColors.yellow.fg;   
   } if (theme == "lime"){
   document.body.style.backgroundColor = data.themeColors.lime.bg;
   document.body.style.color = data.themeColors.lime.fg;  
   } if (theme == "green"){
   document.body.style.backgroundColor = data.themeColors.green.bg;
   document.body.style.color = data.themeColors.green.fg;
   } if (theme == "blue"){
   document.body.style.backgroundColor = data.themeColors.blue.bg;
   document.body.style.color = data.themeColors.blue.fg;
   } if (theme == "blurple"){
   document.body.style.backgroundColor = data.themeColors.blurple.bg;
   document.body.style.color = data.themeColors.blurple.fg; 
   } if(theme == "purple"){
   document.body.style.backgroundColor = data.themeColors.purple.bg;
   document.body.style.color = data.themeColors.purple.fg;
   } if(theme == "magenta"){
   document.body.style.backgroundColor = data.themeColors.magenta.bg;
   document.body.style.color = data.themeColors.magenta.fg;
   } if(theme == "pink"){
   document.body.style.backgroundColor = data.themeColors.pink.bg;
   document.body.style.color = data.themeColors.pink.fg;
   }
}

function setLang() {
 document.documentElement.setAttribute("lang", clientLang);
}

const kw = {
 api: {
  help: function () {
   console.log(`
    Kawethra.JS V2
    Ne işe yarar?
    JS de CSS Kullanımını basitleştirir
    Hazır fonksiyonlar ve JS kodlarıyla size kolaylık sağlar
    
    Bu sürümde neler var?
    - Basit CSS
    - Gizleme, Gösterme (Animasyonlu/ Animasyonsuz)
    - Onload Fonksiyonu
    - Site dilini otomatik ayarlama
    - Özel tema
    - Fonksiyonları kolaylaştırır
    `);
  },
  documention: {
   css: function () {
    console.log(`Kullanım : kw.api.css.property(query, value);`);
    console.log(`Örnek : kw.api.css.backgroundColor("body", "red");`);
   },
  },
  css: {
   color: function (query, value) {
    document.querySelector(query).style.color = value;
   },
   background: function (query, value) {
    document.querySelector(query).style.background = value;
   },
   backgroundAttachment: function (query, value) {
    document.querySelector(query).style.backgroundAttachment = value;
   },
   backgroundColor: function (query, value) {
    document.querySelector(query).style.backgroundColor = value;
   },
   backgroundImage: function (query, value) {
    document.querySelector(query).style.backgroundImage = value;
   },
   backgroundPosition: function (query, value) {
    document.querySelector(query).style.backgroundPosition = value;
   },
   backgroundRepeat: function (query, value) {
    document.querySelector(query).style.backgroundRepeat = value;
   },
   border: function (query, value) {
    document.querySelector(query).style.border = value;
   },
   borderCollapse: function (query, value) {
    document.querySelector(query).style.borderCollapse = value;
   },
   borderColor: function (query, value) {
    document.querySelector(query).style.borderColor = value;
   },
   borderTopColor: function (query, value) {
    document.querySelector(query).style.borderTopColor = value;
   },
   borderRightColor: function (query, value) {
    document.querySelector(query).style.borderRightColor = value;
   },
   borderBottomColor: function (query, value) {
    document.querySelector(query).style.borderBottomColor = value;
   },
   borderLeftColor: function (query, value) {
    document.querySelector(query).style.borderLeftColor = value;
   },
   borderSpacing: function (query, value) {
    document.querySelector(query).style.borderSpacing = value;
   },
   borderStyle: function (query, value) {
    document.querySelector(query).style.borderStyle = value;
   },
   borderTopStyle: function (query, value) {
    document.querySelector(query).style.borderTopStyle = value;
   },
   borderLeftStyle: function (query, value) {
    document.querySelector(query).style.borderLeftStyle = value;
   },
   borderBottomStyle: function (query, value) {
    document.querySelector(query).style.borderBottomStyle = value;
   },
   borderRightStyle: function (query, value) {
    document.querySelector(query).style.borderRightStyle = value;
   },
   borderTop: function (query, value) {
    document.querySelector(query).style.borderTop = value;
   },
   borderLeft: function (query, value) {
    document.querySelector(query).style.borderLeft = value;
   },
   borderBottom: function (query, value) {
    document.querySelector(query).style.borderBottom = value;
   },
   borderRight: function (query, value) {
    document.querySelector(query).style.borderRight = value;
   },
   borderWidth: function (query, value) {
    document.querySelector(query).style.borderWidth = value;
   },
   borderTopWidth: function (query, value) {
    document.querySelector(query).style.borderTopWidth = value;
   },
   borderLeftWidth: function (query, value) {
    document.querySelector(query).style.borderLeftWidth = value;
   },
   borderBottomWidth: function (query, value) {
    document.querySelector(query).style.borderBottomWidth = value;
   },
   borderRightWidth: function (query, value) {
    document.querySelector(query).style.borderRightWidth = value;
   },
   bottom: function (query, value) {
    document.querySelector(query).style.bottom = value;
   },
   captionSide: function (query, value) {
    document.querySelector(query).style.captionSide = value;
   },
   clear: function (query, value) {
    document.querySelector(query).style.clear = value;
   },
   color: function (query, value) {
    document.querySelector(query).style.color = value;
   },
   content: function (query, value) {
    document.querySelector(query).style.content = value;
   },
   letterSpacing: function (query, value) {
    document.querySelector(query).style.letterSpacing = value;
   },
   cursor: function (query, value) {
    document.querySelector(query).style.cursor = value;
   },
   direction: function (query, value) {
    document.querySelector(query).style.direction = value;
   },
   display: function (query, value) {
    document.querySelector(query).style.display = value;
   },
   emptyCells: function (query, value) {
    document.querySelector(query).style.emptyCells = value;
   },
   float: function (query, value) {
    document.querySelector(query).style.float = value;
   },
   fontFamily: function (query, value) {
    document.querySelector(query).style.fontFamily = value;
   },
   fontSize: function (query, value) {
    document.querySelector(query).style.fontSize = value;
   },
   fontStyle: function (query, value) {
    document.querySelector(query).style.fontStyle = value;
   },
   fontVariant: function (query, value) {
    document.querySelector(query).style.fontVariant = value;
   },
   fontWeight: function (query, value) {
    document.querySelector(query).style.fontWeight = value;
   },
   font: function (query, value) {
    document.querySelector(query).style.font = value;
   },
   height: function (query, value) {
    document.querySelector(query).style.height = value;
   },
   left: function (query, value) {
    document.querySelector(query).style.left = value;
   },
   lineHeight: function (query, value) {
    document.querySelector(query).style.lineHeight = value;
   },
   listStyleImage: function (query, value) {
    document.querySelector(query).style.listStyleImage = value;
   },
   listStylePosition: function (query, value) {
    document.querySelector(query).style.listStylePosition = value;
   },
   listStyleType: function (query, value) {
    document.querySelector(query).style.listStyleType = value;
   },
   listStyle: function (query, value) {
    document.querySelector(query).style.listStyle = value;
   },
   margin: function (query, value) {
    document.querySelector(query).style.margin = value;
   },
   marginTop: function (query, value) {
    document.querySelector(query).style.marginTop = value;
   },
   marginLeft: function (query, value) {
    document.querySelector(query).style.marginLeft = value;
   },
   marginBottom: function (query, value) {
    document.querySelector(query).style.marginBottom = value;
   },
   marginRight: function (query, value) {
    document.querySelector(query).style.marginRight = value;
   },
   maxHeight: function (query, value) {
    document.querySelector(query).style.maxHeight = value;
   },
   maxWidth: function (query, value) {
    document.querySelector(query).style.maxWidth = value;
   },
   orphans: function (query, value) {
    document.querySelector(query).style.orphans = value;
   },
   outlineColor: function (query, value) {
    document.querySelector(query).style.outlineColor = value;
   },
   outlineStyle: function (query, value) {
    document.querySelector(query).style.outlineStyle = value;
   },
   outlineWidth: function (query, value) {
    document.querySelector(query).style.outlineWidth = value;
   },
   outline: function (query, value) {
    document.querySelector(query).style.outline = value;
   },
   overflow: function (query, value) {
    document.querySelector(query).style.overflow = value;
   },
   padding: function (query, value) {
    document.querySelector(query).style.padding = value;
   },
   paddingTop: function (query, value) {
    document.querySelector(query).style.paddingTop = value;
   },
   paddingLeft: function (query, value) {
    document.querySelector(query).style.paddingLeft = value;
   },
   paddingBottom: function (query, value) {
    document.querySelector(query).style.paddingBottom = value;
   },
   paddingRight: function (query, value) {
    document.querySelector(query).style.paddingRight = value;
   },
   position: function (query, value) {
    document.querySelector(query).style.position = value;
   },
   quotes: function (query, value) {
    document.querySelector(query).style.quotes = value;
   },
   right: function (query, value) {
    document.querySelector(query).style.right = value;
   },
   tableLayout: function (query, value) {
    document.querySelector(query).style.tableLayout = value;
   },
   textAlign: function (query, value) {
    document.querySelector(query).style.textAlign = value;
   },
   textDecoration: function (query, value) {
    document.querySelector(query).style.textDecoration = value;
   },
   textIndent: function (query, value) {
    document.querySelector(query).style.textIndent = value;
   },
   textTransform: function (query, value) {
    document.querySelector(query).style.textTransform = value;
   },
   top: function (query, value) {
    document.querySelector(query).style.top = value;
   },
   verticalAlign: function (query, value) {
    document.querySelector(query).style.verticalAlign = value;
   },
   visibility: function (query, value) {
    document.querySelector(query).style.visibility = value;
   },
   whiteSpace: function (query, value) {
    document.querySelector(query).style.whiteSpace = value;
   },
   width: function (query, value) {
    document.querySelector(query).style.width = value;
   },
   wordSpacing: function (query, value) {
    document.querySelector(query).style.wordSpacing = value;
   },
   zIndex: function (query, value) {
    document.querySelector(query).style.zIndex = value;
   },
  },
  theme: {
   dark: function () {
    document.querySelector("body").style.backgroundColor = data.themeColors.dark.bg;
    document.querySelector("body").style.color = data.themeColors.dark.fg;
   },
   light: function () {
    document.querySelector("body").style.backgroundColor = data.themeColors.light.bg;
    document.querySelector("body").style.color = data.themeColors.light.fg;
   },
   red: function () {
    document.querySelector("body").style.backgroundColor = data.themeColors.red.bg;
    document.querySelector("body").style.color = data.themeColors.red.fg;
   },
   orange: function () {
    document.querySelector("body").style.backgroundColor = data.themeColors.orange.bg;
    document.querySelector("body").style.color = data.themeColors.orange.fg;
   },
   yellow: function () {
    document.querySelector("body").style.backgroundColor = data.themeColors.yellow.bg;
    document.querySelector("body").style.color = data.themeColors.yellow.fg;
   },
   lime: function () {
    document.querySelector("body").style.backgroundColor = data.themeColors.lime.bg;
    document.querySelector("body").style.color = data.themeColors.lime.fg;
   },
   green: function () {
    document.querySelector("body").style.backgroundColor = data.themeColors.green.bg;
    document.querySelector("body").style.color = data.themeColors.green.fg;
   },
   teal: function () {
    document.querySelector("body").style.backgroundColor = data.themeColors.teal.bg;
    document.querySelector("body").style.color = data.themeColors.teal.fg;
   },
   blue: function () {
    document.querySelector("body").style.backgroundColor = data.themeColors.blue.bg;
    document.querySelector("body").style.color = data.themeColors.blue.fg;
   },
   blurple: function () {
    document.querySelector("body").style.backgroundColor = data.themeColors.blurple.bg;
    document.querySelector("body").style.color = data.themeColors.blurple.fg;
   },
   purple: function () {
    document.querySelector("body").style.backgroundColor = data.themeColors.purple.bg;
    document.querySelector("body").style.color = data.themeColors.purple.fg;
   },
   magenta: function () {
    document.querySelector("body").style.backgroundColor = data.themeColors.magenta.bg;
    document.querySelector("body").style.color = data.themeColors.magenta.fg;
   },
   pink: function () {
    document.querySelector("body").style.backgroundColor = data.themeColors.pink.bg;
    document.querySelector("body").style.color = data.themeColors.pink.fg;
   },
  },
  show: function (query, time) {
   if (time == undefined) {
    document.querySelector(query).style.display = "block";
   } else {
    let realtime = time / 1000;
    let cooldown = time;

    document.querySelector(query).style.display = "block";
    document.querySelector(query).style.transition = `all ${realtime}s`;
    setTimeout(function () {
     document.querySelector(query).style.opacity = "1";
    }, 10);
   }
  },
  hide: function (query, time) {
   if (time == undefined) {
    document.querySelector(query).style.display = "none";
   } else {
    let realtime = time / 1000;
    let cooldown = time;

    document.querySelector(query).style.transition = `all ${realtime}s`;
    setTimeout(function () {
     document.querySelector(query).style.opacity = "0";
    }, 10);
    setTimeout(function () {
     document.querySelector(query).style.display = "none";
    }, cooldown);
   }
  },
  onload: function (newFunction) {
   window.onload = () => {
    eval(newFunction);
   };
  },
  click: function (query, newFunction) {
   document.querySelector(query).onclick = () => {
    eval(newFunction);
   };
  },
  clientLang: clientLang,
  button: function (inner ,buttonText, theme) {
   theme = theme.toLowerCase();
   let button = document.createElement("button");
   button.style.border = "none";
   button.style.borderRadius = "5px";
   button.style.textAlign = "center";
   button.style.padding = "8px";
   if (theme == "dark") {
    button.style.backgroundColor = data.themeColors.dark.bg;
    button.style.color = data.themeColors.dark.fg;
   }
   if (theme == "light") {
    button.style.backgroundColor = data.themeColors.light.bg;
    button.style.color = data.themeColors.light.fg;
   }
   if (theme == "red") {
    button.style.backgroundColor = data.themeColors.red.bg;
    button.style.color = data.themeColors.red.fg;
   }
   if (theme == "orange") {
    button.style.backgroundColor = data.themeColors.orange.bg;
    button.style.color = data.themeColors.orange.fg;
   } if (theme == "yellow"){
    button.style.backgroundColor = data.themeColors.yellow.bg;
    button.style.color = data.themeColors.yellow.fg;   
   } if (theme == "lime"){
    button.style.backgroundColor = data.themeColors.lime.bg;
    button.style.color = data.themeColors.lime.fg;  
   } if (theme == "green"){
    button.style.backgroundColor = data.themeColors.green.bg;
    button.style.color = data.themeColors.green.fg;
   } if (theme == "blue"){
    button.style.backgroundColor = data.themeColors.blue.bg;
    button.style.color = data.themeColors.blue.fg;
   } if (theme == "blurple"){
    button.style.backgroundColor = data.themeColors.blurple.bg;
    button.style.color = data.themeColors.blurple.fg; 
   } if(theme == "purple"){
    button.style.backgroundColor = data.themeColors.purple.bg;
    button.style.color = data.themeColors.purple.fg;
   } if(theme == "magenta"){
    button.style.backgroundColor = data.themeColors.magenta.bg;
    button.style.color = data.themeColors.magenta.fg;
   } if(theme == "pink"){
    button.style.backgroundColor = data.themeColors.pink.bg;
    button.style.color = data.themeColors.pink.fg;
   }
   button.innerHTML = buttonText;
   document.querySelector(inner).appendChild(button);
  },
 },
};

kw.api.onload(`
chanceTheme();
setLang();
`);

let data = {
 themeColors: {
  dark: {
   bg: "#130F26",
   fg: "#F5F9FC",
  },
  light: {
   fg: "#130F26",
   bg: "#F5F9FC",
  },
  red: {
   fg: "#F5F9FC",
   bg: "#FA4B4B",
  },
  orange: {
   fg: "#F5F9FC",
   bg: "#D96D00",
  },
  yellow: {
   fg: "#F5F9FC",
   bg: "#A68A00",
  },
  lime: {
   fg: "#F5F9FC",
   bg: "#639400",
  },
  green: {
   fg: "#F5F9FC",
   bg: "#00A11B",
  },
  teal: {
   fg: "#F5F9FC",
   bg: "#0093B0",
  },
  blue: {
   fg: "#F5F9FC",
   bg: "#0F87FF",
  },
  blurple: {
   fg: "#F5F9FC",
   bg: "#8E78FF",
  },
  purple: {
   fg: "#F5F9FC",
   bg: "#B266FF",
  },
  magenta: {
   fg: "#F5F9FC",
   bg: "#EB3BEB",
  },
  pink: {
   fg: "#F5F9FC",
   bg: "#F545BA",
  },
 },
};
