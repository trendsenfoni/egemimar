import { PhoneCallIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
export function MainFooter() {
  return (<>
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className='max-w-xs'>
              <Image src={'/img/egemimar-logo.png'} width={767} height={216} alt='logo' />
            </div>

            {/* <h3 className="text-xl font-semibold mb-4">İnşaatCo</h3> */}
            <p>2010'dan beri mükemmellik inşa ediyoruz</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">İletişim</h3>
            <p>İnşaat Caddesi No: 123 Yapıkent</p>
            <p>35860 Torbalı, İzmir/Türkiye</p>
            <p>
              <Link href={`tel:+905514830723`} className='flex gap-2 items-center'>
                <PhoneCallIcon size={'20px'} />
                +90 (551) 483 07 23
              </Link>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Bizi Takip Edin</h3>
            <div className="flex space-x-4 text-sm">
              <a href="https://www.instagram.com/egemimar.com.tr/" target='_blank' className="hover:text-yellow-500">Instagram</a>
              <a href="https://www.youtube.com/channel/UCjX2Y0bIcIffgXhtQCoA4mg" target='_blank' className="hover:text-yellow-500">Youtube</a>
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
  </>)
}