const Triangle = require('./triangle');

test('Valid scalene triangle', () => {
    const t = new Triangle(3, 4, 5);
    expect(t.getTriangleType()).toBe("Scalene");
});

test('Valid isosceles triangle', () => {
    const t = new Triangle(5, 5, 8);
    expect(t.getTriangleType()).toBe("Isosceles");
});

test('Permutations of valid isosceles triangle', () => {
    expect(new Triangle(5, 5, 8).getTriangleType()).toBe("Isosceles");
    expect(new Triangle(5, 8, 5).getTriangleType()).toBe("Isosceles");
    expect(new Triangle(8, 5, 5).getTriangleType()).toBe("Isosceles");
});

test('Valid equilateral triangle', () => {
    const t = new Triangle(6, 6, 6);
    expect(t.getTriangleType()).toBe("Equilateral");
});

test('Zero value for a side', () => {
    const t = new Triangle(0, 4, 5);
    expect(t.getTriangleType()).toBe("Invalid sides");
});

test('Negative value for a side', () => {
    const t = new Triangle(-3, 4, 5);
    expect(t.getTriangleType()).toBe("Invalid sides");
});

test('Sum of two sides equals the third', () => {
    expect(new Triangle(2, 3, 5).getTriangleType()).toBe("Not a triangle");
    expect(new Triangle(5, 2, 3).getTriangleType()).toBe("Not a triangle");
    expect(new Triangle(3, 5, 2).getTriangleType()).toBe("Not a triangle");
});

test('Sum of two sides less than the third', () => {
    expect(new Triangle(1, 2, 5).getTriangleType()).toBe("Not a triangle");
    expect(new Triangle(5, 1, 2).getTriangleType()).toBe("Not a triangle");
    expect(new Triangle(2, 5, 1).getTriangleType()).toBe("Not a triangle");
});

test('All sides are zero', () => {
    const t = new Triangle(0, 0, 0);
    expect(t.getTriangleType()).toBe("Invalid sides");
});
