//objeto JSON
		var objetos ={
					fondo : document.body,
		
	         		letras : document.getElementById ("logo1")
	         		
			   }

//---------------------------------------------------------------

gsap.fromTo( "#logo1",{ x: -140, fill: 'blue', }, { x: 40, fill: 'green' });
