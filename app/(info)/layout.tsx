import { Navbar } from "@/components";


export default function InfoLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    // Se llema fragmento
    <>
      <Navbar></Navbar>
      <main className="flex flex-col items-center p-2">
            <span className="text-lg">Hola Mundo</span>
            { children }
      </main>
    </>
     
  );
}