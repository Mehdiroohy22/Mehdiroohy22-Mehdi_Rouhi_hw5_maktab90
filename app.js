let stepCounter = {
    step: 0,
    increase: function () {
        this.step++
        // console.log(this.step)
        return this
    },
    decrease: function () {
        this.step--
        // console.log(this.step);
        return this
    },
    reset: function () {
        this.step = 0;
        // console.log(this.step)
        return this
    },
    read: function () {
        console.log(this.step)
        return this
    }
}

stepCounter.increase().increase().decrease().increase().increase().read().reset().read()