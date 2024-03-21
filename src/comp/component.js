import React from 'react';
import profile from '../profile.jpg'
import './style.css'

function Component() {
  return (
    <div className='box'>
        <header>
            <p>
                Rory McGinnis
            </p>
        <img 
    className = "profile-picture"
    src={profile}
    />
        </header>
    <p>
      Hello, I'm Rory, and I'm passionate about crafting 
      innovative solutions as a software engineer. 
      With a blend of creativity and technical expertise, 
      I thrive on transforming complex ideas into user-friendly experiences.
    </p>

    <p>
        I am a former collegiate basketball player and in my free time I enjoy playing/watching basketball, 
        playing chess, and walking my dog through parks. I eagerly anticipate delving into the 
        fresh terrain of technology.

    </p>
    <p>
        Link to my <a href='./resume.pdf'>resume</a></p>
    <p>
        Link to my <a href="https://github.com/rorymcginnis1">github</a></p>

    <p>
        you can reach me at: <a href="mailto:rorymcginnis1@gmail.com">rorymcginnis1@gmail.com</a></p>


    </div>
    
  );
}

export default Component;
