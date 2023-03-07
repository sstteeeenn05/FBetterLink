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
			link.setAttribute('FBetterLink',"");
			link.setAttribute('title',"Facebook Link Tracker Disabled");
			let FBetterLinkTag=document.createElement('span');
			FBetterLinkTag.innerText="√FBetterLink"
			FBetterLinkTag.setAttribute('title',"Facebook Link Tracker Disabled");
			FBetterLinkTag.style.cursor="pointer";
			FBetterLinkTag.style.backgroundColor="var(--blue-link)";
			FBetterLinkTag.style.fontSize="10px";
			FBetterLinkTag.style.color="white";
			FBetterLinkTag.style.padding="3px";
			FBetterLinkTag.style.margin="3px";
			FBetterLinkTag.style.borderRadius="3px";
			FBetterLinkTag.addEventListener('click',()=>{
				chrome.runtime.sendMessage('openPopup');
			});
			link.after(FBetterLinkTag);
			console.log("FBetterLink Changed:"+betterHref);
		}
	})
},1000)