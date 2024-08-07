export type Schedule = {
  alt: string
  src: string
  title: string
  date: { year: string; month: string; day: string; dayOfWeek: string }
  venue: string
  address: string
  googleMapLink: string
  tags: string[]
}

export type Program = {
  date: { year: string; month: string; day: string; dayOfWeek: string }
  venue: string
}

export type EventDate = {
  href: string
  title: string
  programs: Program[]
}
