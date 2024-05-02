// let a = parseFloat(prompt("Trò chơi dự đoán mời bạn nhập vào số:"));
let a=Math.floor(Math.random(100)*100);
let b = parseInt(prompt('Nhập số ngẫu nhiên b nhưng đáp án là: ' +a)); 
// if(b==a){
//     alert('Chúc mừng bạn chọn trúng');
// }
while (b!==a) {
    b = parseInt(prompt('Nhập lại số ngẫu nhiên b nhưng đáp án là: ' +a));
}
alert('Chúc mừng bạn chọn trúng');