/** Type for alliance notice option. */
type AllianceNoticeOpt = {
  id: string
  label: string
  text: string
  expired?: boolean
}

/** Options for alliance notice generator, for UI generate and also text generation. */
export const ALLIANCE_NOTICE_OPTS: AllianceNoticeOpt[] = [
  // Regular alliance event
  {
    id: "ac-register",
    label: "Alliance Championship Register",
    text: "Alliance Championship:\n- Register with strongest hero with troop ratio 50/20/30",
  },

  // Swordland / Tri-alliance
  {
    id: "sl-vote",
    label: "Swordland/Tri-Alliance - Vote",
    text: "Swordland/Tri-Alliance\n- Vote time slot",
  },
  {
    id: "sl-request-d1",
    label: "Swordland/Tri-Alliance - Request Day 1",
    text: "Swordland/Tri-Alliance\n- Register if you able to join",
  },
  {
    id: "sl-request-d2",
    label: "Swordland/Tri-Alliance - Request Day 2",
    text: "Swordland/Tri-Alliance\n- Register BEFORE UTC15 if you able to join",
  },

  // Viking
  {
    id: "viking",
    label: "Viking",
    text: "Viking UTC\n- Send all your infantry and cavalry to reinforce other\n- Only send 70K to HQ\n- Online to earn more point, post you coordination in alliance chat if you are going to online that time\n- DONT HEAL",
  },

  // Golden Glaives
  {
    id: "golden-glaives-before",
    label: "Golden Glaives - 1d Before",
    text: "Golden Glaives\n-Finish and not claim reward of UTC08 Mission\n-DONT DO any mission in UTC16",
  },
  {
    id: "golden-glaives-last-day",
    label: "Golden Glaives - Last Day",
    text: "Golden Glaives\n-LAST DAY. Ensure finish all intel mission in UTC1600 ~ UTC2359",
  },
  {
    id: "golden-glaives-end",
    label: "Golden Glaives - Ended",
    text: "Golden Glaives\n-Ensure you use every item dim goldstones BEFORE UTC2359",
  },

  // ==================== Last Day Related =====================================

  // Champagne Fair
  {
    id: "champagne-fair-last-day",
    label: "Champagne Fair - Last day",
    text: "Champagne Fair:\n- Last day. Ensure you use all spare hero shard in fair to get more item.",
  },

  // Fishing Event
  {
    id: "fishing-event-last-day",
    label: "Fishing Event - Last day",
    text: "Fishing Event:\n- Last day. Ensure use all regular bait as you can.",
  },

  // Champion's Way
  {
    id: "champion-way-last-day",
    label: "Champion's Way - Last day",
    text: "Champion's Way:\n- Last day. Ensure completed 10 rally to get all reward.",
  },

  // ==================== Last Day Related =====================================

  // Cesare Boss
  {
    id: "cesare-boss",
    label: "Cesare Boss",
    text: "Cesare Boss (UTC)\n- Send 1 infantry only to attack boss once (For all wave)\n- After r4/r5 say ok, you can use full march to attack",
  },

  // KvK Prepare
  {
    id: "kvk-intel-mission",
    label: "KvK - Save Intel Mission",
    text: "KvK\n-Finish and not claim reward of UTC08 Mission\n-DONT DO any mission in UTC16",
  },

  // KvK Battle Phase
  {
    id: "kvk-battle",
    label: "KvK - Shield Reminder",
    text: "KvK (Battle Phase)\n- Invaders during UTC10 to UTC20\n\nSuggested Schedule\n- UTC04~09 Use Free Shield\n- UTC1140 Teleport to battle zone\n- UTC12 Castle battle\n- After UTC13: Active free shield again after enough point",
  },

  // Limited event
  {
    id: "moonlit-promise",
    label: "Moonlit Promise (Limited Time)",
    text: "Moonlit Promise\n- at least 3 terror rally daily",
  },
  {
    id: "valentine-evt",
    label: "Valentine event (Limited Time)",
    text: "Valentine event:\n- Hit flower with 10/10/80 with strongest hero",
    expired: true,
  },

  // Appendix Reminder
  {
    id: "Save Kvk",
    label: "REMIND: KvK Save Resource",
    text: "Remember save resource for Kvk, include truegold dust!",
  },
  {
    id: "auto-join-rally",
    label: "REMIND: Auto Join",
    text: "Please open auto join rally before offline to help people to earn points.",
  },
]
