import React from 'react'

export default function Login() {
    return (
        <div>
             <div className="container">
        <div className="form-container">
          <h2>Login</h2>
           <form>
             <input type="email"name="email"placeholder="Enter Email "className="email"/>
             <br/>
             <input type="password"name="pass"placeholder="Enter Password"className="pass"/>
             <br/>
             <a href="#" class="link">
        forgot your password ?
      </a>
             <button><span className="reg">Login</span></button>
           <span>Don't have an account ? <a href="/" className="login-link">Register</a></span>
           </form>
        </div>
     </div>
        </div>
    )
}
