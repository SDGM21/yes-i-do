import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = ({ redirect }: { redirect: string }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(redirect);
  });

  return (
    <>
      <div>
        <div className="container">
          <h1>Loading</h1>
        </div>
      </div>
    </>
  );
};

export default Redirect;
