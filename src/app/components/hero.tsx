import Link from 'next/link'
import Image from 'next/image'
import { WhatsappIcon } from 'next-share'

export function MainHero() {
  return (<>
    <section className="relative bg-gray-900 text-white">
      <Image
        src="/img/insaat/photo-collage.jpg"
        alt="İnşaat sahası"
        width={1920}
        height={1080}
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
  </>)
}