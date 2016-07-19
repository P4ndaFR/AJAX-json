	<?php
		$tabSize = 50;
		for ($i=0; $i < $tabSize ; $i++)
		{ 
			$tab[$i]['nom']="panda".$i;
		}
		$tab[$tabSize]['poney']=1;
		$encodedTab = json_encode($tab);
		echo $encodedTab;
	?>