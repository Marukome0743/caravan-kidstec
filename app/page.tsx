import { PlusIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"
import { IndicatorCarousel, ReviewCarousel, TopCarousel } from "./carousel.tsx"
import { Video } from "./components/media/video.tsx"
import { Introduction } from "./introduction.tsx"
import { HIROSHIMA, KANTO_EVENT, SECRETARIAT } from "./lib/constant.ts"

export default function Home(): JSX.Element {
  return (
    <article className="pb-4 space-y-6 text-center">
      {/* block className is necessary for Safari behavior */}
      <Link
        href={KANTO_EVENT.pathname}
        className="block button-pop duration-200 ease-out sticky top-0 z-20 sm:inline sm:static"
      >
        <Image
          src="/202410_kanto_banner_full.avif"
          width={540}
          height={162}
          alt="こどもテックキャラバン-関東イベントバナー"
          priority={true}
          className="duration-200 ease-out w-full"
        />
      </Link>
      <section>
        <TopCarousel />
      </section>
      <section className="font-bold leading-7 space-y-4 text-base text-center tracking-[.29em]">
        <Introduction />
      </section>
      <section className="bg-sky-300 mx-2 pb-2 rounded-2xl space-y-2">
        <div className="p-4 space-y-2 text-base text-white">
          <h1 className="mb-2">
            こどもテックキャラバンは
            <br />
            <strong>プログラミング</strong>と<strong>体験学習</strong>を
            <br />
            かけ合わせた体験型イベント！
          </h1>
          <p className="border-2 border-white font-bold mx-auto p-2 rounded-2xl shadow-lg w-60">
            プログラミング体験
          </p>
          <PlusIcon className="mx-auto size-5" />
          <p className="border-2 border-white font-bold mx-auto p-2 rounded-2xl shadow-lg w-60">
            体験学習
          </p>
          <p className="mt-2">過去の体験学習はこちら！</p>
        </div>
        <IndicatorCarousel />
      </section>
      <section className="space-y-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">参加者の声</h2>
        <ReviewCarousel />
      </section>
      <Video pathname={HIROSHIMA.pathname} date="202407" />
      <section className="relative space-y-4">
        <Image
          src="/handshake.avif"
          alt="handshake"
          width={256}
          height={256}
          className="absolute object-contain opacity-10 size-full -z-10"
        />
        <h2 className="font-bold font-zenMaruGothic text-2xl">
          <Link
            href={SECRETARIAT.pathname}
            className="block button-pop duration-200 ease-out text-sky-400 underline"
          >
            事務局の想い
          </Link>
        </h2>
        <div className="font-bold space-y-4 text-sm sm:text-base">
          <p>
            このイベントでは新しい人や
            <br className="sm:hidden" />
            ものとの出会いや、 初めての体験、
            <br />
            わくわくするような瞬間がきっとあります。
          </p>
          <p>
            いままで気づかなかった
            <br className="sm:hidden" />
            新しい発見もあるかもしれません。
          </p>
          <p>
            この特別な経験をつくるためにわたしたちは
            <br />
            パートナシップを組んで協力し、
            <br className="sm:hidden" />
            このイベントを行っています。
          </p>
          <p>
            わたしたちは皆さんの可能性が広がり、
            <br className="sm:hidden" />
            心がときめく瞬間に
            <br />
            出会えることを願っています。
          </p>
        </div>
      </section>
    </article>
  )
}
