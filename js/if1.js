//bai1
function bai1(a,b){
  var numbers=Math.max(a,b);
  if(isNaN(a) || isNaN(b) ){
        return false;
  }
     document.write("So lon nhat trong 2 so la: "+ numbers);
      return true;
}
//console.log(bai1(11,33));
  
//bai 2
  function bai2(num) {
    if(parseInt(num)==num && num>0) {
      var giaithua = 1;
      for (var i = 1; i <= num ; i++) {
        giaithua *= i;
    }  
     document.write("La so nguyen duong va Giai thua la: "+ giaithua);
     return true;
  }
    return false;
}
  //console.log(bai2(5));

//bai3
  function bai3(numbers){
     numbers1=[];
     numbers.sort(function(a,b){return b-a});
     for(i = 0; i < numbers.length ; i++){
      if(numbers[i] % 2==0 ){
        numbers1.push(numbers[i])
      }  
    }
    return numbers1;
  }
  //console.log(bai3([7,1,4,20]));

//bai4
function bai4(user) { 
  if(user.username != null && user.username.length< 20 ){
      document.write("Hop le"+"</br>");
  } else {
    document.write("Ban phai dien vao o nay va khong qua 20 ki tu"+"</br>");
   }
    if(user.password.length>=6 && user.password.length <=32){
       document.write("Hop le"+"</br>");
    } else{
      document.write("Phai co do dai tu 6 den 32 ki tu"+"</br>");
    } 
      if(user.confirm == user.password){
         document.write("Hop le"+"</br>");
      }else {
        document.write("Khong trung khop voi password"+"</br>");
      } 
    return user;
}

//console.log(bai4(user={username:"hoangchicong",password:"chicong118",confirm:"chicong118"}));
