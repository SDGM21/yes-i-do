const Error = ({ error }: { error: string }) => {
  return (
    <>
      <div className="container row">
        <h5 className="red col s8 center">{error}</h5>
      </div>
    </>
  );
};

export default Error;
