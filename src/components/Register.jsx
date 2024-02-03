/* TODO - add your code to create a functional React component that renders a registration form */
import { useState } from "react";
import { usePostRegisterMutation } from "../API";
import { useNavigate } from "react-router-dom";

export default function Register(props) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [postRegister] = usePostRegisterMutation ();
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
       const result = await postRegister({
            firstname,
            lastname,
            email,
            password,
        })

      //check for error key
      if(result.error){ setError(result.error.data.message);

      }
      else{ setSuccess(result.data.message);
        props.setToken(result.data.token);
        navigate(`/users/me`)}
}
  
    return (
    <div className="Register">
 <h2>Sign Up</h2>
    {error && <p>{error}</p>}
    {success && <p>{success}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
      </div>
    );
    }