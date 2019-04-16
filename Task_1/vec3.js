Vec3 = function(a,b,c)
{
	this.a = a;
	this.b = b;
	this.c = c;
}

/*Get the median of three numbers*/
Vec3.prototype.mid = function(){
	var mid = this.a;
	if (mid <= this.b) {
		if (mid >= this.c) {
			mid = this.a;
		}
		else if (this.b <= this.c){
			mid = this.b;
		}
			else{
				mid = this.c;
			}
	}
	return mid;
}





