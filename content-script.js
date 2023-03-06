setInterval(()=>{
	let links=document.querySelectorAll('a[role=link]:not([FBetterLink])');
	links.forEach((link)=>{
		let originHref=decodeURIComponent(link.href);
		let hasHead=originHref.includes("https://l.facebook.com/l.php?u=");
		let hasTail=originHref.includes("fbclid=");
		let betterHref=originHref;
		if(hasHead) betterHref=betterHref.split("https://l.facebook.com/l.php?u=")[1];
		if(hasTail) betterHref=betterHref.split("fbclid=")[0].slice(0,-1);
		if(betterHref!=originHref){
			link.addEventListener('click',e=>e.preventDefault());
			link.addEventListener('click',()=>window.open(betterHref,'_blank').focus());
			console.log("FBetterLink-changed:"+betterHref);
			link.setAttribute('FBetterLink',"");
		}
	})
},1000)