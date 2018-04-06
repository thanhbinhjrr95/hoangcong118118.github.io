//Bài 1
function tinh_binhphuong1(a){
  var result=a*a;    //Truyền tham số result vào hàm
  return result;       //Trả về kết quả là result
}
//console.log(tinh_binhphuong1(8));

//Bài 2
function tinh_binhphuong2(a,b,c){
  
  var x = 3*a+ 2*b -c;          //gán giá trị biến x
  var result=x*x;    //Truyền tham số vào hàm
  return result;       //Trả về kết quả là x*x
}
//console.log(tinh_binhphuong2(3,2,1));


//Bài 3
function cat_chuoi(str){
  var str2="...";
    document.write('Chuỗi sau khi cắt và nối thêm là:' +str.substr(0,10).concat("",str2)+"</br>");
  return str;     //Trả về kết quả là chuỗi
}
//console.log(cat_chuoi("toitenlahoangchicongtoitenlahoangchicongtoitencongabc"));

//Bài 4
function upperCase_firstLetter(str){
    document.write('Chuỗi sau khi viết hoa chữ cái đầu tiên là:'+ str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()+"</br>");
    //In ra màn hình chuỗi :Welcome to techmaster
  return str;             //Trả về kết quả là chuỗi
}
//console.log(upperCase_firstLetter("welcome to Techmaster"));

//Bài 5
function findMaxArray(numbers){
  var SoNhoNhat=Math.min.apply(Math,numbers);
    document.write('Số nhỏ nhất là:'+' '+SoNhoNhat+"</br>");  //In ra màn hình số lớn nhất là 1
    return numbers;           //Trả về kết quả là số
}
//console.log(findMaxArray([200,60,1,7]));

//Bài 6
function SortArray(nameArray){
  var sorted=nameArray.sort();
    document.write('Danh sách học viên sau khi sắp xếp:'+sorted+"</br>");// In ra màn hình danh sách học viên sau khi sap xep
  return nameArray;
}
 //console.log(SortArray(["Cong","Anh","Van","Hieu","Khanh"])) ;

//Bai 7
var teacher = {
  firstName: "Kim",lastName: "Anh",age: 55,
  say: function(){
  }
}
var student = {
  firstName: "Hoàng",lastName: "Công",age: 22,
  say: function(){
  }
}
var parent = {
  firstName: "Lê",lastName: "Thoa",age: 48,
  say: function(){
  }
}
var aboutMe = function(){
  document.write("Xin chào,Tôi là "+this.firstName+" "+this.lastName+".Năm nay tôi " +this.age+" tuổi."+"</br>");
}
teacher.say = aboutMe;
//teacher.say();   // In ra màn hình dòng chữ "Xin chào, tôi là Kim Anh. Năm nay tôi 55 tuổi."
student.say = aboutMe;
//student.say();   // In ra màn hình dòng chữ "Xin chào, tôi là Hoàng Công . Năm nay tôi 22 tuổi."
parent.say = aboutMe;
//parent.say();   // In ra màn hình dòng chữ "Xin chào, tôi là Lê Thoa. Năm nay tôi 48 tuổi."
  



