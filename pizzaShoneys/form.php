<?php
$folder = array($_POST['Report1'],$_POST['Report3']);
$image=$_FILES['Reportf'];
if(isset($_POST['submit'])){
	//var to set root to client folder
	$rdirectory=$_SERVER['DOCUMENT_ROOT'].DIRECTORY_SEPARATOR.'Reports'.DIRECTORY_SEPARATOR.$folder[0];
		
	//make client's directory
	mkdir($rdirectory,0777);
	
	//set directory to client folder
	$directory=$rdirectory.DIRECTORY_SEPARATOR;
	
	//create client text file and write to it
	$txtfile=fopen($directory.$folder[0].".txt", "w");
	fwrite($txtfile, $folder[1]);
	
	//file properties
	$file_name=$image['name'];
	$file_tmp=$image['tmp_name'];
	$file_size=$image['size'];
	$file_error=$image['error'];
	
	//get file extension
	$file_ext=explode('.',$file_name);
	$file_ext=strtolower(end($file_ext));
	
	//allowed file extensions
	$allowed=array('txt','jpg','jpeg','png','zip','rar');
	if(in_array($file_ext,$allowed)){
		if($file_error === 0){
			if($file_size <=5000000){
				$file_name_new=$folder[0].'.'.$file_ext;
				$file_destination=$directory.DIRECTORY_SEPARATOR.$file_name_new;
				if(move_uploaded_file($file_tmp, $file_destination)){
					header("Location: paymentpage.html");
					die();
				} else{ "The file was unable to be moved to the client's folder. Please contact support.";}
			} else{ echo "The file is too large. Please only upload a file less than 5mb.";}
		} else{ echo "An unknown error has occured. Please contact support.";}
	} else{ echo "The file type is not supported. Please use only .txt, .jpg, or .png.";}
} else{
	echo "NOTHING WAS UPLOADED!";
}
?>
