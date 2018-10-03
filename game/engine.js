class GameObject {
    constructor(hp, position) {
        this.hp = hp || 0;
        this.position = position || { x: 0, y: 0 }
    }

    update() {
        
    }

    render() {

    }

    destroy() {

    }
}

class World {
    constructor(canvas, width, height) {
        this.canvas=canvas;
        this.width=width;
        this.height=height;
        this.gameObjects=[]
    }
    
    update() {
        console.log("Hello World!")
        this.gameObjects.forEach((ga) => {
            ga.update();
        })
        
        this.update = this.update.bind(this)
        window.requestAnimationFrame(this.update);
    

    }
}