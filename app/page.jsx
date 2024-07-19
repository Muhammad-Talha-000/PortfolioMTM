import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

// components
import Social from "@/components/social"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Computer Engineering</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Muhammad Talha</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel in building dynamic, responsive web applications and am passionate about solving complex problems and learning new technologies. Willing to become a DevOps Engineer  
            </p>
            {/* button and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline" 
                size="lg"
                className="uppercase flex items-center gap-2" >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>

          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}

export default Home