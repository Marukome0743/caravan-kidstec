import type { JSX } from "react"
import { Modal } from "@/app/@modal/(.)history/modal"
import { Video } from "@/app/components/media/video"
import type { Menu } from "@/app/interfaces/menu"
import type { EventDate } from "@/app/interfaces/schedule"
import {
  HIROSHIMA,
  HIROSHIMA_HISTORY,
  KANTO,
  KANTO_HISTORY,
} from "@/app/lib/constant"

export function generateStaticParams(): { area: string; date: string }[] {
  const kantoArea: string = KANTO.pathname.split("/")[1]
  const kantoParams: { area: string; date: string }[] = KANTO_HISTORY.map(
    (eventDate) => ({
      area: kantoArea,
      date: eventDate.date,
    }),
  )
  const hiroshimaArea: string = HIROSHIMA.pathname.split("/")[1]
  const hiroshimaParams: { area: string; date: string }[] =
    HIROSHIMA_HISTORY.map((eventDate) => ({
      area: hiroshimaArea,
      date: eventDate.date,
    }))
  return [...kantoParams, ...hiroshimaParams]
}

export default async function Movie({
  params,
}: Readonly<{
  params: Promise<{ area: string; date: string }>
}>): Promise<JSX.Element> {
  const { area, date }: { area: string; date: string } = await params
  const menu: Menu = `/${area}` === KANTO.pathname ? KANTO : HIROSHIMA
  const history: EventDate[] =
    `/${area}` === KANTO.pathname ? KANTO_HISTORY : HIROSHIMA_HISTORY
  const eventDate: EventDate = history.find(
    (history) => history.date === date,
  ) as EventDate

  return (
    <Modal>
      <h2 className="font-bold mb-5 text-3xl text-center">{eventDate.title}</h2>
      <Video date={eventDate.date} pathname={menu.pathname} />
    </Modal>
  )
}
