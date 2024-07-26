import Link from "next/link"

import {FaGithub, FaLinkedinIn, FaInstagram, FaDiscord} from "react-icons/fa"

const social = [
  {icon: <FaGithub />, path: 'https://github.com/Muhammad-Talha-000'},
  {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/muhammad-talha-393289294'},
  {icon: <FaInstagram />, path: 'https://www.instagram.com/malik_talha_000?igsh=eTB0Znk0eGNhMGFh'},
  {icon: <FaDiscord />, path: 'https://discord.com/channels/@me'},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
              {item.icon}
          </Link> 
        );
      })} 
    </div>
  )
}

export default Social