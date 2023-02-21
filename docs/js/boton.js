
          function estudioscursados()
          { window.location.assign ("./estudioscursados.html")}

          function experiencialaboral()
          { window.location.assign ("./explaboral.html")}

          function villanos()
          { window.location.assign ("./villanos.html")}

          function volverinicio()
          { window.location.assign ("./index.html")}

          function video()
          { window.location.assign ("./Video.html")}

          function contacto()
          { window.location.assign ("./contacto.html")}

       

          function enviar()
         
          {  
            resultado = window.confirm ("¿Estás seguro que deseas activar la batiseñal?");
              
              if (resultado===true) {
  
                volverinicio();
  
                window.alert ("La batiseñal ha sido activada con éxito");
             
              } else {
  
                contacto();
  
              }      
              
          }
  

 


