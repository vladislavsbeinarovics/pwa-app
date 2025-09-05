function test()
{
	document.getElementById('test').innerHTML = "Inserted by JavaScript";
}

function test2()
{
	console.log(nutrition_data[2].data);

	nutrition_data[2].data.forEach((item) => {
		document.getElementById('test2').innerHTML += item.Name + '<br>';
	});
}