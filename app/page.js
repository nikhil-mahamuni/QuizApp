import QuizzArea from "@/components/QuizzArea";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="poppins-semibold">
      <header>
        <Navbar></Navbar>
      </header>
      <QuizzArea></QuizzArea>
    </div>
  );
}
