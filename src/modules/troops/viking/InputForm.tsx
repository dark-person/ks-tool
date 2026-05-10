import { Button } from "@/components/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import {
  DEFAULT_USER_INPUT,
  type UserInput,
} from "@/modules/troops/viking/data"

type InputFormProps = {
  input: UserInput
  setInput: (args: UserInput) => void
}

/** Input form to capture user input on viking troop data. */
export default function InputForm({
  input,
  setInput,
}: Readonly<InputFormProps>) {
  return (
    <form>
      <FieldGroup>
        <FieldSet>
          <FieldGroup>
            <Field orientation="responsive">
              <FieldLabel htmlFor="total-march">March Count</FieldLabel>
              <Input
                id="total-march"
                type="number"
                required
                value={input.marchCount}
                onChange={(e) =>
                  setInput({ ...input, marchCount: Number(e.target.value) })
                }
              />
            </Field>

            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="capacity">Initial Capacity</FieldLabel>
                <FieldDescription>
                  Troop Number that can be sent WITHOUT any buff
                </FieldDescription>
              </FieldContent>
              <Input
                id="capacity"
                type="number"
                required
                value={input.initialCapacity}
                onChange={(e) =>
                  setInput({
                    ...input,
                    initialCapacity: Number(e.target.value),
                  })
                }
              />
            </Field>

            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="mighty-bison">
                  Mighty Bison Buff
                </FieldLabel>
                <FieldDescription>
                  Capacity Amount Buff Provided by Mighty Bison Pet Skill
                </FieldDescription>
              </FieldContent>
              <Input
                id="mighty-bison"
                required
                type="number"
                value={input.mightyBisonCapacity}
                onChange={(e) =>
                  setInput({
                    ...input,
                    mightyBisonCapacity: Number(e.target.value),
                  })
                }
              />
            </Field>

            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="stronger-infantry">
                  Stronger Infantry
                </FieldLabel>
                <FieldDescription>e.g. Number of T10 Troop</FieldDescription>
              </FieldContent>
              <Input
                id="stronger-infantry"
                required
                type="number"
                value={input.infantryStrong}
                onChange={(e) =>
                  setInput({
                    ...input,
                    infantryStrong: Number(e.target.value),
                  })
                }
              />
            </Field>

            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="weaker-infantry">
                  Weaker Infantry
                </FieldLabel>
                <FieldDescription>e.g. Number of T9 Infantry</FieldDescription>
              </FieldContent>
              <Input
                id="weaker-infantry"
                required
                type="number"
                value={input.infantryWeak}
                onChange={(e) =>
                  setInput({
                    ...input,
                    infantryWeak: Number(e.target.value),
                  })
                }
              />
            </Field>

            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="stronger-cavalry">
                  Stronger Cavalry
                </FieldLabel>
                <FieldDescription>e.g. Number of T10 Cavalry</FieldDescription>
              </FieldContent>
              <Input
                id="stronger-cavalry"
                required
                type="number"
                value={input.cavalryStrong}
                onChange={(e) =>
                  setInput({
                    ...input,
                    cavalryStrong: Number(e.target.value),
                  })
                }
              />
            </Field>

            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="weaker-cavalry">Weaker Cavalry</FieldLabel>
                <FieldDescription>e.g. Number of T9 Cavalry</FieldDescription>
              </FieldContent>
              <Input
                id="weaker-cavalry"
                required
                type="number"
                value={input.cavalryWeak}
                onChange={(e) =>
                  setInput({
                    ...input,
                    cavalryWeak: Number(e.target.value),
                  })
                }
              />
            </Field>

            <Field orientation="responsive">
              <Button
                variant="outline"
                type="button"
                onClick={() => setInput(DEFAULT_USER_INPUT)}
              >
                Reset
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </form>
  )
}
