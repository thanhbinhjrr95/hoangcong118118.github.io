//bai1
function bai1(date){
  var date = new Date();
  document.write("Ngay hom nay la : " + date +"</br>"); 
  if(date.getMonth()+1==1 || date.getMonth()==2|| date.getMonth()==3 )
    document.write("Mua xuan");
    else if(date.getMonth()+1==4 || date.getMonth()==5|| date.getMonth()==6 )
      document.write("Mua ha");
     else if(date.getMonth()+1==7 || date.getMonth()==8|| date.getMonth()==9 )
      document.write("Mua thu");
        else if(date.getMonth()+1==10 || date.getMonth()==11|| date.getMonth()==12 )
          document.write("Mua dong");
} 
    //bai1();
  
//bai2
function bai2(str){
  var str2="...";
  if(str.length>=2){
    document.write("Chuoi hop le"+"</br>");
  }
  else 
    document.write("Chuoi khong hop le, moi ban nhap lai !");
  
  if(typeof(str) === 'number'){
    str=str.toString();
  }
    if(str.length<10){
      document.write("Toan bo chuoi:"+ str);
  }
   else 
      document.write('Chuoi sau khi cắt và nối thêm :'+str.substr(0,10).concat("",str2));
      return str;
}
//console.log(bai2("1234aaaaaaaaaa"));

//bai 3
function bai3(x){
  if(x>=0 && x<=3.9){
    document.write("Ban duoc diem F");
  }
  else if(x>=4 && x<=5.4){
    document.write("Ban duoc diem D");
  }
  else if(x>=5.5 && x<=6.9){
    document.write("Ban duoc diem C");
  }
  else if(x>=7.0 && x<=8.4){
    document.write("Ban duoc diem B");
  }
  else if(x>=8.5 && x<=10.0){
    document.write("Ban duoc diem A");
  }
  else 
    document.write("Moi ban nhap lai diem so");
    return x;
}
//console.log(bai3(6.7));

//bai 4
function bai4(luachon){
			var str="Hello";
			switch(luachon){
				case 1:{
					document.write(str +" tieng han la: An nyeong haseyo");
					break;
				} 
				case 2:{
					document.write(str +" tieng y la: Ciao " );
					break;
				} 
				case 3:{
					document.write(str+" tieng nhat la: Ko ni chi wa " );
					break;
				} 
				case 4:{
					document.write(str+" tieng viet la:  Xin chao");
					break;
				} 
				case 5:{
					document.write(str+" tieng trung la:  Ni hao");
					break;
				} 
				default:{
					document.write("Moi ban nhap lai");
				}
			}
		}
		//bai4(3);


//bai 5
  function bai5(arr){
    if(Array.isArray(arr)){
        for (var i=0;i<arr.length;i++)
            if (arr[i]===true){
              break;
            }
      }
    document.write("<p> Gia tri 'true' xuat hien lan dau trong mang o vi tri thu " + i + "</p>");
  }
  var arr = [false, false, false, true, false, true, false, true];
  //bai5(arr);

//bai 6

function bai6(n){
  for(var i = 1;i<= n;){
    if(i % 2 == 0){
       document.write("<p style = 'color: green; display:inline'>"+i+"</p>");
        i++;
    }
    else if(i % 2 == 1){
        document.write("<p style = 'color: red; display:inline'>"+i+"</p>");
        i++;
    }
  }
}
//bai6(100);
