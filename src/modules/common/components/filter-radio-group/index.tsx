import { Label, RadioGroup, Text, clx } from "@medusajs/ui"
import Image from "next/image"
import { ChangeEvent } from "react"
import NewIcon from "/public/images/store/new.png"

type FilterRadioGroupProps = {
  title: string
  items: {
    value: string
    label: string
  }[]
  value: any
  handleChange: (...args: any[]) => void
}

const FilterRadioGroup = ({
  title,
  items,
  value,
  handleChange,
}: FilterRadioGroupProps) => {
  return (
    <div className="flex gap-x-3 flex-col gap-y-3">
      <Text className="text-xl" weight={"plus"}>
        {title}
      </Text>
      <RadioGroup className="ml-2">
        {items?.map((i, index) => (
          <div
            key={i.value}
            className={clx("flex gap-x-2 items-center", {
              "font-semibold": i.value === value,
            })}
          >
            <RadioGroup.Item
              checked={i.value === value}
              onClick={(e) =>
                handleChange(
                  e as unknown as ChangeEvent<HTMLButtonElement>,
                  i.value
                )
              }
              className="hidden peer"
              id={i.value}
              value={i.value}
            />
            <div>
              {+index === 1 && (
                <Text className="text-base txt-ui-fg-base mb-1">Price</Text>
              )}
              <Label
                placeholder={i.label}
                htmlFor={i.value}
                className={clx(
                  "!txt-compact-small !transform-none text-ui-fg-subtle hover:cursor-pointer hover:text-ui-fg-base flex gap-x-2 items-center",
                  {
                    "text-ui-fg-base": i.value === value,
                    "ml-3": +index !== 0,
                    "!text-base": +index === 0,
                  }
                )}
              >
                {i.label}
                {index === 0 && (
                <Image
                  width={30}
                  src={NewIcon}
                  alt={`New icon`}
                />
              )}
              </Label>
             
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

export default FilterRadioGroup
