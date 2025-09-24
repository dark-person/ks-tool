import jsonData from "@/modules/banner/banner.json"

const MAX_BANNER = 285

export type BannerResource = {
  Bread: number
  Wood: number
  Stone: number
  Iron: number
}

type RawData = {
  Banners: number
  Food: number
  Wood: number
  Stone: number
  Iron: number
}

export function calcBanner(startAt: number, endAt: number): BannerResource | undefined {
  if (startAt > MAX_BANNER || endAt > MAX_BANNER) {
    return undefined
  }

  // Parse data
  const data = jsonData as RawData[]

  // Filter value from data
  const filtered = data.filter((item) => item.Banners > startAt && item.Banners <= endAt)

  // Sum data
  const total: BannerResource = {
    Bread: 0,
    Wood: 0,
    Stone: 0,
    Iron: 0,
  }

  for (const item of filtered) {
    total.Bread += item.Food
    total.Wood += item.Wood
    total.Stone += item.Stone
    total.Iron += item.Iron
  }

  return total
}
