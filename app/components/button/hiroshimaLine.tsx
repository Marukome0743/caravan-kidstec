import { HIROSHIMA_LINE_LINK } from "@/app/lib/constant"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export function HiroshimaLine(): React.JSX.Element {
  return (
    <Link href={HIROSHIMA_LINE_LINK} className="w-fit mx-auto">
      <Image
        src="/line_add_friends.webp"
        width={232}
        height={72}
        alt="友だち追加"
        className="border-0 w-auto"
      />
    </Link>
  )
}
