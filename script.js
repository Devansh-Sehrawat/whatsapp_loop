function whatsAppText(t) {
	window.InputEvent = window.Event || window.InputEvent;
	var d = new Date();
	var event = new InputEvent('input', {bubbles: true});
	var textbox = $('div.input');
	textbox.textContent = t;
	textbox.dispatchEvent(event);
	$("button.compose-btn-send").click();
}
for(i=0;i<5;i++) 
    whatsAppText("hootia");
