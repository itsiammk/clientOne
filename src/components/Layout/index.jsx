import Popup from "../CartPopup";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Popup />
      {children}
    </div>
  );
};

export default Layout;