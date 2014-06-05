// Data

	var hoje = new Date()
	var dia = hoje.getDate()
	var mes = hoje.getMonth()
	var ano = hoje.getFullYear()
	var today;

	if (dia < 10){ dia = "0" + dia; }
	if (ano < 2000){ ano = "19" + ano; }

	//O mes começa em zero, então soma-se 1
	today = dia+"/"+(mes+1)+"/"+ano;
	
	//alert(today);

	document.write(today);
