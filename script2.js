class Circle{
    constructor(radius,color){
    this.radius = radius;
    this.color = color;

}
getRadius() {
    return this.radius;
}

setRadius(radius) {
    this.radius = radius;
}

getColor() {
    return this.color;
}

setColor(color) {
    this.color = color;
}

area() {
    return Math.PI * this.radius * this.radius;
}

circumference() {
    return 2 * Math.PI * this.radius;
}
}

// Usage example:
const myCircle = new Circle(5, "red"); // Creating an instance with radius 5 and color 'red'
console.log(myCircle.area()); // Calculating the area
console.log(myCircle.circumference()); // Calculating the circumference
console.log(myCircle.getColor()); // Getting the color
myCircle.setColor('blue'); // Changing the color
console.log(myCircle.getColor()); // Retrieving the updated color 