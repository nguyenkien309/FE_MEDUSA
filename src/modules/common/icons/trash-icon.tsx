import React from "react"

import { IconProps } from "types/icon"

const TrashIcon: React.FC<IconProps> = ({ ...attributes }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...attributes}
    >
      <rect width="24" height="24" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_583_17" transform="scale(0.0208333)" />
        </pattern>
        <image
          id="image0_583_17"
          width="48"
          height="48"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF1SURBVHgB7ZrNUcMwEIUfP3foAHUQSnAJ6QB3AHSQKyfSgU0HoQJKYKhAoYKECsxunMwkjmJZlpKNJ/vNvIM1a80+eWVrJANxGNI7yZKqQPE9xboPER5JC4Qn3tRi3ddJMeg36m0mDE5IgXTJb/SFHlwhnGfS1NE+I/2gGyPS2NH+eqDvZBi4696S7rt3s4p1leDRS+kb7sffZxJmSFBKXEIG9eP0jeADKXe0z0kf6McT3CNekn7hp2QDFoLv4kjmbKDCgLnGwLlBPQ8yDI8l6a3ZWGL/rVBAjhKefAZfQmpAmlvEwR+/HLsfQV7LLBPFe4k1MEG9uNuGk3tJFO8ltoRcy4+7hPFedBJLowakUQPSqAFp1IA0akAaNSCNGpBGDUhz8QZmjWveXfhMGO8ldleCEwo5pgqN96JzQJqL2FrkA7wJZBg52v7abuAtvurMlbcZ4K2/FP8/HEsWHQ4kszM1wTmN0RGD+njHAuKJcw5THBj5f/bqI9GPtBeBAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  )
}

export default TrashIcon
