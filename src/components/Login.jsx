/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from "react";
import { usePostLoginMutation } from "../API";
import { useNavigate } from "react-router-dom";


export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // postLogin is the mutation trigger, NEED THIS
  const[postLogin] = usePostLoginMutation();


  const handleLogin = async (event) => {
    // Perform login logic here, e.g., send a request to authenticate the user
    event.preventDefault();
    const result = await postLogin({
        email,
        password,
    })

      //check for error key
      if(result.error){ setError(result.error.data.message);

      }
      else{ setSuccess(result.data.message);
        props.setToken(result.data.token);
        navigate(`/users/me`)}
  };

  return (
    <div className="Login">
    {error && <p>{error}</p>}
    {success && <p>{success}</p>}
    <h2> Please Login</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={handleEmailChange} />

      <label>Password:</label>
      <input type="password" value={password} onChange={handlePasswordChange} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
