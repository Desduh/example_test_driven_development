class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getTriangleType() {
        if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
            return "Invalid sides";
        }
        if (this.a + this.b <= this.c || this.a + this.c <= this.b || this.b + this.c <= this.a) {
            return "Not a triangle";
        }
        if (this.a === this.b && this.b === this.c) {
            return "Equilateral";
        }
        if (this.a === this.b || this.b === this.c || this.a === this.c) {
            return "Isosceles";
        }
        return "Scalene";
    }
}

module.exports = Triangle;
