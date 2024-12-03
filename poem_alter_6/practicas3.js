//objeto JSON
		var objetos ={
					fondo : document.body,
		
	         		letras : document.getElementById ("logo1")
	         		
			   }

//---------------------------------------------------------------

gsap.to("#logo1", { x: 200 })
tl.from("logo1", {x:-500, y:190,opacity: "0.3",duration: 0.5, delay:0})
