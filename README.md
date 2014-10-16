#jQuery Accordion

jQuery Accordion creates a lightweight accordion menu.

##How to Use
- Requires jQuery
- Include accordion.min.js
- Include accordion.css

=> Use this HTML markup:

```html
    <head>
    <!- Link CSS ->
	 <link href="css/accordion.css" rel="stylesheet">
    </head>
    
    <body>

    <!- Accordion Setup ->
    <!- Note: Setting data-acc="open" will default your menu to open ->
	<div class="accordion" data-acc="open">
		<h3>Menu 1 <span></span></h3>
		<div class="accordion_content" > <p> Menu 1 content</p></div>
	</div>
 
	<div class="accordion" data-acc="closed">
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
