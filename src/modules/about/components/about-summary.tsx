import Image from "next/image"
import AboutImage from "@assets/images/about/shirt.png"

const AboutSummary = () => {
  return (
    <>
      <div
        className="flex flex-col gap-[2.5rem] justify-between max-w-[1059px]"
        style={{
          fontFamily: "Volkhov",
        }}
      >
        <span className="font-semibold leading-77 tracking-tighter text-center hover:text-ui-fg-base px-10 rounded-10 text-[2.5rem] font-Inter mt-3">
          About
        </span>
        <p className="text-[1rem] font-weight-400 text-[#8B8E99] text-base text-center font-medium sm:max-w-full justify-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
          sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
        </p>
      </div>
      <div className="flex flex-shrink-0">
        <Image
          src={AboutImage}
          alt="About image"
          className="max-w-[80rem] max-h-[38.75rem] w-full object-cover"
        />
      </div>
    </>
  )
}

export default AboutSummary
