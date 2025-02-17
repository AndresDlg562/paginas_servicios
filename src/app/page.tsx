import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl font-bold">
          Pagina de inicio
        </h1>
        <h2 className="text-3xl font-bold">
          Bienvenido
        </h2>

        
        <button type="button" className="rounded bg-red-400 w-40">
          <h2 className="text-3xl font-bold">
            Click 
          </h2>
        </button>
      </div>
    </div>
    
  );
}
