import AboutContent from "./about-content"
import AboutSocialList from "./about-social-list"

const AboutDetail = () => {
  return (
    <div className="flex flex-row w-full justify-between max-w-[1280px]">
      <AboutContent />
      <AboutSocialList />
    </div>
  )
}

export default AboutDetail
