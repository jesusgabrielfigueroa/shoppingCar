const producto = document.querySelectorAll(".producto");
const total = document.querySelector("#total");
const pros = document.querySelector("#productos");
const money = document.querySelector("#money");
const buy = document.querySelector("#buy");

var totalVar = 0;
var proTotal = 0;
var moneyCount = 100;

producto.forEach((item, idex) => {
	item.id = idex;
	item.onclick = ()=>{
		let num = parseInt(item.lastElementChild.textContent);
		if(item.classList.contains("active")){
			totalVar -= num;
			item.classList.remove("active");
			proTotal -= 1;
		}
		else{
			item.classList.add("active");
			totalVar += num;
			proTotal += 1;
		}
		total.innerText = totalVar;
		pros.innerText = proTotal
	}
})

buy.onclick = ()=>{
	moneyCount -= totalVar;
	money.innerText = moneyCount;
	producto.forEach(item => {
		if(item.classList.contains("active")){
			item.classList.add("sale");
			item.classList.remove("active");
		}
	})
	totalVar = 0;
	total.innerText = totalVar;
}


