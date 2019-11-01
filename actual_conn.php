<?php

if (isset($_POST['submitted']))
{
	include('connect.php');

	$username = $_POST['uname'];
	$password = $_POST['pass'];
	$sqlinsert = "insert into login (username, password) values ('$username', '$password');";

	if (!mysqli_query($dbcon, $sqlinsert))
	{
		die("Error in inserting the record.");

	}//end of nested if stmt

	header('Location: home.html');
	//$newrecord = "1 record inserted";

} //end of main if stmt

?>


