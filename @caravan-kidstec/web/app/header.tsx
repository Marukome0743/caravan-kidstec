"use client"

import { Bars3BottomRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Link } from "next-view-transitions"
import { type JSX, type RefObject, useEffect, useRef, useState } from "react"
import { NAVIGATION, SITE_TITLE } from "./lib/constant.ts"

export function Header(): JSX.Element {
  const [scrollState, setScrollState] = useState<{
    scrollY: number
    isScrollDown: boolean
  }>({ scrollY: 0, isScrollDown: false })
  const headerHeight: number = 50
  const pathname: string = usePathname()

  // disable right click in order to prevent downloading images
  useEffect(() => {
    window.addEventListener("contextmenu", (event) => event.preventDefault())
    return () =>
      window.removeEventListener("contextmenu", (event) =>
        event.preventDefault(),
      )
  }, [])

  useEffect(() => {
    function ScrollHandler() {
      setScrollState({
        scrollY: window.scrollY,
        isScrollDown: scrollState.scrollY < window.scrollY,
      })
    }

    window.addEventListener("scroll", ScrollHandler)
    return () => window.removeEventListener("scroll", ScrollHandler)
  })

  return (
    <header
      className={`bg-white flex items-center justify-between p-2${pathname !== "/" && headerHeight < scrollState.scrollY && scrollState.isScrollDown ? " transition sticky top-0 z-20 -translate-y-20" : ""}${pathname !== "/" && (scrollState.scrollY < headerHeight || !scrollState.isScrollDown) ? " transition sticky top-0 z-20" : ""}`}
    >
      <Link href="/" className="block button-pop mx-4 tilt-shaking w-fit">
        <Image
          src="/caravan-kidstec_logo_line.avif"
          width={192}
          height={23}
          alt={SITE_TITLE}
          priority={true}
        />
      </Link>
      <nav className="font-bold w-fit z-30">
        <DropdownMenu isScrollDown={scrollState.isScrollDown} />
        <Navigation />
      </nav>
    </header>
  )
}

function DropdownMenu({
  isScrollDown,
}: Readonly<{ isScrollDown: boolean }>): JSX.Element {
  const ref: RefObject<HTMLDetailsElement | null> =
    useRef<HTMLDetailsElement | null>(null)

  useEffect(() => {
    if (isScrollDown && ref.current) {
      ref.current.open = false
    }

    function CloseDialog() {
      if (ref.current) {
        ref.current.open = false
      }
    }

    window.addEventListener("click", CloseDialog)
    return () => {
      window.removeEventListener("click", CloseDialog)
    }
  })

  return (
    <div className="flex gap-1 items-center lg:hidden">
      <Link
        href="https://www.instagram.com/ktc_caravan/"
        target="_blank"
        rel="noopener noreferrer"
        className="block mx-auto w-fit"
      >
        <Image
          src="/Instagram_Glyph_Gradient.avif"
          width={24}
          height={24}
          alt="こどもテックキャラバン-公式インスタグラム"
        />
      </Link>
      <details ref={ref}>
        <summary className="block button-pop cursor-pointer p-1">
          <Bars3BottomRightIcon className="size-7" />
        </summary>
        <ul className="absolute bg-white end-0 flex flex-col gap-1 p-3 rounded-2xl shadow-sm text-base sm:text-lg">
          {NAVIGATION.map((menu) => (
            <li key={menu.name}>
              <Link
                href={menu.pathname}
                className="block button-pop px-3 py-1 rounded-xl text-nowrap text-orange-400 whitespace-nowrap focus:bg-gray-400 hover:bg-gray-200"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </div>
  )
}

function Navigation(): JSX.Element {
  return (
    <ul className="flex-nowrap gap-1 hidden lg:flex">
      {NAVIGATION.map((menu) => (
        <li key={menu.name}>
          <Link
            href={menu.pathname}
            className="block button-pop px-3 py-1 rounded-xl text-orange-400 hover:bg-gray-200"
          >
            {menu.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
