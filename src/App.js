import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="nn">
        <ul>
          <img className="logo" src="/f.png" width="33px" alt="Logo" />
          <li><p><a href="#one">Home</a></p></li>
          <li><p><a href="#two">About me</a></p></li>
          <li><p><a href="#three">My skills</a></p></li>
          <li><p><a href="#four">My projects</a></p></li>
          <li><p><a href="#five">Contact</a></p></li>
          <li><p><a href="#ed">My education</a></p></li>
        </ul>
      </nav>

      <div className="container">
        <h1 className="name" id="one">
          <b>Hello, I'm <span className="myname">Heba Al_samaheen</span></b>
          <p className="pr">Web developer and Exceptional collaborative and out-of-the-box thinker who is looking for a creative company.</p>
          <a href="#five"><button className="button2">Contact Me</button></a>
        </h1>
        <img className="myphoto" src="/03181864a6974254ad69931bec4cd5eb.png" width="200" height="200" style={{ borderRadius: '333px', marginTop: '44px' }} alt="My Photo" />
      </div>

      <div className="about">
        <h1 className="tt" id="two">About me</h1>
        <div className="abtme">
          <div>
            <img className="ii" src="/03181864a6974254ad69931bec4cd5eb.png" alt="About Me" />
          </div>
          <div>
            <p className="me"><i>I am a web developer looking for an opportunity to apply what I have learned in programming. I am a creative developer oriented looking for an opportunity to develop my skills.</i></p>
          </div>
        </div>

        <h1 className="myeducation" id="ed">My Education</h1>
        <div className="education">
          <div className="e1">
            <img className="en" src="/university.png" width="300px" alt="University" />
            <p>Bachelor's degree in Business Administration for the year 2022/2023 from the University of Jordan, Aqaba Branch</p>
          </div>
          <div className="e1">
            <img className="en" src="/52531209.png" width="300px" height="260px" alt="Orange Academy" />
            <p>Current trainee at Orange Academy for programming</p>
          </div>
        </div>

        <h1 className="ski" id="three">My skills</h1>
        <div className="skills">
          <div className="sl"><img src="/canva-logo-0.png" width="170px" alt="Canva" /></div>
          <div className="sl"><img src="/HTML5_badge.png" width="150px" alt="HTML5" /></div>
          <div className="sl"><img src="/github_PNG40.png" width="180px" alt="GitHub" /></div>
          <div className="sl"><img src="/figma-logo.png" width="100px" alt="Figma" /></div>
          <div className="sl"><img src="/R.png" width="130px" alt="R" /></div>
        </div>

        <h1 className="aa" id="four">My Projects</h1>
        <div className="fff">
          <div className="item1"><a href="https://www.figma.com/design/cSexuE6vTfQPAUYWRRxP5t/Untitled?t=k9dEWKH0417TUyV2-1"><img src="/لقطة شاشة 2024-05-19 130455.png" width="250" alt="Project 1" /></a></div>
          <div className="item2"><a href="https://www.figma.com/design/cSexuE6vTfQPAUYWRRxP5t/Untitled?node-id=31-2&t=pqUaOC8ZJjAgHSG5-1"><img src="/net.png" style={{ width: '250px' }} alt="Project 2" /></a></div>
          <div className="item3"><a href="https://www.figma.com/design/cSexuE6vTfQPAUYWRRxP5t/Untitled?node-id=34-12&t=pqUaOC8ZJjAgHSG5-1"><img src="/لقطة شاشة 2024-05-19 130546.png" width="250" alt="Project 3" /></a></div>
        </div>
        <div className="fff">
          <div className="item1"><a href="https://www.figma.com/design/cSexuE6vTfQPAUYWRRxP5t/Untitled?node-id=8-2&t=pqUaOC8ZJjAgHSG5-1"><img src="/لقطة شاشة 2024-05-19 130605.png" width="250" alt="Project 4" /></a></div>
          <div className="item2"><a href="https://www.figma.com/design/cSexuE6vTfQPAUYWRRxP5t/Untitled?node-id=8-2&t=pqUaOC8ZJjAgHSG5-1"><img src="/لقطة شاشة 2024-05-19 130622.png" width="250" alt="Project 5" /></a></div>
          <div className="item3"><a href="file:///C:/Users/Orange/Desktop/project%201/index.html"><img src="/لقطة شاشة 2024-05-19 131528.png" width="400" alt="Project 6" /></a></div>
        </div>
      </div>

      <h1 className="bb" id="five">Contact</h1>
      <div className="cont">
        <div><a href="https://www.linkedin.com/in/heba-sam-9159992b5/"><img src="/8af4677c8a934146869c597cab2f02aa.png" height="40" alt="LinkedIn" /></a></div>
        <div><a href="https://www.facebook.com/heba.mohd.777?mibextid=ZbWKwL"><img src="/ae26b2cae371431da3f5cd9a99a97fe9.png" height="40" alt="Facebook" /></a></div>
        <div><a href="https://github.com/hebasam00"><img src="/OIP.jpg" height="40" alt="GitHub" /></a></div>
        <div><img src="/ddc128f7dcfc454baeb90707f09dd1c3.png" width="40" alt="Phone" />
          <p className="kk">0797085066</p>
        </div>
        <div><img src="/mail-icon-logo-template-icono-de-gmail-11562954424h5fw2mradf.png" width="40" height="20px" alt="Email" />
          <p className="qq">hepsam22@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
