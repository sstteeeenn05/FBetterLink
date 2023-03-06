chrome.tabs.onUpdated.addListener((tabId,changeInfo,tab)=>{
	chrome.scripting.executeScript({
		target:{tabId:tabId},
		files:['content-script.js']
	});
})