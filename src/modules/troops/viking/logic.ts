import type { TroopResultData, UserInput } from "@/modules/troops/viking/data"

/** Calculate to troop result information of given user input. */
export default function convert(userInput: UserInput): TroopResultData {
  const totalTroop =
    userInput.infantryStrong +
    userInput.infantryWeak +
    userInput.cavalryStrong +
    userInput.cavalryWeak

  const minimumCapacity = totalTroop / userInput.marchCount

  return {
    totalTroop: totalTroop,
    minimumCapacity: minimumCapacity,
    dataRow: [
      {
        label: "No Buff",
        actualNumber: userInput.initialCapacity,
      },
      {
        label: "Pet Skill",
        actualNumber: userInput.initialCapacity + userInput.mightyBisonCapacity,
      },
      {
        label: "Blue Gem Buff",
        actualNumber: userInput.initialCapacity * 1.1,
      },
      {
        label: "Blue Gem Buff + Pet Skill",
        actualNumber:
          (userInput.initialCapacity + userInput.mightyBisonCapacity) * 1.1,
      },
      {
        label: "Purple Gem Buff",
        actualNumber: userInput.initialCapacity * 1.2,
      },
      {
        label: "Purple Gem Buff + Pet Skill",
        actualNumber:
          (userInput.initialCapacity + userInput.mightyBisonCapacity) * 1.2,
      },
    ],
  }
}
