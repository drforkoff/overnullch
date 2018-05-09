<?php
define('SALT', '6a3aa31db121b0b4038809d1c006df87b37b2c39d5aac5e64051018247c32ad8');

$hash = hash('sha256', $_GET['password'].SALT);
echo $hash;