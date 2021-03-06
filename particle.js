function Particle(x, y, hue, firework) {
    this.pos = new p5.Vector(x,y)
    this.firework = firework
    this.lifespan = 255

    if(firework) {
        this.vel = createVector(0,random(-16,-10))
    } else {
        this.vel = p5.Vector.random2D()
        this.vel.mult(random(2,10))
    }
    this.acc = new p5.Vector(0,0)

    this.applyForce = function(force) {
        this.acc.add(force)

    }

    this.update = function() {
        if(!this.firework) {
            this.vel.mult(.9)
            this.lifespan -= 4
        }
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.mult(0)
    }

    this.show = function() {
        colorMode(HSB)
        if(!this.firework) {
            strokeWeight(2)
            stroke(hue, 255, 255, this.lifespan)
        } else {
            strokeWeight(4)
            stroke(hue, 255, 255)
        }

        point(this.pos.x,this.pos.y)
    }

    this.done = function() {
        if(this.lifespan < 0) {
            return true
        } else {
            return false
        }
    }
}
