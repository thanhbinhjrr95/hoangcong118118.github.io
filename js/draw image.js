
//bai1

function printTriangle(n){
	var str= '';
	
	if(n > 2) {
		for ( var row = 1; row <= n; row++ ) {
			for ( var column = 1; column <= row; column++ ){ 
				str += ' * ';
			}
				str +='</br>';
		}
	}
	else document.write("Moi ban nhap lai n, n phai lon hon 2 !");
	return str;
}
//document.write(printTriangle(4.5));

//bai2

	function printEmptyRectangle(col,row){
			var str=' ';
		
			if(col>3 && row>=3){
					for( var i=0; i<=row-1; i++) {
						for( var j=0; j<=col-1; j++) {
				
						if(i==0 || i== row-1 || j ==0 ||j == col-1 )				 					
							str+= "*"; //In sao dong,cot dau tien va dong,cot cuoi cung  
					  else 				  	
							 str+= "&nbsp;&nbsp;";
					}
							str+= "</br>";
				}
			} else 
				document.write("Moi ban nhap lai a va b ");	
				return str ;
}				
		//document.write(printEmptyRectangle(5,3));

//bai 3

function printSpecialTriangle(n) {
				var str=' ' ;
				var a=2*n-1;
	
				if(n>1){
					for(var i=1; i<=n; i++) {
						for( var j=1; j <= a; j++){
							if(i==1)
								str+= " * ";
							else if((j<i) || (j>a+1-i))
								str+=" &nbsp; ";
							else
								str+= " * ";
								}
						str+= "</br>";
							}			
				} else 
				document.write("Moi ban nhap lai n, n phai lon hon 1");
				return str;
			}
	//document.write(printSpecialTriangle(3));

//bai4 

function printX(n){
			var str=' ' ;
	
			if(n>3 && n%2==1){
				for( var i=1; i<=n; i++){ 
					for( var j=1; j<=n; j++){ 
						if(j==i || (j==n - i + 1)){ 
							str+= "*";
						} else  
							str+= "&nbsp; ";
					}
					str+= "</br>";
				}				
			}
			else 
				document.write("Moi ban nhap lai n ");
				return str;
		}
		//document.write(printX(5));

	//bai 5
	function printButterfly (n){
			var mark=(n+1)/2;
			var y=mark;

			if(n>3 && n%2==1){
				for (var i=0;i<n;i++){
					var x=0;
					for(var j=0;j<n;j++){
						if(j<mark){        
							x++;         
						} else{
							x--;        
						}
						if (x+y > mark+1){
							document.write("  &nbsp;");
						}else {
							document.write("*");
						}
					}
					if(i<mark-1){
						y--;
					}else {
						y++;
					}
					document.write("<br>");
				}
			} else 
				document.write("Moi ban nhap lai n");
			}
			//printButterfly(5);


 