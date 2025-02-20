
import { ArrowBigLeft } from 'lucide-react'
import type { Metadata } from "next"
import Link from 'next/link'
import { redirect } from 'next/navigation'

// import {redirect, useRouter} from 'next/navigation'
export const metadata: Metadata = {
  title: 'Page Not Found - AliAbi-org',
  description: 'TODO: description eklenecek. Excepteur fugiat labore labore enim aliqua deserunt aliqua amet.',
  icons: '/img/webicon.png',
}

const Page404 = () => {


  return (
    <div className='rel11ative w-full h-screen flex justify-center items-center'>
      <div className='grid grid-cols-1 gap-4'>
        <h2 className='text-2xl'>Error 404 - Page not found.</h2>
        <div className='flex justify-center'>
          <Link className="bg-primary px-3 py-3 text-white rounded-md shrink flex justify-center max-w-24" href="/home" title="go to home page"
          >
            <ArrowBigLeft />
          </Link>
        </div>
      </div>
    </div>)

}

export default Page404