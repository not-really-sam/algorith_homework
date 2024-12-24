//tamrin 18//

const points = [
    {name: "A", x1: 1, y1:4},
    {name: "B", x2: -3, y2:2},

]

const m = (points[1].y2 - points[0].y1) / (points[1].x2 - points[0].x1);

const b = points[0].y1 - m * points[0].x1;

console.log("y=", m,"x +", b);