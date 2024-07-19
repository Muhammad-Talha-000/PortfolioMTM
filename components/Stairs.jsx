import { animate, motion } from "framer-motion"

// variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}
// calculated the reverse index for staggered delay
const reverseIndex = (index)=>{
    const totalSteps = 6; //number of steps
    return totalSteps - index - 1
}

const Stairs = () => {
  return (
    <>
        {/*render 6 motion div, each represents a of the stairs.
        each div will have the same animation defined by the stairAnimaton object.
        the delay of each div is calculated simuntaneusly based on its reversed index.
        creadting a staggered effect with decreasing elay for each subsequent step.
        */}
        {[...Array(6)].map((_, index) => {
            return (
                <motion.div
                    key={index}
                    variants={stairAnimation} 
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration: 0.4, delay: reverseIndex(index) * 0.1}}
                    className="h-full w-full bg-white relative"
                />
            )
        })}
    </>
  )
}

export default Stairs