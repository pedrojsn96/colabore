function getComentario() {

	this.comentarios = [{
			id:0,
			messagem: "Este buraco já furou o pneu do meu carro 2 vezes!"
		},
		{
			id:1,
			messagem: "Quando chove fica o congestionamento por conta dele!"
		}];

	this.addComentario = function(comment){

  		this.comentarios.push(comment);

  }

}