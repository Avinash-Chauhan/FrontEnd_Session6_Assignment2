//declared variable a,b,c using var keyword and assigned values to it
var a=4,b=3,c=6;
//using conditonal statement to find the greatest number in given variables 
if(a>b && a>c)
{
	//printing result in console as output
	console.log("a is the greatest number having value "+a +" compared to "+b +" &"+c);
}
else if(b>a && b>c)
{
	//printing result in console as output
	console.log("b is the greatest number having value "+b +" compared to a "+a +" & c "+c);
}
else
{
	//printing result in console as output
	console.log("c is the greatest number having value "+c +" compared to a "+a +" & b "+b);
}