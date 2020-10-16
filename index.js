function tinhtoan(){
    let message=document.getElementById("show_message")
    let tiennhap=document.getElementById("inputtiente").value
    let tientruockhidoi=document.getElementById("money1").value
    let tiensaukhidoi=document.getElementById("money2").value
    if(tiennhap =='')
    {
        alert("Mời bạn nhập số tiền cần đổi")
    }
    else if(tiensaukhidoi=='' || tiensaukhidoi==''){
        alert("Mời bạn chọn")
    }
    else{
        let tienxuatra=(tiennhap/tientruockhidoi)*tiensaukhidoi
        message.innerHTML="Result: "+tienxuatra
    }
}