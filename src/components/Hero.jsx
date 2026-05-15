import '../styles/hero.css';
import profile from '../assets/profile.png';

function Hero() {
  return (
    <section id="home" className="hero">
      {/* Profile Image */}
      <img
        src={profile}
        alt="Naflet Nigatu"
        className="profile-image"
      />

      <h1>Hello, I'm Naflet Nigatu</h1>
      <h2>Computer Science Student & Frontend Developer</h2>

      <p>
    
       I am a frontend developer with a passion for 
       building high-end, immersive digital experiences.
        I specialize in crafting performant web and
         mobile applications using React and React
          Native, focusing on writing clean, 
          maintainable code. I love bridging the
           gap between complex backend logic and sleek,
            user-friendly design
      </p>

      <a href="#projects" className="btn">
        View My Work
      </a>
    </section>
  );
}

export default Hero;