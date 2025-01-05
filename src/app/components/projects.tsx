import Image from 'next/image'

export function MainProjects() {
  return (<>
    <section id="projects" className="py-16">
      <div className="container mx11-auto px1-4">
        <h2 className="text-3xl font-bold text-center mb-12">Son Projelerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Image src={`/img/insaat/mutfak-1.jpg`} alt={`proje`} width={400} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Mutfak</h3>
              <p className="text-gray-600">Mutfak yenileme ve sıfır mutfak</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Image src={`/img/insaat/fayans-7.jpg`} alt={`proje`} width={400} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Fayans</h3>
              <p className="text-gray-600">Fayans döşeme, laminant parke</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Image src={`/img/insaat/mutfak-1.jpg`} alt={`proje`} width={400} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Parke, Mutfak, Fayans</h3>
              <p className="text-gray-600">Parke döşeme, mutfak yenileme</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>)
}