let a = parseFloat(prompt("Nhập vào nhiệt độ"));

while (a<20||a>100)
{
    if(a<20){
        a = parseFloat(prompt("Nhập lại nhiệt độ cho cao lên: "));
    }
    if(a>100){
        a = parseFloat(prompt("Nhập lại nhiệt độ cho thấp lên: "));
    }
}
document.write(`Nhiệt độ nhập là ${a}`);
debugger;