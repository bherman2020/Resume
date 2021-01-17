import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import CloseIcon from '@material-ui/icons/Close';
import CodeIcon from '@material-ui/icons/Code';
import BrushIcon from '@material-ui/icons/Brush';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';



export default function Home() {
        return (
            
        <body>

            {/*navbar */}
            <nav className="nav" id="nav">
            <div className="nav-center">

                {/*nav header */}
                <div className="nav-header">
                <img src="./images/laptop-code.jpg" className="nav-logo" alt="nav logo" />
                <button className="nav-btn" id="nav-btn">
                    < ViewHeadlineIcon className="i"/>
                </button>
                </div>
                {/* nav-links */}
                <ul className="nav-links">
                    <li><Link to="./">home</Link></li>
                    <li><Link to="./AboutMe">About</Link></li>
                    <li><Link to="Projects">projects</Link></li>
                    <li><Link to="Contract">contact</Link></li>
                </ul>
            </div>
            </nav>
     
            {/* sidebar */}
            <aside className="sidebar" id="sidebar">
            <div>
                <button className="close-btn" id="close-btn">
                <CloseIcon className="i"/>
                </button>
                {/* nav-links */}
                <ul className="sidebar-links">
                    <li><a href="Home">home</a></li>
                    <li><a href="AboutMe">about</a></li>
                    <li><a href="Projects">projects</a></li>
                    <li><a href="Contract">contact</a></li>
                </ul>

                {/* social icons */}
                <ul className="social-icons">
                    <li>
                        <a href="https://www.linkedin.com/in/herman-bide/" className="social-icon" >
                        <LinkedInIcon className='i'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/bherman2020" className="social-icon">
                            <GitHubIcon className="i"/>
                        </a>
                    </li>
                </ul>
            </div>
            </aside>
          
            {/* header */}
            <header className="hero">
            <div className="section-center hero-center">
                <article className="hero-info">
                <div className="underline"></div>
                <h1>i'm Herman</h1>
                <h4>Full-Stack Developer</h4>
                <a href="Contact" className="btn hero-btn">Contact me</a>

                {/* social icons */}
                <ul className="social-icons hero-icons">
                    <li>
                    <a href="https://www.linkedin.com/in/herman-bide/" className="social-icon" >
                    <LinkedInIcon className='i'/>
                    </a>
                    </li>
                    <li>
                    <a href="https://github.com/bherman2020" className="social-icon">
                        <GitHubIcon className="i"/>
                    </a>
                    </li>
                </ul>

                </article>
                <article className="hero-img">
                <img src="./images/laptop-code.jpg" className="hero-photo" alt="herman bide" />
                </article>
            </div>
            </header>
      
            {/* about */}
            <section className="section about">
            <div className="section-center about-center">
    
 
                {/* about info */}
                <article className="about-info">
                <div className="section-title about-title">
                    <h2>About me</h2>
                    <div className="underline"></div>
                </div>

                <p className='projects-text'>
                    I am an aspiring web developer with hands on experience of designing, developing and maintaining web applications. 
                    From the moment I started my first coding lesson I was hooked and found passion in trying to create appealing websites.
                    Web development has offered an engaging challenge to continually learn and improve my sills in creating high quality software. 
                    Along with my experience in the field of healthcare I have learned to collaborate well in collaborative environment. 
                </p><br/>
                <a href="AboutMe" className="btn">about me</a>
                </article>
            </div>
            </section>
    
            {/* services */}
            <section className="section bg-grey">

            <div className="section-title">
                <h2>services</h2>
                <div className="underline"></div>
            </div>
   
            <div className="services-center section-center">
                <article className="service">
                < CodeIcon className="i"/>
                <h4>web development</h4>
                <div className="underline"></div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                    corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
                    obcaecati vero.
                </p>
                </article>
    
                <article className="service">
                <BrushIcon className='i'/>
                <h4>web design</h4>
                <div className="underline"></div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                    corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
                    obcaecati vero.
                </p>
                </article>
         
                <article className="service">
                <PhoneAndroidIcon className='i'/>
                <h4>app design</h4>
                <div className="underline"></div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                    corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
                    obcaecati vero.
                </p>
                </article>
    
            </div>
            </section>

            {/* projects */}
            <section className="section projects">
            <div className="section-title">
                <h2>latest works</h2>
                <div className="underline"></div>
                <p className="projects-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                repudiandae cupiditate ea facilis incidunt, non sapiente! Debitis
                magnam, earum assumenda obcaecati cum quaerat facere ratione molestiae
                dignissimos aliquid blanditiis architecto voluptates delectus
                voluptate animi nulla! Autem explicabo perspiciatis officia ea.
                </p>
            </div>

            <div className="section-center projects-center">
                {/* single project */}
                <a href="Projects" className="project-1">
                <article className="project">
                    <img
                    src="./images/project-1.jpeg"
                    alt="single project"
                    className="project-img"
                    />
                    <div className="project-info">
                    <h4>project title</h4>
                    <p>client name</p>
                    </div>
                </article>
                </a>
           
                {/* single project */}
                <a href="Projects" className="project-2">
                <article className="project">
                    <img
                    src="./images/project-2.jpeg"
                    alt="single project"
                    className="project-img"
                    />
                    <div className="project-info">
                    <h4>project title</h4>
                    <p>client name</p>
                    </div>
                </article>
                </a>
       
                {/* single project */}
                <a href="Projects" className="project-3">
                <article className="project">
                    <img
                    src="./images/project-3.jpeg"
                    alt="single project"
                    className="project-img"
                    />
                    <div className="project-info">
                    <h4>project title</h4>
                    <p>client name</p>
                    </div>
                </article>
                </a>

                {/* single project */}
                <a href="Projects" className="project-4">
                <article className="project">
                    <img
                    src="./images/project-4.jpeg"
                    alt="single project"
                    className="project-img"
                    />
                    <div className="project-info">
                    <h4>project title</h4>
                    <p>client name</p>
                    </div>
                </article>
                </a>
                
            </div>
            </section>
          
            {/* connect */}
            <section className="connect">
            <video
                controls
                autoplay
                muted
                loop
                className="video-container"
                poster="./images/project-1.jpeg"
            >
                <source src="./videos/connect.mp4" type="video/mp4" />
                Sorry, your browser does not support embedded videos
            </video>

            <div className="video-banner">
                {/* section title */}
                <div className="section-title">
                <h2>let's get in touch</h2>
                <div className="underline"></div>
                </div>
            
                <p className="video-text">
                Thank you for taking the time to view my portfolio,
                if you would like to get in touch click the button below!
                </p>
                <a href="Contact" className="btn">contact me</a>
            </div>
            </section>
      
            {/* skills */}
            <section className="section skills">
      
            <div className="section-title">
                <h2>skills</h2>
                <div className="underline"></div>
            </div>
     
            <div className="section-center skills-center">
                <article>
                <h3>front end</h3>
                {/* single skill */}
                <div className="skill">
                    <p>HTML/CSS</p>
                </div>

                {/* single skill */}
                <div className="skill">
                    <p>Javascript</p>
                </div>
     
                {/* single skill */}
                <div className="skill">
                    <p>React</p>
                </div>
        
                </article>
                <article>
                <h3>back end</h3>
                {/* single skill */}
                <div className="skill">
                    <p>Node.js</p>
                </div>

                <div className="skill">
                    <p>Expres.js</p>
                </div>
           
                {/* single skill */}
                <div className="skill">
                    <p>PHP</p>
                </div>
        
                {/* single skill */}
                <div className="skill">
                    <p>MySQL</p>
                </div>
              
                </article>
            </div>
            </section>
      
            {/* Timeline */}
            <section className="section timeline">
            <div className="section-title">
                <h2>Experience</h2>
                <div className="underline"></div>
            </div>
         
            <div className="section-center timeline-center">
                {/* single timeline item */}
                <article className="timeline-item">
                <h4>2020 - current</h4>
                <p>
                    	Development and Maintenance of website/web page.<br/>
                    	Implemented responsive web design for crafting site for optimal viewing experience.<br/>
                    	Worked on both back-end and front-end programming on previous project.<br/>
                    	Build website and connect back end to database.<br/>
                    	Experience with RESTful API and testing with Postman.<br/>
                    	Operating software Visual Studio code.<br/>
                    	Operating systems: Windows and Apple OS X.
                </p>
                <span className="number">
                    1
                </span>
                </article>
         
            </div>
            </section>
        
          
            {/*} footer */}
            <footer className="footer">
            {/* social icons */}
            <ul className="social-icons">
            <li>
                    <a href="https://www.linkedin.com/in/herman-bide/" className="social-icon" >
                    <LinkedInIcon className='i'/>
                    </a>
                    </li>
                    <li>
                    <a href="https://github.com/bherman2020" className="social-icon">
                        <GitHubIcon className="i"/>
                    </a>
                    </li>
            </ul>

            <p>&copy; <span id="date"></span> Herman Bide. all rights reserved</p>
            </footer>
          
        </body>
            
        );
    }

