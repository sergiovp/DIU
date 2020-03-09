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
				Name: "Germán Polomares",
                Photo: "persona1_matthew.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere alquilar una habitación de piso en Valencia con la "+
                "intención de cambiar de trabajo y conocer gente",
                touch1: "Blog de notas del móvil",
                feel1: "5",
                con1: "Encontrar trabajo en el lugar dónde decida alquilar la habitación",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Comienza a buscar pisos en Valencia capital para el próximo mes",
                touch2: "Ordenador",
                feel2: "5",
                con2: "Consigue encontrar algunos pisos con precios asequibles "+
                "interesantes con gente que parece ser muy agradable",
                ima2: "cartoon-PChappy.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Se decide a llamar a un piso en el distrito Ciutat Vella que lo compartiría con dos chicas y un chico",
                touch3: "Ordenador",
                feel3: "3",
                con3: "Está preocupado por si finalmente encajará con los que serán sus nuevos compañeros",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Los inquilinos del piso se lo recomiendan, le aseguran buena convivencia y afirman que" +
                " el lugar en el que se ecuentra situado el piso es muy bonito.",
                touch4: "ordenador",
                feel4: "4",
                con4: "Tiene que preparar el viaje a Valencia para ver el piso y conocer a la gente.",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Descubre que las tres personas con las que compartiría el piso fuman, " +
                "algo que Germán odia y además especificó en los filtros de la página de reserva",
                touch5: "Presencial",
                feel5: "1",
                con5: "Debe volver a barajar otras opciones",
                ima5: "cartoon-why.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Aprovechando que estaba en Valencia consigue contactar " + 
                "con una chica que también alquilaba una habitación",
                touch6: "Presencial",
                feel6: "5",
                con6: "El piso y la compañera se ajustan a sus intereses y decide alquilarlo",
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
                goal1: "Quiere preparar un viaje con su familia para Verano, tiene que cuadrar vacaciones de su marido con días libres de sus hijos",
                touch1: "agenda",
                feel1: "4",
                con1: "Quiere ir a algun destino español con interés turístico y que guste al resto de su familia",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECISION ***/ 
                goal2: "Registrarse en una plataforma Web de alquiler de pisos para iniciar su búsqueda personalizada",
                touch2: "Servicio (plataforma Web)",
                feel2: "3",
                con2: "Tiene que registrarse y realizar las búsquedas ella sola, que con pocas habilidades tecnológicas le resulta difícil",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Inicia la búsqueda",
                touch3: "Móvil (página web)",
                feel3: "2",
                con3: "No consigue ",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca una oferta en hoteles cerca de playa y con parque atracciones",
                touch4: "Móvil (webapp)",
                feel4: "2",
                con4: "No hay mucha información del alojamiento ni de lo que hay alrededor, aunque el precio está bien,"+
                " va por la calle por lo que está incómoda",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reserva a traves de la aplicación ",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "Le pide muchos datos y le resulta incómodo completar formulario",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consiguie reservar para vacaciones pero no era lo que tenía en mente",
                touch6: "Ordenador (reserva OK)",
                feel6: "2",
                con6: "Tendrá que buscar más información del lugar para ver que actividades ofrece y donde aparacar!",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



