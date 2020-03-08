/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2019/20";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Germán Palomares",
				Photo: "persona1_matthew.jpg",
				Quote: "El tiempo vuela",
				Age: 34,
				Occupation: "Freelancer a tiempo completo",
				Family: "Soltero desde hace 5 años",
				Location: "Jaén (Torredonjimeno)",
				Character: "Le gusta pasar tiempo en casa",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Cambiar de aires", "Conocer gente nueva, tener nuevas experiencias", "Encontrar un trabajo que le permita socializar"],
				Frustrations: ["Se considera una persona con pocas habilidades sociales", "No encuentra pareja"],
				Bio: "Germán nació en Valencia capital, lugar en el que se crió junto a sus padres. " + 
				"Es hijo único y desde pequeño se aficionó a la informática. Por este motivo, a la " + 
				"edad de 20 años, comenzó un ciclo formativo de programación, en el que conoció a" + 
				"su expareja. Mantuvieron una relación de 7 años. A los 27 años, tras la ruptura, decidió mudarse" +
				"a un pueblo de Jaén, Torredonjimeno, buscando tranquilidad. Lleva trabajando desde casa como freelancer" +
				"desde su llegada al pueblo, en el sector de desarrollo software. Ahora, 7 años tras su llegada, " +
				"se ha dado cuenta de que se siente solo, "+ 
				"le gustaría tener más tiempo libre, conocer a gente nueva con la que pueda salir a divertirse y por qué no, " +
				"encontrar pareja y formar una familia.",

				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 5 }
					
				], 
				Contextos: "Dejar atrás la vida tan aburrida que lleva. Le gustaría conocer gente nueva " +
				"para salir, hacer más deporte y por qué no, volver a enamorarse y formar una familia." +
				" Se siente aburrido del pueblo en el que vive, por lo que le gustaría también volver a " + 
				"Valencia, para estar cerca de sus padres que se hacen mayores y los ve muy poco.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 3 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 1 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Eva Sanchez",
				Photo: "persona2_eva.jpg",
				Quote: "Live your life",
				Age: 54,
				Occupation: "Ama de casa",
				Family: "No tiene padres, pero tiene marido y dos hijos.",
				Location: "Pais Vasco (Bilbao)",
				Character: "Afable, amiga de sus amigos y decidida.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Mantener una relacion cercana con sus hijos", "Viajar a China.", "Desarrollarse como artista.", 
				"Exponer una de sus creaciones en el Museo Guggenheim."],
				Frustrations: ["Su marido pasa poco tiempo con ella, pues es camionero y realiza rutas internacionales.", 
				"Sus obras artísticas nunca han conseguido el éxito que a ella le gustaría",  
				"Tiene pocas habilidades tecnológicas y cree que se está quedando anticuada."],
				Bio: "Nació en Guinea Ecuatorial pero a la edad de 5 años vino a España con sus padres, donde iniciaron una nueva vida."+ 
				" Tras las primeras dificultades de adaptación, se decantó por la pintura, desarrollando sus dotes artísticas desde pequeña. " +
				" Lleva con su pareja desde que tenía 16 años. Tuvo su primer hijo a los 20, antes de acabar la carrera y el segundo a los "+
				" 27, ambos de género masculino. Su segundo hijo tuvo un grave accidente con 8 años, del que acabó recuperándose. Siempre ha tenido buena relación con "+
				" su marido y mantiene una grata relacion con sus amistades, con las que sale a andar a diario. Los hijos son autosuficientes"+
				"y dispone de tiempo libre. Le encantaría recorrer España.",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 1 }					
				], 
                Contextos:   "Ha intentado enseñarse a usar plataformas de alquiler de pisos sin éxito pues le resultan difíciles de usar."+ 
                " Le gustaría tener la posibilidad de pasar más tiempo con su familia en lugares desconocidos hasta la fecha." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 5 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])