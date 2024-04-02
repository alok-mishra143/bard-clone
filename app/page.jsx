import Main from "@/components/Main/Main";
import NavBar from "@/components/Navbar/Navbar";

import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="dash">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}
