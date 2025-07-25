import {
  ArrowTopRightOnSquareIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"
import { FadeInUp } from "@/app/components/animation/fadeInUp"
import { Heading } from "@/app/components/layout/heading"
import type { Sponser } from "@/app/interfaces/sponser"
import { SPONSER } from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"

export default function SponserPage(): JSX.Element {
  const sponsers: Sponser[] = [
    {
      name: "オープンアップグループ",
      href: "https://www.openupgroup.co.jp/",
      src: "/logo/openup_logo.svg",
      business: "エンジニア派遣事業",
      purpose: "幸せな仕事を通じて\nひとりひとりの可能性を\nひらく社会に",
    },
    {
      name: "テイクアンドギヴ・ニーズ",
      href: "https://www.tgn.co.jp/",
      src: "/logo/take_and_give_needs_logo.avif",
      business: "ウェディング事業・ホテル事業",
      purpose: "ホスピタリティ業界に\nイノベーションを起こし\n日本を躍動させる",
    },
  ] as const

  return (
    <>
      <Heading menus={[SPONSER]} />
      <section className="px-2 space-y-6">
        {sponsers.map((sponser) => (
          <section
            key={sponser.name}
            className="bg-gray-100 flex gap-1 h-32 items-center p-1 rounded-2xl shadow-lg sm:h-40"
          >
            <div className="bg-white flex grow h-full items-center justify-center rounded-2xl">
              <Image
                loader={cloudfrontLoader}
                src={sponser.src}
                width={256}
                height={256}
                alt={sponser.name}
                className="max-h-32 object-contain rounded-2xl p-3 sm:max-h-40"
              />
            </div>
            <div className="flex-none space-y-2 text-center basis-48 sm:basis-64">
              <h2 className="font-bold text-sm">
                <Link
                  href={sponser.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center underline"
                >
                  {sponser.name}&nbsp;
                  <ArrowTopRightOnSquareIcon className="size-4" />
                </Link>
              </h2>
              <p className="flex gap-1 items-center justify-center">
                <BuildingOffice2Icon className="size-5" />
                {sponser.business}
              </p>
              <FadeInUp className="font-bold whitespace-pre">
                {sponser.purpose}
              </FadeInUp>
            </div>
          </section>
        ))}
      </section>
    </>
  )
}
