/* eslint-disable jsx-a11y/anchor-is-valid */

import { useAuth0 } from "@auth0/auth0-react";
import './botonLogin.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <a>
      <button className="botonLogin" onClick={() => loginWithRedirect()}>Login</button>
    </a>
  );
};

export default LoginButton;