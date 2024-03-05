import { useEffect, useState } from "react";
import "./index.css";
import Loading from "../../components/Loading";
import { userApi } from "../../network/axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [register, setRegister] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (email === "" || password === "") {
      setError(true);
      setLoading(false);
      return;
    }
    if (register) {
      if (name === "") {
        setError(true);
        setLoading(false);
        return;
      }
      const response = await userApi.register({ email, password, name });
      if (response) {
        localStorage.setItem("token", response.token);
        navigate("/todos");
      } else {
        setError(true);
      }
    } else {
      const response = await userApi.login({ email, password });
      if (response.token) {
        localStorage.setItem("token", response.token);
        navigate("/todos");
      } else {
        setError(true);
      }
    }

    setLoading(false);
  };

  const checkToken = async () => {
    const token = "Bearer " + localStorage.getItem("token");
    if (token) {
      const res = await userApi.checkToken({ token: token });
      if (res.message === "Token is valid") {
        navigate("/todos");
      }
    }
  };
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <>
      {loading && <Loading message="Loading in..." />}
      <div className="full-screen flex center login-page">
        <div className="background-primary login-form">
          <div className="flex center column full-height">
            <div className="flex column gap center full-width">
              <div className="flex column gap margin">
                <div className="flex column">
                  <label htmlFor="email" className="color-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={"input " + (error ? "input-error" : "")}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError(false);
                    }}
                  />
                  {error && (
                    <span className="span-error">
                      {register
                        ? " Something went wrong, please try again"
                        : "Invalid email or password"}
                    </span>
                  )}
                </div>
                {register && (
                  <div className="flex column">
                    <label htmlFor="name" className="color-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="input"
                      onChange={(e) => {
                        setName(e.target.value);
                        setError(false);
                      }}
                    />
                    {error && (
                      <span className="span-error">
                        {register
                          ? " Something went wrong, please try again"
                          : "Invalid email or password"}
                      </span>
                    )}
                  </div>
                )}
                <div className="flex column">
                  <label htmlFor="password" className="color-white">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError(false);
                    }}
                    className={"input " + (error ? "input-error" : "")}
                  />
                  {error && (
                    <span className="span-error">
                      {register
                        ? " Something went wrong, please try again"
                        : "Invalid email or password"}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex column center gap full-width">
                <button
                  className="btn"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  {register ? "Register" : "Login"}
                </button>
                <button
                  className="btn-menu"
                  onClick={() => {
                    setRegister(!register);
                    setError(false);
                  }}
                >
                  {register ? "Login" : "Register"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
