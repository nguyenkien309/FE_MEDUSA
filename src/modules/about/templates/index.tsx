import AboutSummary from "../components/about-summary"
import AboutDetail from "../components/about-detail"

const AboutTemplate = () => {
  return (
    <div className="py-12 flex flex-col items-center gap-[4.25rem] ">
      <AboutSummary />
      <AboutDetail />
    </div>
  )
}

export default AboutTemplate
