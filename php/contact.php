<?php
//require_once("db.php");					/* Database Class */
require_once('utils/is_email.php');		/* Email Validation Script */

/* Handle Ajax Request */
if(isset($_POST['newcontact'])){
	$contact = new Contact();
	unset($contact);
}
else{
	header('Location: /');
}

/* Class Contact */
class Contact{
	
	private $db; 						/* the database obj */
	
	private $errors 		= array();  /* holds error messages */
	private $num_errors;   				/* number of errors in submitted form */
	
	public function __construct(){
		//$this->db = new DB();
		if(isset($_POST['newcontact']))
			$this->processNewMessage();
		else
			header("Location: /");
	}

	public function processNewMessage(){
		
		$email		= $_POST['email'];
		$name		= $_POST['name'];
		$phone		= $_POST['mobile'];
		$website	= $_POST['website'];
		$message	= $_POST['message'];		
		
		/* Server Side Data Validation */
		
		/* Email Validation */
		if(!$email || mb_strlen($email = trim($email)) == 0)
			$this->setError('email','campo obligatorio');
		else{
			if(!is_email($email))
				$this->setError('email', 'email invalido');
			else if(mb_strlen($email) > 120)
				$this->setError('email', 'too long! 120');
		}
		
		/* Name Validation */
		if(!$name || mb_strlen($name = trim($name)) == 0)
			$this->setError('name', 'campo obligatorio');
		else if(mb_strlen(trim($name)) > 120)
			$this->setError('name', 'too long! 120 characters');
		
		/* Website Validation */
		if(!mb_eregi("^[a-zA-Z0-9-#_.+!*'(),/&:;=?@]*$", $website))
			$this->setError('website', 'invalid website');	
		elseif(mb_strlen(trim($website)) > 120)
			$this->setError('website', 'too long! 120 characters');
		
		/* Message Validation */
		$message = trim($message);
		if(!$message || mb_strlen($message = trim($message)) == 0)
			$this->setError('message','campo obligatorio');
		elseif(mb_strlen($message) > 300)
			$this->setError('message', 'too long! 300 characters');
			
		/* Errors exist */
		if($this->countErrors() > 0){
			$json = array(
				'result' => -1, 
				'errors' => array(
								array('name' => 'email'		,'value' => $this->error_value('email')),
								array('name' => 'name' 		,'value' => $this->error_value('name')),
								array('name' => 'mobile' 	,'value' => $this->error_value('mobile')),
								array('name' => 'website'	,'value' => $this->error_value('website')),
								array('name' => 'message'	,'value' => $this->error_value('message'))
							)
				);				
			$encoded = json_encode($json);
			echo $encoded;
			unset($encoded);
		}
		/* No errors, insert in db*/
		else{
			//if(($ret = $this->db->dbNewMessage($email, $name, $website, $message)) > 0){
			//	$json = array('result' 		=> 1); 
			//	if(SEND_EMAIL)
			//		$this->sendEmail($email,$name,$website,$message);
			//}	
			//else
			//	$json = array('result' 		=> -2); /* something went wrong in database insertion  */
			$this->sendEmail($email,$name,$website,$message);
			$json = array('result' 		=> 1); 
			$encoded = json_encode($json);
			echo $encoded;
			unset($encoded);
		}
	}
	
	public function sendEmail($email,$name,$website,$message){
		/* Just format the email text the way you want ... */
		/*$message_body		= "Hola, ".$name."(".$email." - ".$website.") sent you a message from yoursite.com\n"
									."email: ".$email."\n"
									."message: "."\n"
									.$message; */

		//$headers			= "From: ".EMAIL_FROM_NAME." <".EMAIL_FROM_ADDR.">";
		$message_body		=
'<style>
table, td{
	font: 14px/130% Arial, Helvetica, sans-serif;
	width:500px;		
	text-align: justify;
}
table th{
	color:#a62300; 
}
table td.name{	
	width:15%;
	color: #025167;	
}
table td.get{
	width:85%;		 
	color: #025167;	
}
</style>
<table cellpadding="4" cellspacing="0"  border="0" height:>
	<thead>
		<tr>
			<th colspan="2" align="center">Nuevo Mensaje</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="name" align="left" valign="top">Nombre:</td>
			<td class="get">'.$name.'</td>
		</tr>
		<tr>
			<td class="name" align="left" valign="top">Email</td>
			<td class="get">'.$email.'</td>
		</tr>
		<tr>
			<td class="name" align="left" valign="top">Telefono:</td>
			<td class="get">'.$mobile.'</td>
		</tr>
		<tr>
			<td class="name" align="left" valign="top">Website:</td>
			<td class="get" ><a href="http://'.$website.'" target="_blank">'.$website.'</a></td>
		</tr>
		<tr>
			<td class="name" align="left" valign="top">Mensaje:</td>
			<td class="get">'.$message.'</td>
		</tr>
	</tbody>
</table>';
		$to = "themastermiguel@hotmail.com,kev3280@hotmail.com,jimmyasra@hotmail.com,ppardoz@hotmail.com,pdolorier@hotmail.com";
		$subject = "Test mail";
		$headers = "Content-Type: text/html;charset=utf-8";
		//return mail(EMAIL_TO,MESSAGE_SUBJECT,$message_body,$headers);
		return mail($to,$subject,$message_body,$headers);
	}
	
	public function setError($field, $errmsg){
		$this->errors[$field] 	= $errmsg;
		$this->num_errors 		= count($this->errors);
	}
	
	public function error_value($field){
		if(array_key_exists($field,$this->errors))
			return $this->errors[$field];
		else
			return '';
	}
	
	public function countErrors(){
		return $this->num_errors;
	}
};
?>