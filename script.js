//公転
function planetRevolve(planet,radius,speed){
  let angle = -speed;
  var move = function () {
    angle += speed;
    let radian = (angle * Math.PI) / 180;
    let z = Math.cos(radian) * radius;
    let x = Math.sin(radian) * radius;
    planet.setAttribute("position", { x: x, y: 0, z: z });
  };
  setInterval(move, 100);
}

//自転
function planetRotate(planet,anglespeed){
  let rotation = planet.getAttribute("rotation"); 
  let angle=0;
  var rotate=function(){
    angle+=anglespeed;
    planet.setAttribute("rotation",{ x: 0, y: angle, z: 0});
  }
  setInterval(rotate, 100);
}
