"use client"

import Image from "next/image"
import Link from "next/link"
import { Building2, CookingPotIcon, DropletsIcon, Grid3X3Icon, Hammer, HardHat, KeyRoundIcon, Ruler, Truck, ZapIcon } from 'lucide-react'
import { WhatsappIcon, WhatsappShareButton } from 'next-share'

export default function ConstructionLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 max-w-48 md:max-w-64">
            <Image src={'/img/egemimar-logo.png'} width={767} height={216} alt='logo' />


          </Link>
          <div className="hidden md:flex space-x-4 justify-end">
            <Link href="#" className="text-gray-600 hover:text-gray-800">Ana Sayfa</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Hizmetler</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Projeler</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Hakkımızda</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">İletişim</Link>
          </div>
          <button className="md:hidden">
            <svg className="h-6 w-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="İnşaat sahası"
            width={1600}
            height={600}
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative container mx-auto px-4 py-24 md:py-32">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Vizyonunuzu İnşa Ediyor, Geleceği Şekillendiriyoruz</h1>
            <p className="text-xl mb-8">Konut ve ticari projeler için uzman inşaat hizmetleri</p>

            <Link
              href="https://api.whatsapp.com/send?phone=905514830723&text=EgeMimar%20teklif%20almak%20istiyorum"
              target='_blank'
              className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition duration-300 flex max-w-64 gap-2"
            >
              <WhatsappIcon size='24px' />  Ücretsiz Teklif Alın
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
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

        {/* Projects Showcase */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Son Projelerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Proje+${i}`}
                    alt={`Proje ${i}`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Proje Başlığı {i}</h3>
                    <p className="text-gray-600">Projenin kısa açıklaması ve benzersiz özellikleri.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Müşterilerimiz Ne Diyor?</h2>
            <blockquote className="text-xl italic mb-4">
              "EgeMimar beklentilerimizi aştı. Detaylara gösterdikleri özen ve kaliteye olan bağlılıkları eşsiz. Yeni ofis binamızdan daha mutlu olamazdık."
            </blockquote>
            <p className="font-semibold">- Ahmet Yılmaz, TechCorp CEO'su</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-yellow-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Projenize Başlamaya Hazır mısınız?</h2>
            <p className="text-xl mb-8">Ücretsiz danışmanlık ve teklif için bugün bize ulaşın.</p>
            <div className='flex justify-center'>
              <Link
                href="https://api.whatsapp.com/send?phone=905514830723&text=EgeMimar%20teklif%20almak%20istiyorum"
                target='_blank'
                className="bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition duration-300 flex max-w-64 gap-2"
              >
                <WhatsappIcon size='24px' />  İletişime Geçin
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">İnşaatCo</h3>
              <p>1995'ten beri mükemmellik inşa ediyoruz</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">İletişim</h3>
              <p>İnşaat Caddesi No: 123</p>
              <p>Yapıkent, 34000</p>
              <p>Telefon: (0212) 123 45 67</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Bizi Takip Edin</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-yellow-500">Facebook</a>
                <a href="#" className="hover:text-yellow-500">Twitter</a>
                <a href="#" className="hover:text-yellow-500">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} EgeMimar İnşaat Proje Ltd.Şti. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

