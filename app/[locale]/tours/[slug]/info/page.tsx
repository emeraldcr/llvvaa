export default async function TourInfoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Tour Information: {slug}</h1>
        <p className="text-gray-600">
          This page will contain detailed information about the {slug} tour.
        </p>
      </div>
    </div>
  );
}