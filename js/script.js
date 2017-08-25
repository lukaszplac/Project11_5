$(function() {
	function Button(text) {
		this.text = text || "Hello"
		//Button.prototype = {  ten sposob u mnie nie dziala, a tak to jest opisane w module !?, dopiero ponizszy sposob dziala 
			//create: function(){
		Button.prototype.create = function() {
				var self = this;
				this.$element = $('<button>');
				this.$element.text(this.text);
				this.$element.click(function() {
					alert(self.text);
				});
				$('body').append(this.$element);
			}
	}
	
	var btn1 = new Button("Hello!");
	var btn2 = new Button("world!");
	btn1.create();
	btn2.create();
});
