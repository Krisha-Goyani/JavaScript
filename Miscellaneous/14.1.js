let target = {};
let proxy = new Proxy(target, {}); // empty handler

proxy.test = 5; // writing to proxy (1)
console.log(target.test); // 5, the property appeared in target!
console.log(proxy.test); // 5, we can read it from proxy too (2)
for (let key in proxy) console.log(key); // test, iteration works (3)

// GET and SEt
let num = [1, 2, 3, 4];
num = new Proxy(num, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0;
    }
  },
  set(target, prop, value) {
    if (typeof value == "number") {
      target[prop] = value;
      return true;
    } else {
      return false;
    }
  },
});

console.log(num[2]);
console.log(num[26]);

num.push(6);
num.push(8);
console.log(num.length);
num.push("hi");

let range = {
  start: 1,
  end: 10,
};

range = new Proxy(range, {
  has(target, prop) {
    return prop >= target.start && prop <= target.end;
  },
});

console.log(5 in range); // true
console.log(50 in range); // false
