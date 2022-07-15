const ListaDeChamadas = ['João','Ana','Caio','Lara','Aline','Fabiana','Juliana']

//splice permite retirar e colocar elementos em qualquer lugar de array
//passando 3 param, da onde vai começar, quantos vai tirar e oque vai colocar no lugar
ListaDeChamadas.splice(1,2,'Rodrigo')



//Posso também não excluir nada e selecionar onde na array vai ser colocado o novo elemento. ex:
//ListaDeChamadas.splice(2,0,'Rodrigo')


console.log(`Lista de chamadas: ${ListaDeChamadas}`);