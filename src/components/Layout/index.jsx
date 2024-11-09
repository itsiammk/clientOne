import FloatingActionButtons from "../FloatingAction";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";
import Scroller from "../scroller";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <FloatingActionButtons />
      {/* <Scroller /> */}
      <Footer />
    </div>
  );
};

export default Layout;