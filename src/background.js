'use strict';
chrome.runtime.onStartup.addListener(function(){
    setTimeout(onload,10000);
});
async function onload() {
    console.log("start");
    try {
        var res = await fetch(
            "https://sg-public-api.hoyolab.com/event/mani/sign?lang=vi-vn",
            { method: "POST", body: JSON.stringify({ act_id: "e202110291205111" }) });
        console.log(await res.text());
    }
    catch (e) {
        console.log(e);
        setTimeout(onload, 5000);
    }
}
