function giaithua(x){
  var num = 1;
  for(var i=1; i<=x; i++){
    num*=i;
  }
  input.value=num;
}

function binhphuong(x){
  input.value=x*x;
}

function canbachai(x){
  input.value=Math.sqrt(x);
}
function layphantram(x){
  if(x>0){
    input.value=x/100;
  }else
  alert("null");

}
// Thay doi theme
$('#db').click(function() {
    $("table").toggleClass("newtable");
});
