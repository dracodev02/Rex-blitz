const Header = () => {
  const items = ["About", "Roadmap", "Social"];

  return (
    <div className="backdrop-blur-md h-[92px] border-dashed-bottom bg-[#F3FAFF80] w-screen fixed top-0 left-0 z-10 ">
      <div className="max-w-desktop h-full m-auto flex justify-between items-center ">
        <div>
          <p className="text-[32px] text-center leading-8 border-logo">
            <span className="text-green"> Red</span> <br />
            <span
              className="
        text-yellow"
            >
              Blitz
            </span>
          </p>
        </div>
        <div className="flex gap-8">
          {items.map((item) => {
            return (
              <p className="cursor-pointer text-stroke" key={item}>
                {item}
              </p>
            );
          })}
        </div>
        <div className="bg-green cursor-pointer border-stroke border-[4px] py-3 px-8 rounded">
          <p className="text-stroke leading-5 select-none">{`Let's play`}</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
