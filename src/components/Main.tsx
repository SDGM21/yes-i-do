const Main = ({ children }: { children: any }) => {
  return (
    <>
      <main style={{ flex: "1 0 auto" }} className="valing-wrapper container">
        {children}
      </main>
    </>
  );
};

export default Main;
