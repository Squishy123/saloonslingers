let map = new World(document.querySelector("#canvas"), 500, 500);
map.update();

let player = new GameObject(5, { x: 7, y: 3 });
player.update = () => {
    console.log("I am in the world");
}
map.gameObjects.push(player);