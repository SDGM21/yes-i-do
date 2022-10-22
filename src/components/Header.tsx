import logoTest from "../assets/vite.svg";

const Header = () => {
  return (
    <>
      <nav>
        <div>
          <button className={"waves-effect waves-light btn"}>
            <img src={logoTest} alt="Y.I.S. logo" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
