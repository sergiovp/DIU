/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2019/20";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Pedro",
                Photo: "man.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "quiere preparar un viaje con sus amigos en Semana Santa",
                touch1: "agenda",
                feel1: "4",
                con1: "ver cuantos días puede tener libres para organizar lugar de viaje ",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet ofertas para esas fechas",
                touch2: "Movil",
                feel2: "2",
                con2: "hay demasiada información y pierde mucho tiempo, no hay precios 'baratos'",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar un alojamiento rural  en plasencia, donde hay procesiones y parece que hará buen tiempo",
                touch3: "móvil (el tiempo)",
                feel3: "3",
                con3: "Está preocupado por el tiempo y el desplazamiento (coche y aparcamiento)",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Los amigos le recomiendan una página para escoger alojamientos",
                touch4: "ordenador",
                feel4: "4",
                con4: "Buscar opciones en el lugar que había seleccionado, viendo precios y distancias, tiene que ver si hay aparcamiento fácil",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se encuentra 3 opciones que encajan en sus preferencias",
                touch5: "móvil (whatsapp)",
                feel5: "2",
                con5: "Llama a sus amigos (whatsapp no responen) para ver cual es su preferencia, tienen que reservar rápido por los precios",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar, otro año se encarga otro!",
                touch6: "ordenador",
                feel6: "3",
                con6: "algunos amigos no confirmaron por lo que tuvo que seleccionar reserva con posibilidad de cancelación",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Eva Sánchez",
                Photo: "persona2_eva.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con su familia para Verano pero antes tiene que cuadrar las vacaciones"+
                " de su marido con los días libres de sus hijos",
                touch1: "Agenda",
                feel1: "5",
                con1: "Quiere ir a algun destino español con interés turístico y que guste al resto de su familia",
                ima1: "cartoon-teamthinking.png",
                
                /*** PASO #2: DECISION ***/ 
                goal2: "Registrarse en una plataforma Web de alquiler de pisos para iniciar su búsqueda personalizada",
                touch2: "Servicio (plataforma Web)",
                feel2: "4",
                con2: "Tiene que registrarse y realizar las búsquedas ella sola, lo cual le resulta difícil",
                ima2: "cartoon-PChappy.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Inicia la búsqueda",
                touch3: "PC (página web)",
                feel3: "3",
                con3: "No consigue, la página web no le ofrece resultados",
                ima3: "cartoon-PCtyping.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca una oferta en pisos compartidos en la provincia de Galicia",
                touch4: "PC (página web)",
                feel4: "2",
                con4: "La página Web no le permite hacer búsquedas por provincias, lo cual resulta frustrante"+
                " para ella pues no conoce Galicia y tiene que hacer búsquedas externas para conocer pueblos.",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Decide reservar a traves de una agencia de viajes",
                touch5: "Presencialmente",
                feel5: "2",
                con5: "Frustración por no haber podido planificar su viaje de manera online",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar vacaciones tras dedicar mucho tiempo en la plataforma Web para al final"+
                " recurrir a las vías tradicionales",
                touch6: "Presencialmente",
                feel6: "4",
                con6: "Tendrá que buscar más información del lugar para ver que actividades ofrece y donde aparacar!",
                con6: "Ninguno, pues en la agencia de viajes le ofrecen información completa acerca de actividades y "+
                "sitios donde ir con su familia",
                ima6: "cartoon-phoning.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



