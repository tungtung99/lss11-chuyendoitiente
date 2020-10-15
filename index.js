var check,check1;
function fromonchange(obj){
    var value=obj.value;
    if(value == 'vietnam'){
        check="vietnam"
    }
    else if(value == 'usd'){
        check="usd"
    }
}
function toonchange(obj){
    var value=obj.value;
    if(value == 'vietnam'){
        check1="vietnam"
    }
    else if(value == 'usd'){
        check1="usd"
    }

}
function tinhtoan(){
    var tienchuyendoi;
    var tiennhap=document.getElementById("inputtiente").value;
    var message=document.getElementById("show_message");
    if(tiennhap == '')
    {
        alert("Mời bạn nhập số tiền muốn chuyển đổi");
    }
    else{
        if(check == check1){
            message.innerHTML = "Result:"+tiennhap;
        }
        else{
            if(check=="vietnam"){
                tienchuyendoi=tiennhap/23175.70;
            }
            else{
                tienchuyendoi=tiennhap*23175.70;
            }
            message.innerHTML = "Result:"+tienchuyendoi;
        }
    }
}