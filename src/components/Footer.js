import React from 'react'
import ScienceIcon from '@material-ui/icons/Work'
import TwitterIcon from '@material-ui/icons/Twitter'
import GithubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Link from '@material-ui/core/Link';
import "../styles/footer.css"

function Footer() {
  return (
    <div className = "footer">
        <div className="socialMedia">
            <Link href="https://brewer.eng.uci.edu/" target="_blank" >
              <ScienceIcon/>
            </Link>
            <Link href="https://twitter.com/GabeKetron" target="_blank" >
              <TwitterIcon/>
            </Link>
            <Link href="https://github.com/gketronDS" target="_blank" >
              <GithubIcon/>
            </Link>
            <Link href="https://www.linkedin.com/in/gabriel-ketron/" target="_blank" >
              <LinkedInIcon />
            </Link>
        </div>
        <p>gketron@uci.edu</p>
        <p>&copy; 2023 gabeketron.io</p>
    </div>
  )
}

export default Footer