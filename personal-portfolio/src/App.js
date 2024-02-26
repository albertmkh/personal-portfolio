import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useRef } from 'react'
import { useState } from 'react'

function App(){
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const [picture, setPicture] = useState('porfoliodemonstration.png');
  const [description, setDescription] = useState('I used my knowledge in HTML, CSS, and React to create a portfolio website for myself. It features all of my projects, ways to contact me, and a short section about me. This increased my outreach and helped showcase my work to others.')
  const [skills, setSkills] = useState('HTML | CSS | React')

  const displayPortfolioProject = () => {
    setPicture('porfoliodemonstration.png')
    setDescription('I used my HTML, CSS, and React knowledge to create a portfolio website for myself. It features my projects, ways to contact me, and a short section about me. This increased my outreach and helped showcase my work to others.')
    setSkills('HTML | CSS | React | Javascript')
  }

  const displayEzCertsProject = () => {
    setPicture('certificateofinsurancedemonstration.png')
    setDescription('I used my knowledge of Python to develop a Certificate of Insurance (COI) generator. The COI generator is currently being used in 7 offices to generate a PDF certificate from a standard insurance binder. The process uses Python libraries to scrape the data from the binder, clean it, and place it on the COI template.')
    setSkills('Python')
  }

  const displayTaskifyProject = () => {
    setPicture('taskifydemonstration.png')
    setDescription('I used the knowledge I gained from the COM SCI 35L class to construct software for task management. Employees use the software to keep track of tasks, and admins use it to assign tasks to employees. The software was developed alongside my teammates.')
    setSkills('Python | HTML | CSS | React | Django')
  }

  const displayRareKickzProject = () => {
    setPicture('rarekickzdemonstration.png')
    setDescription('I used my knowledge of PHP and MySQL to develop a website for a sneaker store. The website features a fully functional backend with a shopping cart, item listing, and login features. The website was co-developed alongside Dylan Dercourt.')
    setSkills('PHP | CSS | React')
  }

  return(
    <div>
      <div className='mynavbar'>
        <div className='logo'>
              AM<span className='blktxt'>._</span>
        </div>
        <div  className='nav-items'>
          <button onClick={() => {homeRef.current?.scrollIntoView({behavior: 'smooth'})}}><span className='blktxt navbt'>//</span>home</button>
          <button onClick={() => {aboutRef.current?.scrollIntoView({behavior: 'smooth'})}}><span className='blktxt navbt'>//</span>about</button>
          <button onClick={() => {projectRef.current?.scrollIntoView({behavior: 'smooth'})}}><span className='blktxt navbt'>//</span>projects</button>
          <button onClick={() => {contactRef.current?.scrollIntoView({behavior: 'smooth'})}}><span className='blktxt navbt'>//</span>contact</button>
        </div>
      </div>
      <div className="footer">
        <div className="contact-icons">
          <a href='https://www.linkedin.com/in/albert-mkhitaryan-334106297'>
            <button className='linked-in'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
            </button>
          </a>
          <a href='https://github.com/albertmkh'>
            <button className="github">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
            </button>
          </a>
        </div>
      </div>
      <div ref={homeRef}className='landpg'>
        <div className='intro'>
          <div className='name'>Albert Mkhitaryan</div>
          <div className='description'>Full Stack Web Developer <span className='blktxt'>&</span> App Developer</div>
        </div>
        <div className='scroll-element'>
          <a id="scroll-btn"></a>
        </div>
      </div>
      <div ref={aboutRef} className='about-page'>
        <div className="about-me">
          I am a Full Stack Web Developer and an App Developer based out of Los Angeles, CA. I am currently a junior at UCLA and plan to graduate June 2025. For any further information, don't hesitate to contact me.<br></br>
          <a href='https://docs.google.com/document/d/1cvg8wWYZ2zX3r4es-xCAZBQvJhuShDsbAIjCpp4J5SU/edit?usp=sharing'>
            <button className="about-resume" type="submit">
              My Resume
            </button>
          </a>
        </div>
        <div className="about-skills">
          <div className="skill-title">
            My Skills
          </div>
          <div className="skill-list">
            <span className="skill">Python</span>
            <span className="skill">HTML</span>
            <span className="skill">CSS</span>
            <span className="skill">React</span>
            <span className="skill">MySQL</span>
            <span className="skill">PHP</span>
            <span className="skill">C++</span>
            <span className="skill">SEO</span>
            <span className="skill">Python</span>
            <span className="skill">Django</span>
            <span className="skill">Javascript</span>
          </div>
        </div>
      </div>
      <div ref={projectRef} className='projectpg'>
        <div className='project-list'>
          <button onClick={displayPortfolioProject} className='project'>
            <span className='project-text'>
              <span className='project-title'>Portfolio Website</span>
              <span className='project-date'>2024</span>
              <span className='project-description'>A portfolio website.</span>
            </span>
          </button>
          <button onClick={displayEzCertsProject} className='project'>
            <span className='project-text'>
              <span className='project-title'>EzCerts</span>
              <span className='project-date'>2023</span>
              <span className='project-description'>A certificate of insurance generator.</span>
            </span>
          </button>
          <button onClick={displayTaskifyProject} className='project'>
            <span className='project-text'>
              <span className='project-title'>Taskify</span>
              <span className='project-date'>2024</span>
              <span className='project-description'>A simple task management app.</span>
            </span>
          </button>
          <button onClick={displayRareKickzProject} className='project'>
            <span className='project-text'>
              <span className='project-title'>RareKickz</span>
              <span className='project-date'>2022</span>
              <span className='project-description'>A website for a sneaker store.</span>
            </span>
          </button>
        </div>
        <div className='project-demonstration'>
          <div className='site'>
            <img className='image' src={picture}/>
            <div className='abt-project'> { description } </div>
            <div className='skills-used'>
              <span className='skills-used-text'>Skills Used:</span>
              <div className='smskill'> { skills } </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={contactRef} className='contact-page'>
        <form className='contact-form' action="https://api.web3forms.com/submit" method="POST">
          <span className='contact-text'>To reach me, please fill out the form, and I'll respond promptly.</span>
          <input type="hidden" name="access_key" value="d5b0f701-5e39-4a20-a97d-18577768fc61"></input>
          <div className='contact-name'>
            <span>Name</span>
            <input className='name-input' type="text" name="name" required></input>
          </div>
          <div className='contact-email'>
            <span>E-mail</span>
            <input className='email-input' type="email" name="email" required></input>
          </div>
          <div className="contact-message">
            <span>Message</span>
            <textarea className='message-input' name="message" required></textarea>
          </div>
          <div className="h-captcha" data-captcha="true"></div>
          <button className='contact-submit' type="submit">Submit</button>
        </form>

        <script src="https://web3forms.com/client/script.js" async defer></script>
      </div>
    </div>
  )
}

export default App;