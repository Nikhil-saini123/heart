const body=document.querySelector("body")
body.addEventListener("mousemove",(event)=>{
	// console.log(event.offsetY);
	const xpos=event.offsetX
	const ypos=event.offsetY
	const span=document.createElement("span");
	span.style.left=xpos+"px";
	span.style.top=ypos+"px";
	span.style.down=ypos+"px";
	const size=Math.random()*100;
	span.style.width=size +"px";
	span.style.height=size +"px";
	body.appendChild(span);
	setTimeout(()=>
	{
		span.remove();
	},3000)

})