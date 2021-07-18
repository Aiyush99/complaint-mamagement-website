import React from 'react'

export default function Register() {
    return (
        <div className="container">
        <div className="form-container">
          <h2>Register</h2>
           <form>
             <input type="text"name="name"placeholder="Enter Name"className="name"/>
             <br/>
             <input type="email"name="email"placeholder="Enter Email "className="email"/>
             <br/>
             <input type="password"name="pass"placeholder="Enter Password"className="pass"/>
             <br/>
             <input type="password"name="conf-pass"placeholder="Confirm Password"className="conf-pass"/>
             <br/>
            
             <button><span className="reg">Register</span></button>
           <span>Already have an account ? <a href="/login" className="login-link">Login</a></span>
           </form>
        </div>
     </div>
    )
}
