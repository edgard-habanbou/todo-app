import { useState } from "react";
import "./index.css";
import Loading from "../../components/Loading";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    console.log(email, password);
  };

  return (
    <>
      {loading && <Loading message="Loading in..." />}
      <div className="full-screen flex center login-page">
        <div className="background-primary login-form">
          <div className="flex center column full-height">
            <div className="flex column gap center full-width">
              <div className="flex column gap">
                <label htmlFor="email" className="color-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex column gap">
                <label htmlFor="password" className="color-white">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                />
              </div>
              <button type="submit" className="btn" onClick={handleSubmit}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
