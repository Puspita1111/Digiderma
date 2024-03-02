// import React, { useState } from "react";
// //import { useNavigate } from "react-router-dom";

// const Login = (props) => {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [emailError, setEmailError] = useState("")
//     const [passwordError, setPasswordError] = useState("")
    
//    // const navigate = useNavigate();
        
//     const onButtonClick = () => {
//         // You'll update this function later...

//         // Set initial error values to empty
//         setEmailError("")
//         setPasswordError("")

//         // Check if the user has entered both fields correctly
//         if ("" === email) {
//             setEmailError("Please enter your email")
//             return
//         }

//         if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
//             setEmailError("Please enter a valid email")
//             return
//         }

//         if ("" === password) {
//             setPasswordError("Please enter a password")
//             return
//         }

//         if (password.length < 7) {
//             setPasswordError("The password must be 8 characters or longer")
//             return
//         }

//         // Authentication calls will be made here...       


//     }

//     return <div className={"mainContainer"}>
//         <div className={"titleContainer"}>
//             <div>Login</div>
//         </div>
//         <br />
//         <div className={"inputContainer"}>
//             <input
//                 value={email}
//                 placeholder="Enter your email here"
//                 onChange={ev => setEmail(ev.target.value)}
//                 className={"inputBox"} />
//             <label className="errorLabel">{emailError}</label>
//         </div>
//         <br />
//         <div className={"inputContainer"}>
//             <input
//             type="password"
//                 value={password}
//                 placeholder="Enter your password here"
//                 onChange={ev => setPassword(ev.target.value)}
//                 className={"inputBox"} />
//             <label className="errorLabel">{passwordError}</label>
//         </div>
//         <br />
//         <div className={"inputContainer"}>
//             <input
//                 className={"inputButton"}
//                 type="button"
//                 onClick={onButtonClick}
//                 value={"Log in"} />
//         </div>
//     </div>
// }

// export default Login


// Login.js
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Simulate login (replace this with your actual login logic)
    // For simplicity, we'll just show an alert for successful login
    alert('Login successful!'); // Replace with actual navigation or state update
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <label>
           Email:
          <input
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <button type="submit" style={styles.button}>
          Login
        </button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginTop: '50px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    margin: '5px 0',
    padding: '8px',
    borderRadius: '3px',
    border: '1px solid #ccc',
  },
  button: {
    background: '#4CAF50',
    color: 'white',
    padding: '10px',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
    textAlign: 'center',
  },
};

export default Login;
