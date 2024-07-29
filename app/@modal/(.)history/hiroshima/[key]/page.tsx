import { Video } from "@/app/components/media/video"
import type { EventDate } from "@/app/interfaces/schedule"
import { HIROSHIMA_HISTORY } from "@/app/lib/constant"
import type { JSX } from "react"
import { Modal } from "./modal"

export default function HiroshimaModal({
  params: { key },
}: Readonly<{ params: { key: string } }>): JSX.Element {
  const history: EventDate = HIROSHIMA_HISTORY.find(
    (history) => history.href === key,
  ) as EventDate

  return (
    <Modal>
      <h2 className="font-bold font-zenMaruGothic mb-5 text-3xl text-center">
        {history.title}
      </h2>
      <Video src={`https://dk75m1tgsot44.cloudfront.net/movie/${key}`} />
    </Modal>
  )
}