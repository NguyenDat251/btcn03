type = false;
WrongNum = true;

function compute()
{
	

	let numSt = parseInt(document.getElementById("firstNumber").value);
	let numNd =  parseInt(document.getElementById("lastNumber").value);

	if(!isNaN(numSt) && !isNaN(numNd))
	{
		if(document.getElementById("cong").checked == true)
		{
			document.getElementById("resultNum").value = numSt + numNd;
			type = true;
		}
	else if(document.getElementById("tru").checked == true)
		{
			document.getElementById("resultNum").value = numSt - numNd;
			type = true;
		}
	else if(document.getElementById("nhan").checked == true)
		{
			document.getElementById("resultNum").value = numSt * numNd;
			type = true;
		}
	else if(document.getElementById("chia").checked == true)
		{
			document.getElementById("resultNum").value = numSt / numNd;
			type = true;
		}
	else
		{
			document.getElementById("Error").value = "Chưa chọn phép tính";
			type = false;
		}
	}
	else
	{
		document.getElementById("Error").value = "Nhập đủ 2 số";
		type = false;
	}

	if(type == true)
	document.getElementById("Error").value = "";
}

function mouseLeave(btn)
{
	if(isNaN(btn.value))
		if(btn.id == "firstNumber")
			document.getElementById("Error").value = "Số đầu tiên bị sai";
		else if(btn.id == "lastNumber")
			document.getElementById("Error").value = "Số thứ hai bị sai";
		type = false;
}