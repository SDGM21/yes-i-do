import logoTest from "../../public/vite.svg";

const Header = () => {
  return (
    <>
      <nav>
        <div>
          <button>
            <img src={logoTest} alt="Y.I.S. logo" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
