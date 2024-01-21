const Welcome = () => {
  const bonjour = () => {
    console.log("Bonjour");
  };
  const bonsoir = (arg) => {
    console.log(arg);
  };
  return (
    <div>
      <button onClick={bonjour}>bonjour</button>
      <button onClick={(arg) => bonsoir}>Bonsoir</button>
      <button onClick={() => console.log("Bonne nuit")}>Bonne nuit</button>
    </div>
  );
};
export default Welcome;
