<?php

if(isset($_POST) && !empty($_POST)){
    $name = $_POST['name'];
    $user =$_POST['user'];

    if($name == 'admin' && $user == 'admin')
    {
        ?>
        {
            "success":true,
            "secret": "this is the secret no one know but the admin"
        }
        <?php
    }
    else {
        ?>
        {
            "success":false,
            "secret": "Invalid credentials"

        }
        <?php
    } 
    else{
?>
{
    "success":false,
    "secret": "only Post accepted"

}
<?php
    }
}
?>