import type React from "react"

export default function HistoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <article className="grid gap-6 p-4 text-center text-xs sm:px-12">
      {children}
    </article>
  )
}
