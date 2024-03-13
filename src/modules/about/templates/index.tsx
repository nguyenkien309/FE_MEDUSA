import AboutSummary from "../components/about-summary"
import AboutDetail from "../components/about-detail"

const AboutTemplate = () => {
  return (
    <div className="flex flex-col items-center gap-[4rem] ">
      <AboutSummary />
      <AboutDetail />
    </div>
  )
}

export default AboutTemplate
