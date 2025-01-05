import { WhatsappIcon } from 'next-share'
import Link from 'next/link'

export function MainCallToAction() {
  return (<>
    <section id="call-to-action" className="py-16 bg-yellow-500">
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
  </>)
}