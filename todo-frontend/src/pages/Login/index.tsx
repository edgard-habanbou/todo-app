import "./index.css";

function Login() {
  return (
    <div className="full-screen flex center login-page">
      <div className="background-primary login-form">
        <div className="flex center column full-height">
          <form className="flex column gap center full-width">
            <div className="flex column gap">
              <label htmlFor="email" className="color-white">
                Email
              </label>
              <input type="email" id="email" name="email" className="input" />
            </div>
            <div className="flex column gap">
              <label htmlFor="password" className="color-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="input"
              />
            </div>
            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
