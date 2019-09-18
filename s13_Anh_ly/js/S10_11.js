function myFunction() {
	var x = document.getElementById("nav-element") //lấy các giá trị theo  id
	if(x.className === " "){ // neu class rong them  call responsive
		x.className += " responsive";
	}else{
		x.className = " ";
	}
}