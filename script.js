class Car {
  constructor (top, left, source) {
    this.top = top
    this.left = left
    this.source = source
    this.imgObj = document.createElement('img')
    this.imgObj.src = this.source
    document.body.append(this.imgObj)
    this.imgObj.style.left = this.left + 'px'
    this.imgObj.style.top = this.top + 'px'
  }
  set topValue (value) {
    this.imgObj.style.top = value
  }
  get topValue () {
    return this.imgObj.style.top
  }
  set leftValue (value) {
    this.imgObj.style.left = value
  }
  get leftValue () {
    return this.imgObj.style.left
  }
  moveRight (value) {
    this.timerId = setInterval(() => {
      if (
        (this.left < value && this.left < innerWidth - this.imgObj.width) ||
        this.imgObj.classList.contains('flip')
      ) {
        this.left += 20
        this.imgObj.style.left = this.left + 'px'
        this.imgObj.classList.remove('flip')
      } else {
        clearInterval(this.timerId)
      }
    }, 50)
  }
  moveLeft (value) {
    this.imgObj.classList.add('flip')
    this.timerId = setInterval(() => {
      if (this.left > 0 && this.left > value) {
        this.left -= 20
        this.imgObj.style.left = this.left + 'px'
      } else {
        clearInterval(this.timerId)
      }
    }, 50)
  }
  moveCar (value) {
    if (value == 'right') {
      clearInterval(this.moveLeftId)
      this.imgObj.classList.remove('flip')
      this.moveRightId = setInterval(() => {
        if (this.left < innerWidth - this.imgObj.width) {
          this.left += 20
          this.imgObj.style.left = this.left + 'px'
        }
      }, 50)
    } else if (value == 'left') {
      clearInterval(this.moveRightId)
      this.imgObj.classList.add('flip')
      this.moveLeftId = setInterval(() => {
        if (this.left > 0) {
          this.left -= 20
          this.imgObj.style.left = this.left + 'px'
        }
      }, 50)
    }
  }
  // changeStyle (value = 'border:5px solid #000') {
  //   this.imgObj.style.cssText = value
  // }
  ChangeStyle (ObjectStyle) {
    for (let item in ObjectStyle) {
      this.imgObj.style[item] = ObjectStyle[item]
    }
  }
}

// let firstCar = new Car()
let firstCar = new Car(10, 20, 'images/car.jpg')
// let secCar = new Car(200, 20, 'images/car2.png')
