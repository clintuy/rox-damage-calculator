import roxLogo from "../assets/images/rox_logo.webp";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center py-6">
      <img
        className="h-48 w-96 object-cover mx-auto my-4 rounded-lg"
        src={roxLogo}
        alt="ROX Logo"
      />
    </header>
  );
};

export default Header;
