const LoginButton = ({ logo, provider }: { logo: string; provider: any }) => {
  const handlePopupLogin = (e: any) => {
    return;
  };
  return (
    <>
      <div className="col s6">
        <div className="hoverable card">
          <div className="card-image">
            <button
              onClick={handlePopupLogin}
              style={{
                cursor: "pointer",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <img src={logo} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginButton;
