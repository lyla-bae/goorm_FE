let products;
const ulEl = document.querySelector(".product-list");

async function fetchData() {
  // json 데이터 불러오기
  products = await fetch("./mock.json").then((res) => res.json());
  displayProducts();
}

//json 데이터바인딩
function displayProducts() {
  ulEl.innerHTML = products
    .map((pro) => {
      return `
            <li>
              <h3>${pro.productName}</h3>
              <img src="./imgs/${pro.productImgFileName}" alt="${pro.productName}" />
              <span>${pro.productPrice}</span>
              <button type="button" class="add-cart" data-id="${pro.id}">add cart</button>
            </li>
        `;
    })
    .join("");
}

// 장바구니 기능

let cartList = JSON.parse(localStorage.getItem("cartList")) || [];

document.querySelector("ul").addEventListener("click", function (e) {
  // 추가버튼을 누르면 해당인덱스의 li를 배열 cartList에 추가
  if (e.target.classList.contains("add-cart")) {
    const id = parseInt(e.target.dataset.id);
    const selectPro = products.find((item) => item.id === id);

    let findItem = cartList.find((item) => item.id === selectPro.id);

    if (findItem) {
      findItem.count++;
    } else {
      cartList.push({ ...selectPro, count: 1 });
    }

    localStorage.setItem("cartList", JSON.stringify(cartList));

    console.log(cartList);
  }
});

// 삭제버튼누르면 배열,로컬스토리지 초기화
document.querySelector(".clearCart").addEventListener("click", function () {
  cartList = [];
  localStorage.removeItem("cartList");
});

//오늘그만보기 세션스토리지 값
let checkToday = sessionStorage.getItem("checkToday");

// 오늘그만보기 버튼을 누르지않음
if (!checkToday) {
  //body에 modal 추가
  const modalEl = document.createElement("div");
  modalEl.className = "modal";
  modalEl.innerHTML = `
    <div class="modalInner">
        <span>🐈 만두 굿즈 오픈 이벤트 🐈‍⬛</span>
        <button class="close-today">오늘 그만 보기</button>
    </div>
`;
  document.body.appendChild(modalEl);

  //오늘그만보기 버튼을 누르면 버튼값을 true로 바꾸고 modal 삭제
  const closeToday = document.querySelector(".close-today");
  closeToday.addEventListener("click", function () {
    sessionStorage.setItem("checkToday", "true");
    modalEl.remove();
  });
}

fetchData();
