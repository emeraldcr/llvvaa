import Nav from "../components/nav";
import Footer from "../components/footer";

export default function ASessions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20 space-y-8">
        <h1 className="text-4xl font-bold text-center">La Vieja A Sessions</h1>
        <p className="text-lg text-gray-700">
          La Vieja A Sessions es un evento artístico y educativo que invita a la comunidad a
          explorar la creatividad mediante talleres, charlas y presentaciones en vivo. Es un
          espacio abierto a todas las edades donde el aprendizaje se combina con la expresión
          cultural.
        </p>
      </main>
      <Footer />
    </div>
  );
}
