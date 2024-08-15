<?php include 'include/head.php';?>


<section id="login">

<div class="login-container lsform">
<h1>Sign Up</h1>
        <form action="register.php" method="post">
            <div class="input-group">
                <input type="text" id="name" name="name" placeholder="Name" required>
            </div>
            <div class="input-group">
                <input type="email" id="email" name="email" placeholder="Email" required>
            </div>
            <div class="input-group">
                <input type="password" id="password" name="password" placeholder="Password" required>
                <span class="toggle-password" onclick="togglePasswordVisibility()">👁️</span>
            </div>
            <button type="submit" class="login-button">Sign Up</button>
            <p>Already have an account? <a href="/topdeals/login.php">Login</a></p>
        </form>
    </div>
</section>


<?php include 'include/links.php';?>