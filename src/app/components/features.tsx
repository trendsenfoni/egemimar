import { CookingPotIcon, DropletsIcon, Grid3X3Icon, Hammer, KeyRoundIcon, ZapIcon } from 'lucide-react'

export function MainFeatures() {
  return (<>
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-1auto px1-4">
        <h2 className="text-3xl font-bold text-center mb-12">Hizmetlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-blue-600">
            <Hammer className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Konut İnşaatı</h3>
            <p className="text-gray-600">İhtiyaçlarınıza göre özel ev yapımı ve renovasyonlar.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-blue-600">
            <KeyRoundIcon className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Anahtar Teslim Tadilat</h3>
            <p className="text-gray-600">Dış cephe mantolama, banyo ve mutfak tadilat hizmetleri.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-blue-600">
            <DropletsIcon className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Su Tesisat</h3>
            <p className="text-gray-600">Su tesisat döşeme ve tadilat.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-blue-600">
            <ZapIcon className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Elektrik</h3>
            <p className="text-gray-600">Elektrik tesisat kurulum ve tamir hizmeleri.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-blue-600">
            <CookingPotIcon className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mutfak</h3>
            <p className="text-gray-600">Mutfak yenileme, sıfır mutfak yapımı.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-blue-600">
            <Grid3X3Icon className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Laminant Parke</h3>
            <p className="text-gray-600">Laminant parket döşeme ve tadilatı.</p>
          </div>
        </div>
      </div>
    </section>
  </>)
}