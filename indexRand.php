<?php
	function sorteiaUm(){
	
		$min = 0;
		$max = 10;
		$rand = Rand($min, $max);
		
		return "<p>Hello Random: ".$rand."</p>";
	}
	
	echo sorteiaUm();
?>
