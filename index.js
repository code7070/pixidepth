// import * as PIXI from "./pixi.min.js";

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
});
document.body.appendChild(app.view);

const img = new PIXI.Sprite.from("pikachu.jpg");
img.width = window.innerWidth;
img.height = window.innerHeight;
app.stage.addChild(img);
