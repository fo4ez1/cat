let cat = {
  make: "vasya",
  color: "white",
  eated: false,
  weight: 1,
  eat: function () {
    this.eated = true;
  },
  stop: function () {
    this.eated = false;
  },
  start: function () {
    if (this.eat && this.weight <= 2) {
      alert("мян!");
      this.weight <= 2 ? (this.weight += 2) : (this.weight = 0);
    } else if (this.weight > 10) {
      alert("Сначала поешьте");
    } else {
      alert("насыпьте еды");
    }
  },
  showWeight: function () {
    alert("У меня вес " + this.weight);
  },
  addWeight: function (amount) {
    this.weight += amount;
  },
};
cat.showWeight();
cat.addWeight();
cat.showWeight();
cat.eat();
cat.start();
cat.showWeight();
cat.start();
cat.showWeight();
cat.eat();
cat.showWeight();


