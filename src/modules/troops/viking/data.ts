/** Type for capture user input for viking. */
export type UserInput = {
  marchCount: number
  initialCapacity: number
  mightyBisonCapacity: number
  infantryStrong: number
  infantryWeak: number
  cavalryStrong: number
  cavalryWeak: number
}

/** Default input for `UserInput`. */
export const DEFAULT_USER_INPUT: UserInput = {
  marchCount: 4,
  initialCapacity: 0,
  mightyBisonCapacity: 0,
  infantryStrong: 0,
  infantryWeak: 0,
  cavalryStrong: 0,
  cavalryWeak: 0,
}

/** Data container for viking troop result. */
export type TroopResultData = {
  totalTroop: number
  minimumCapacity: number
  dataRow: TroopResultTableRow[]
}

/** Data container for table representation of result. */
export type TroopResultTableRow = {
  label: string
  actualNumber: number
}
