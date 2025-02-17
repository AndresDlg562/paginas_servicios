import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl font-bold">
         En construcción
        </h1>
      </div>
    </div>
  );
}
