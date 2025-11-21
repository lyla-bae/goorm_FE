// products 배열의 각 상품에 대해 20% 할인된 가격을 적용한 새로운 상품 배열을 만드세요.
// 단, 브랜드와 상품명은 그대로 유지하고, spread 문법을 사용해 주세요.
const products = [
  {
    브랜드: "수아레",
    상품명: "케이블 카라 반팔 니트 - 6 Color",
    가격: 39900,
  },
  {
    브랜드: "커버낫",
    상품명: "에센셜 어쩌고",
    가격: 34300,
  },
];

// 여기에 코드를 작성하세요.

const newProducts = products.map((product) => ({
  ...product,
  가격: Math.round(product.가격 * 0.8),
}));

console.log(newProducts);
