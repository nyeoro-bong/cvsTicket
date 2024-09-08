let nowDate = null;
let startDate = null;
let heading = document.getElementById(`heading`);
let validDate = document.getElementById(`validDate`);
let expireDate = document.getElementById(`expireDate`);
let cvs = document.getElementById(`cvs`);
let goodsName = document.getElementById(`goodsName`);
let submit = document.getElementById(`submit`);
let infoArea = document.getElementById(`info`);
let resultArea = document.getElementById(`result`);
let validData = ["2024-09-01"];
let expireData = ["2024-09-30"];
let chainData = ["その他CVS"];
let goodsData = ["マツキヨ10%割引クーポン券"];
let n = 0; //データカウンタ

submit.addEventListener(
  `click`,
  ()=>{
    let valid = validDate.value;
    let expire = expireDate.value;
    let chain = cvs.value;
    let goods = goodsName.value;
    const header = document.createElement("h5");
    infoArea.innerText = "";

  if (valid.length === 0) {
      header.innerText = "❕引換開始日が入力されていません。❕"
      infoArea.appendChild(header);
      return;
    } else if (expire.length === 0) {
      header.innerText = "❕引換終了日が入力されていません。❕"
      infoArea.appendChild(header);
      return;
    } else if(chain.length === 0) {
      header.innerText = "❕チェーン名が入力されていません。❕"
      infoArea.appendChild(header);
      return;
    } else if(goods.length === 0) {
      header.innerText = "❕商品名が入力されていません。❕"
      infoArea.appendChild(header);
      return;
    } else {
      validData.push(valid);
      expireData.push(expire);
      chainData.push(chain);
      goodsData.push(goods);
      n = n+1;
      header.innerText = "❕引換クーポン情報が登録されました❕"
      infoArea.appendChild(header);
      printVdty();
    }
    console.log(valid);
    console.log(expire);
    console.log(chain);
    console.log(goods);
  }
);

let degree = 0;
function rotateHeading() {
  degree = degree + 6;
  heading.style.transform = `rotateX(${degree}deg)`;
}
setInterval(rotateHeading, 30);

const formatDate = (date = new Date()) => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0"); // 月は0から始まるため、1を足す
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

function printVdty(){
  const nowDate = formatDate();
  let paragraph = document.createElement("p");
  paragraph.innerText = "";

  for(let i = 0; i <=n; i++) {
    if(validData[i] <= nowDate && nowDate <= expireData[i]) {
      paragraph.innerText = `・${chainData[i]}》${goodsData[i]} ❣期限:${expireData[i]}`;
      resultArea.appendChild(paragraph);
    }
  }
  console.log(validData[0]);
  console.log(expireData[0]);
  console.log(chainData[0]);
  console.log(goodsData[0]);
}

printVdty();