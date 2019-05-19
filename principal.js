const opciones={
	id:{
		demand:true,
		alias:'i'
	},
	nombre:{
		demand:true,
		alias:'n'
	},
	cedula:{
		demand:true,
		alias:'c'
	}

}
const argv = require('yargs')
.command('inscribir','Inscribirme en el curso', opciones)
.argv;

const fs =require('fs');

let cursos=[

	{
		id:'123456',
		nombre:'NodeJS',
		horas:32,
		valor:0
	},
	{
		id:'654321',
		nombre:'Ingles',
		horas:64,
		valor:200000
	},
	{
		id:'456123',
		nombre:'Bolsa de valores',
		horas:32,
		valor:150000
	}
];


let imprimirOferta=(cursos,posicion,retornar)=>
{
		let curso=cursos[posicion];
		let Resultados='El curso se llama: '+curso.nombre+'\n'+
						'Tiene una duración de : '+curso.horas+'\n'+
						'Tiene un valor de : '+curso.valor+'\n'+
						'Id de inscripción es: '+curso.id+'\n'+
						'############################################'+'\n'+
						'############################################'
		if(retornar=='N')
		{
			setTimeout(function(){
		 		console.log(Resultados);
			},2000); 
		}
		else
		{
			return Resultados;
		}


}

let imprimir=(cursos)=>
{
	console.log('Oferta d cursos');

	imprimirOferta(cursos,0,'N');
	setTimeout(function(){
		imprimirOferta(cursos,1,'N');
	},2000); 
	setTimeout(function(){
		imprimirOferta(cursos,2,'N');
	},4000); 
}




if( Object.keys(argv._).length === 0)
{
	imprimir(cursos)
}
else
{


	let cursoInscribir = cursos.find( curso => curso.id == argv.id);

	if( cursoInscribir==null)
	{
		console.log('\nHa ingresado un Id que no corresponde a ningun curso\n');
		imprimir(cursos)
	}
	else
	{

		//console.log(cursoInscribir);

		let Resultados='\nEl estudiante: '+argv.nombre+'\n'+
							'con cedula: '+argv.cedula+'\n\n'+
							'El curso se llama: '+cursoInscribir.nombre+'\n'+
							'Tiene una duración de : '+cursoInscribir.horas+'\n'+
							'Tiene un valor de : '+cursoInscribir.valor+'\n'+
							'Id de inscripción es: '+cursoInscribir.id+'\n'+
							'############################################'+'\n'+
							'############################################\n'
		fs.writeFile('matricula.txt',Resultados,(err)=>{
			if(err) throw(err);

			console.log('\n\nEl archivo se ha creado exitosamente "matricula.txt"');
			console.log('Con el siguiente texto\n\n');
			console.log('############################################'+'\n'+
							'############################################')
			console.log(Resultados);
		})
	}
}





