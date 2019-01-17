var abi = [
    {
		"constant": false,
		"inputs": [
			{
				"name": "numeroEntradasComprar",
				"type": "uint256"
			},
			{
				"name": "rut",
				"type": "bytes32"
			}
		],
		"name": "comprarEntrada",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "contadorEntradas",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "creadorEvento",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "entradas",
		"outputs": [
			{
				"name": "addressComprador",
				"type": "address"
			},
			{
				"name": "rut",
				"type": "bytes32"
			},
			{
				"name": "entradasCompradas",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "fechaTermino",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "nombreEvento",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "numeroEntradas",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "valorEntradas",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "verEntrada",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]; // el abi del contrato
var direccionContrato = "0xdec5459c41dea417d50e3f490aff067ac629c5ed"; // la dirección de tu contrato
var contrato = web3.eth.contract(abi);
var funcionesContrato = contrato.at(direccionContrato);

function comprarEntrada() { 
	
	var nEntradas = $("input[name=numeroEntradas").val(); // obtengo el valor del input
	var dni = $("input[name=dni").val(); // obtengo el valor del input

	funcionesContrato.comprarEntrada(nEntradas, dni, function(error, respuesta){

		if(error) throw error; // NO firmó la transacción en Metamask
		alert("Entrada comprada"); // "respuesta" == txhash de la transacción
	});
}

var codigoEntrada = 1337; // uint

funcionesContrato.verEntrada(codigoEntrada, function(error, respuesta){
	if(error) throw error; // NO firmó la transacción en Metamask
	var rutEntrada = web3.toAscii(respuesta[0]); // recibimos hex y lo pasamos a ascii
	rutEntrada = rutEntrada.match(/[0-9\.\-k]+/)[0] // eliminamos caracteres innecesarios
	var numeroEntradas = respuesta[1].c[0]; // obtenemos el n° de entradas
	console.log("Rut:" + rutEntrada + " N° entradas:" + numeroEntradas);
});

funcionesContrato.entradas(1337, function(error, respuesta){
	if(error) throw error; // NO firmó la transacción en Metamask
	var rutEntrada = web3.toAscii(respuesta[1]); // recibimos hex y lo pasamos a ascii
	rutEntrada = rutEntrada.match(/[0-9\.\-k]+/)[0] // eliminamos caracteres innecesarios
	var numeroEntradas = respuesta[2].c[0]; // obtenemos el n° de entradas
	console.log("Rut:" + rutEntrada + " | N° entradas: " + numeroEntradas);
});

funcionesContrato.numeroEntradas(function(error, respuesta){
	if(error) throw error;
	var entradasDisponibles = respuesta.c[0];
	console.log("Entradas disponibles:" + entradasDisponibles);
});


funcionesContrato.nombreEvento(function(error, respuesta){
	if(error) throw error;
	console.log("Nombre evento:" + respuesta)
});

funcionesContrato.nombreEvento(function(error, respuesta){
	if(error) throw error;
	console.log("Nombre evento:" + respuesta)
});

funcionesContrato.cambiarEstado(function(error, respuesta){
	if(error) throw error;
	console.log("Hash transacción:" + respuesta)
});