let nowDate = null;
let startDate = null;
let heading = document.getElementById(`heading`);
let varidDate = document.getElementById(`varidDate`);
let expireDate = document.getElementById(`expireDate`);
let cvs = document.getElementById(`cvs`);
let goodsName = document.getElementById(`goodsName`);
let submit = document.getElementById(`submit`);

submit.addEventListener(
  `click`,
  ()=>{
    let varid = varidDate.value;
    let expire = expireDate.value;
    let chain = cvs.value;
    let goods = goodsName.value;
    if (goodsName.length === 0){
      return;
      // 名前が空の時は処理を終了する。
    }
    console.log(varid);
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


function printVdty(){
  nowDate = Date.now();
  document.write(`有効期限内の引き換えチケット一覧は以下の通りです❗️ <br>`);
}

printVdty();