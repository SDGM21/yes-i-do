const Main = ({ children }: { children: any }) => {
  return (
    <>
      <main style={{ flex: "1 0 auto" }} className="valing-wrapper">
        {children}
      </main>
    </>
  );
};

export default Main;
