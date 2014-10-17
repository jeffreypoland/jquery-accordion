#jQuery Accordion

jQuery Accordion creates a lightweight accordion menu.

##How to Use
- Requires jQuery
- Include accordion.min.js
- Include accordion.css

=> Use this HTML markup:
=> HTML Settings

	id = Setting an unique id on your accordion menu allows you the ability to add #yourUniqueId
         to the end of your url and the accordion with that id will open.

    data-acc = If you want the menu to be open by default set this to "open" if you want it 
               to be closed set it to "closed"    

```html
    <head>
    <!- Link CSS ->
	 <link href="css/accordion.css" rel="stylesheet">
    </head>
    
    <body>

    <!- Accordion Setup ->
	<div id="yourUniqueId" class="accordion" data-acc="open">
		<h3>Menu 1 <span></span></h3>
		<div class="accordion_content" > <p> Menu 1 content</p></div>
	</div>
 
	<div id="yourUniqueId" class="accordion" data-acc="closed">
		<h3>Menu 2 <span></span></h3>
		<div class="accordion_content" > <p>Menu 2 content</p></div>
	</div>

     <!- Link jQuery ->
     <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
 	 <!- Link Accordion.js ->
	 <script src="js/accordion.min.js" ></script>

	 </body>
```


##Options

###Auto Close

This makes it so only one accordion menu can be active at a time. By Default you have to click to close an accordion. With "autoClose" set to true when you click on an accordion any previously active accordion will become inactive.

#####Example:

$('.accordion').accordion({autoClose:"true"})

##Demo
[Accordion Demo Site](http://www.jeffreyjpoland.com/jquery/accordion/)
