function hellos(){
    let  picname = "dice";
    let extension=".png";
    let x = Math.floor((Math.random() * 6) + 1);
    let y = Math.floor((Math.random() * 6) + 1);
    let name1 = "img/" + picname + x + extension;
    let name2 = "img/" + picname + y + extension;
    document.getElementById('favcon1').src = name1;
    document.getElementById('favcon2').src = name2;
}
