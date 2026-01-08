<?php
session_start();
include __DIR__ . "/connectDatabase.php";
// include "connectDatabase.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $department = $_POST['department'];
    $prn = $_POST['prn'];
    $password = $_POST['password'];


    if (empty($department) || empty($prn) || empty($password)) {
        echo "❌ All fields are required";
        exit();
    }

    $stmt = $conn->prepare(
        "SELECT * FROM student_login WHERE prn=? AND password=? AND department=?"
    );
    $stmt->bind_param("sss", $prn, $password, $department);
    $stmt->execute();
    $result = $stmt->get_result();


    // $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) === 1) {
    $_SESSION['student_prn'] = $prn;
    $_SESSION['department'] = $department;

    header("Location: ../../Pages/StudentDash.html");
    exit();
    }else {
        echo "❌ Invalid PRN or Password";
    }
}