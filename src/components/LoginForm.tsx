const LoginForm = () => {
  const handleLogin = () => {};

  const handleChange = () => {};
  return (
    <form onSubmit={handleLogin} className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">email</i>
          <label htmlFor="icon_prefix">Email</label>
          <input
            onChange={handleChange}
            id="icon_prefix"
            name="email"
            type="text"
            className="validate"
          />
        </div>
        <div className="input-field col s12">
          <i className="material-icons prefix">vpn_key</i>
          <label htmlFor="icon_password_prefix">Password</label>
          <input
            onChange={handleChange}
            id="icon_password_prefix"
            name="password"
            type="password"
            className="validate"
          />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
