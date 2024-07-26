"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 3,
        text: "Years of Experience",
    },
    {
        num: 15,
        text: "Projects completed",
    },
    {
        num: 5,
        text: "Technologies mastered",
    },
    {
        num: 300,
        text: "Code commit",
    }
]

const Stats = () => {
  return (    
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vm] mx-auto xl:max-w-none"> 
                {stats.map((item, index)=> {
                    return (
                        <div key={index} className="flex-1 flex items-center justify-center gap-4 xl:justify-start">
                            <CountUp
                                end={item.num}
                                duration={5}  
                                redraw={true}
                                className="text-4xl xl:text-6xl font-extrabold"
                                delay={2}
                            />
                            <p className={`${item.text.lenght < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-sung text-white/80`}>
                                {item.text}</p>
                        </div>  
                    );
            })}
            </div>
        </div>
    </section>
  )
}

export default Stats