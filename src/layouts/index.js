import Footer from "./footer";
import Hearder from "./header";
import Sidebar from "./sidebar";

function DefaulLayout({ children }) {
  return (
    <div>
      <Hearder />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaulLayout;
