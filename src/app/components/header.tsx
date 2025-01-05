import Link from 'next/link'
import Image from 'next/image'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MenuSquareIcon } from 'lucide-react'

export function MainHeader() {
  return (<>
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 max-w-48 md:max-w-64">
          <Image src={'/img/egemimar-logo.png'} width={767} height={216} alt='logo' />
        </Link>
        <div className="hidden md:flex space-x-4 justify-end">
          <Link href="/" className="text-gray-600 hover:text-gray-800">Ana Sayfa</Link>
          <Link href="#features" className="text-gray-600 hover:text-gray-800">Hizmetler</Link>
          <Link href="#projects" className="text-gray-600 hover:text-gray-800">Projeler</Link>
          {/* TODO: Hakkimizda bolumu ayri bir sayfa olarak gelistirilecektir */}
          <Link href="#" className="text-gray-600 hover:text-gray-800">Hakkımızda</Link>
          <Link href="#call-to-action" className="text-gray-600 hover:text-gray-800">İletişim</Link>
        </div>
        {/* TODO: Burada mobile menude scroll yaparken bi sikinti var gibi */}
        <div className='flex md:hidden'><MobileMenu /></div>
      </div>
    </header>
  </>)
}

function MobileMenu() {
  return (<>
    <DropdownMenu >
      <DropdownMenuTrigger asChild  >
        <Button className="rounded-md border border-gray-200 w-12 h-12 dark:border-gray-800"
          size="icon"
          variant="ghost"
        >
          <MenuSquareIcon />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" >
        <DropdownMenuItem>
          <Link className="rounded-md  py-2 hover:bg-gray-100 dark:hover:bg-gray-800" href={`/`}>
            Ana Sayfa
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="rounded-md  py-2 hover:bg-gray-100 dark:hover:bg-gray-800" href={`#features`}>
            Hizmetler
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="rounded-md  py-2 hover:bg-gray-100 dark:hover:bg-gray-800" href={`#projects`}>
            Projeler
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="rounded-md py-2 hover:bg-gray-100 dark:hover:bg-gray-800" href={`#`}>
            Hakkımızda
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link className="rounded-md py-2 hover:bg-gray-100 dark:hover:bg-gray-800" href={`#call-to-action`}>
            İletişim
          </Link>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu >
  </>)
}