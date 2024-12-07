const cart = [
  { item: "노트북", price: 1200000, quantity: 1 },
  { item: "마우스", price: 35000, quantity: 2 },
  { item: "키보드", price: 89000, quantity: 1 }
];

// 1. for 문을 이용한 총 금액 계산
let totalPrice = 0;
for (let i = 0; i < cart.length; i++) {
  totalPrice += cart[i].price * cart[i].quantity;
}
console.log("Total Price (for loop):", totalPrice);

// 2. forEach를 이용한 총 금액 계산
totalPrice = 0;
cart.forEach(item => {
  totalPrice += item.price * item.quantity;
});
console.log("Total Price (forEach):", totalPrice);

// 3. reduce를 이용한 총 금액 계산
totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
console.log("Total Price (reduce):", totalPrice);

// 4. 각 제품별 금액 계산
const itemTotals = cart.map(item => ({
  item: item.item,
  total: item.price * item.quantity
}));
console.log("제품별 금액:", itemTotals);