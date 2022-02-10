const car = new Object();
car.model = "Mustang";
car.year = 1969;
car.owner = "me";
car.city = "Helsinki";
car.age = 2022 - car.year;

car.color = "red";

delete car.city;

console.log(car);
