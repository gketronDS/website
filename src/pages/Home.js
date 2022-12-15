import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import Link from '@material-ui/core/Link';
import "../styles/home.css"

function Home() {
  return (
    <div className="home">
        <div className="about">
            <h2>Gabe Ketron</h2>
            <div className="prompt">
                <p>
                    I'm a Biomedical Engineering Graduate 
                    Researcher @ UCI. Healing Alzheimer's 
                    with DataSci. 
                </p>
                <Link href="https://www.linkedin.com/in/gabriel-ketron/" target="_blank" >
                    <LinkedInIcon />
                </Link>
                <Link href="mailto:gketron@uci.edu" target="_blank" >
                    <EmailIcon />
                </Link>
                <Link href="https://github.com/gketronDS" target="_blank" >
                    <GithubIcon/>
                </Link>
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Proficient</h2>
                    <span>
                        Python, R, Git
                    </span>
                </li>
                <li className='item'>
                    <h2>Comfortable</h2>
                    <span>
                        MATLAB,  BigQuery/SQL, Google Cloud
                    </span>
                </li>
                <li className='item'>
                    <h2>Some Exposure</h2>
                    <span>
                        Java, React.js, Docker, Oracle
                    </span>
                </li>


            </ol>
            </div>
    </div>
  )
}

export default Home