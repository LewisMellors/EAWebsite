
var i = 0;
var tShirtNum = new Array;
tShirtNum[0] = "assets/T-shirts/T-shirt0.jpg";
tShirtNum[1] = "assets/T-shirts/T-shirt1.jpg";
tShirtNum[2] = "assets/T-shirts/T-shirt2.jpg";
tShirtNum[3] = "assets/T-shirts/T-shirt3.jpg";
tShirtNum[4] = "assets/T-shirts/T-shirt4.jpg";
    








$(document).ready(function()
{
	console.log("DOCUMENT READY");
	
	$('.bxslider').bxSlider({
		auto: true,
		autoControls:true,
		stopAutoOnClick: true,
		captions: true,
		slideWidth: 1200,
		slideHight: 675,
		height: 675,
	});
        
    document.getElementById("TShirt").src = tShirtNum[i];
        

    
    
    
    

    
    
    
//leave
});

function Nxt()
{
    console.log("NXT FIRED!");
    i++;
    if(i > 4)
    {
        i = 0;
    }

    document.getElementById("TShirt").src = tShirtNum[i];
}
function Prev()
{
    console.log("PREV FIRED!");
    i--;
    if(i < 0)
    {
        i = 4;
    }
    document.getElementById("TShirt").src = tShirtNum[i];
}
function AddSWQ()
{
    console.log("BUTTON PRESSED")
    var Quantity = parseInt(sessionStorage.getItem("SWQuan")) + 1;
    sessionStorage.setItem("SWQuan", Quantity.toString());
    alert("Item Added To Cart.")

    console.log(sessionStorage.getItem("SWQuan"));

}
function AddBFQ()
{
    console.log("BUTTON PRESSED")
    var Quantity = parseInt(sessionStorage.getItem("BFQuan")) + 1;
    sessionStorage.setItem("BFQuan", Quantity.toString());
    alert("Item Added To Cart.")

    console.log(sessionStorage.getItem("BFQuan"));

}
function AddSimQ()
{
    console.log("BUTTON PRESSED")
    var Quantity = parseInt(sessionStorage.getItem("SimQuan")) + 1;
    sessionStorage.setItem("SimQuan", Quantity.toString());
    alert("Item Added To Cart.")

    console.log(sessionStorage.getItem("SimQuan"));

}
function AddNFSQ()
{
    console.log("BUTTON PRESSED")
    var Quantity = parseInt(sessionStorage.getItem("NFSQuan")) + 1;
    sessionStorage.setItem("NFSQuan", Quantity.toString());
    alert("Item Added To Cart.")

    console.log(sessionStorage.getItem("NFSQuan"));

}
function AddMEQ()
{
    console.log("BUTTON PRESSED")
    var Quantity = parseInt(sessionStorage.getItem("MEQuan")) + 1;
    sessionStorage.setItem("MEQuan", Quantity.toString());
    alert("Item Added To Cart.")

    console.log(sessionStorage.getItem("MEQuan"));

}
function AddUQ()
{
    console.log("BUTTON PRESSED")
    var Quantity = parseInt(sessionStorage.getItem("UQuan")) + 1;
    sessionStorage.setItem("UQuan", Quantity.toString());
    alert("Item Added To Cart.")

    console.log(sessionStorage.getItem("UQuan"));

}
function AddSQ()
{
    console.log("BUTTON PRESSED")
    var Quantity = parseInt(sessionStorage.getItem("SQuan")) + 1;
    sessionStorage.setItem("SQuan", Quantity.toString());
    alert("Item Added To Cart.")

    console.log(sessionStorage.getItem("SQuan"));

}
function AddMQ()
{
    console.log("BUTTON PRESSED")
    var Quantity = parseInt(sessionStorage.getItem("MQuan")) + 1;
    sessionStorage.setItem("MQuan", Quantity.toString());
    alert("Item Added To Cart.")

    console.log(sessionStorage.getItem("MQuan"));

}
function AddLQ()
{
    console.log("BUTTON PRESSED")
    var Quantity = parseInt(sessionStorage.getItem("LQuan")) + 1;
    sessionStorage.setItem("LQuan", Quantity.toString());
    alert("Item Added To Cart.")

    console.log(sessionStorage.getItem("LQuan"));

}
function Clear()
{
    console.log("CLEARED");
    sessionStorage.setItem("SWQuan","0");
    sessionStorage.setItem("BFQuan","0");
    sessionStorage.setItem("SimQuan","0");
    sessionStorage.setItem("NFSQuan","0");
    sessionStorage.setItem("MEQuan","0");
    sessionStorage.setItem("UQuan","0");
    sessionStorage.setItem("SQuan","0");
    sessionStorage.setItem("MQuan","0");
    sessionStorage.setItem("LQuan","0");
    location.reload();
}






