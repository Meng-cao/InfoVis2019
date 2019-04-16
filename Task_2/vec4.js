Vec4 = function(x,y,z)
{
this.x = x;
this.y = y;
this.z = z;
}
/*Get the area of a triangle in 3D space*/

function AreaCalculate(v0,v1,v2){

/*By using Heron's formula*/

	var a=Math.sqrt((v1.x-v0.x)^2+(v1.y-v0.y)^2+(v1.z-v0.z)^2);
    var b=Math.sqrt((v2.x-v1.x)^2+(v2.y-v1.y)^2+(v2.z-v1.z)^2);
	var c=Math.sqrt((v2.x-v0.x)^2+(v2.y-v0.y)^2+(v2.z-v0.z)^2);
	var p=(a+b+c)/2;
    var s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
	return s;

}
