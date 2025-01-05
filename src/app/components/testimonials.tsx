import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const CUSTOMER_REVIEWS = [
  {
    text: "EgeMimar beklentilerimizi aştı. Detaylara gösterdikleri özen ve kaliteye olan bağlılıkları eşsiz. Yeni ofis binamızdan daha mutlu olamazdık.",
    who: "Ahmet Y., TechCorp CEO'su Menderes/İzmir"
  },
  {
    text: "Evimizin komple tadilat işini üstlendiler ve sonuç harika oldu! Ekibin profesyonelliği ve detaylara verdiği önem gerçekten takdire şayan. Yeni mutfağımız ve banyomuz tam hayal ettiğimiz gibi oldu. Teşekkürler!",
    who: "Çetin Y. - Torbalı/İzmir"
  },
  {
    text: "Evimizin komple tadilat işini üstlendiler ve sonuç harika oldu! Ekibin profesyonelliği ve detaylara verdiği önem gerçekten takdire şayan. Yeni mutfağımız ve banyomuz tam hayal ettiğimiz gibi oldu. Teşekkürler!",
    who: "Zeynep K. - Karabağlar/İzmir"
  },
  {
    text: "Ofisimizin dekorasyonunu yenileme sürecinde çok kararsızdık, ancak ekip hem fikirlerimize kulak verdi hem de mükemmel öneriler sundu. Tam zamanında teslim ettiler ve sonuç gerçekten etkileyici!",
    who: "Mehmet T. - Aydın"
  },
  {
    text: "Yapı kalitesi ve işçilik konusunda oldukça hassas biriyim. Bu ekip tüm beklentilerimi fazlasıyla karşıladı. Hem hızlı hem de temiz bir şekilde çalıştılar. İşlerini gönül rahatlığıyla tavsiye ederim.",
    who: "Sena K. - İzmir"
  },
  {
    text: "Evimizin salonunu modern bir görünüme kavuşturmak istiyorduk. Bizi gerçekten dinlediler ve hayal ettiğimizden de güzel bir sonuç ortaya çıktı. Tüm süreci bizimle paylaşmaları çok güven vericiydi.",
    who: "Ayşe B. - İzmir"
  },
  {
    text: "Bahçemize veranda yaptırmak istedik. Proje hem hızlı tamamlandı hem de beklentilerimizin çok üzerinde bir sonuç elde ettik. Kesinlikle profesyonel bir ekip!",
    who: "Erkan D. - İzmir"
  },
  {
    text: "Tadilat sırasında aklımızdaki tüm sorulara detaylı cevaplar aldık ve süreç boyunca düzenli bilgilendirildik. Böyle bir hizmet almak gerçekten çok keyifliydi. Çok teşekkür ederiz!",
    who: "Elif H. - İzmir"
  },
  {
    text: "Villamızın iç ve dış cephe yenileme işini üstlendiler. İşçilik kalitesi harika, zamanında teslim ettiler ve tüm detaylarla tek tek ilgilendiler. Her şey için teşekkürler!",
    who: "Selim A. - Aydın"
  },
]

export function Testimonials() {
  return (<>
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Müşterilerimiz Ne Diyor?</h2>
        <Carousel
          opts={{
            align: "center",
            loop: true,
            duration: 60,
            active: true,
          }}
          plugins={[
            Autoplay({ delay: 3000, }),
          ]}
          // orientation="vertical"
          className="w-full max11-w-xs"
        >
          <CarouselContent className="-mt-1 h-[200px] w-full max-w-sm md:max-w-4xl">
            {CUSTOMER_REVIEWS.map((e, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-1/2">
                <div className="p-1 text-base md:text-lg">
                  <blockquote className=" italic mb-4">
                    {e.text}
                  </blockquote>
                  <p className="font-semibold"> {e.who}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>


      </div>
    </section>

  </>)
}