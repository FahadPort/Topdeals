<?php include 'include/head.php';?>


<section id="login">

<div class="login-container lsform">
        <h1>Login</h1>
        <form action="login.php" method="post">
            <div class="input-group">
                <input type="email" id="email" name="email" placeholder="Email" required>
            </div>
            <div class="input-group">
                <input type="password" id="password" name="password" placeholder="Password" required>
                <span class="toggle-password" onclick="togglePasswordVisibility()">👁️</span>
            </div>
            <div class="links">
                <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" class="login-button">Login</button>
            <p>Don't have an account? <a href="/topdeals/signup.php">Sign up</a></p>
        </form>
    </div>
</section>




<?php include 'include/links.php';?>