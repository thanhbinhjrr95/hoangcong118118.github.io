//bai 1
function bai1(num) {
    var giaithua = 1;
    for (var i = 1; i <= num ; i++) {
       giaithua *= i;
    }
    return giaithua;
}
//console.log(bai1(5));

//bai2
  function bai2(str) {
    var t = [ ];
      str = str.split("");
    for ( var i = str.length-1; i>= 0; i-- ) {
      t.push( str[i] );
  }
    return t.join(""); 
}
 console.log(bai2("hello"));

//Bai 3  
function bai3(str) {
  var str2="";
  for(var i=1;i<11;i++) {
      str2+=str;
    } 
    return str2; 
 }
//console.log(bai3("123-"));
   
//Bai 4
function bai4(nameArray){
  var sorted = nameArray.sort();
  var i = 1;
    while(i < 6) {
      document.write("<p>"+ i +"."+ nameArray[i-1] + "</p>"); // In danh sách học viên sau khi sap xep
      i++;
}
    return nameArray;
 }  
   //console.log(bai4(["Cong","Anh","Van","Hieu","Khanh"]));

  //Bai 5
function bai5(numbers){
  for(var i=0; i< numbers.length;i++){
    numbers[i]*=2;
  }
  return numbers;
}  
//console.log(bai5([1,3,4]));

//Bai 6
function bai6(numbers){
  for (var i = 0; i< numbers.length; i++) {
      numbers[i] %= 2;
}
  return numbers;
}
//console.log(bai6([8,12,5,9]));
