const x = 0;
export let Animals;

(function (Animals) {
  Animals[Animals["Fish"] = 0] = "Fish";
  Animals[Animals["Dog"] = 1] = "Dog";
})(Animals || (Animals = {}));