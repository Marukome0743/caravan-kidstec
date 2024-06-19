import { ChibaPartners, HiroshimaPartners } from "@/app/lib/constant"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export function Partner({ area }: { area: string }): React.JSX.Element {
  const partners = area === "Chiba" ? ChibaPartners : HiroshimaPartners

  return (
    <section className="grid gap-6 text-xs">
      {partners.map((item) => (
        <section
          key={item.name}
          className={`bg-base-200 gap-1 grid grid-cols-3 items-center mx-auto p-4 w-fit ${area === "Chiba" ? "min-h-80" : "min-h-60"}`}
        >
          <Image
            src={item.src}
            width={1000}
            height={1000}
            alt={item.name}
            className="col-span-1 h-40 object-contain"
          />
          <div className="col-span-2 grid gap-2 text-center">
            <h2 className="font-semibold text-sm">
              {item.href ? (
                <Link
                  href={item.href}
                  target="_blank"
                  className="link"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </Link>
              ) : (
                item.name
              )}
            </h2>
            <p className="whitespace-pre">{item.introduction}</p>
          </div>
        </section>
      ))}
    </section>
  )
}