// src/pages/Onepage.js
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Onepage.css';


export default function Onepage() {
  const videoRef = useRef(null);
  const [muted] = useState(false);     
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(1); // full volume


  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const handleScroll = () => {
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) el.classList.add('visible');
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVolumeChange = (e) => {
  const v = videoRef.current;
  if (!v) return;
  const newVolume = parseFloat(e.target.value);
  v.volume = newVolume;
  setVolume(newVolume);
};

 

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const restartVideo = () => {
  const v = videoRef.current;
  if (!v) return;
  v.currentTime = 0;   // go back to start
  v.play();            // start playing again
  setIsPlaying(true);
};
// after refs/state
useEffect(() => {
  if (videoRef.current) {
    videoRef.current.muted = muted;
    videoRef.current.volume = volume;
  }
}, [muted, volume]); 



  return (
    <div className="onepage">

        {/* <nav className="navbar">
  <ul className="nav-links">
    <li><a href="#hero">Home</a></li>
    <li><a href="#problem">Problem</a></li>
    <li><a href="#solution">How It Works</a></li>
    <li><a href="#traction">Traction</a></li>
    <li><a href="#vision">Vision</a></li>
    <li><a href="#founder">Founder</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav> */}

      {/* Hero Banner */}
     <section id="hero" className="hero video-hero">
    <video
  ref={videoRef}
  autoPlay
  loop
  playsInline
  muted={muted}    
  className="hero-video"
>
  <source src="/videos/DOKO_Battlefield_Preview.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

        {/* Custom controls */}
      <div className="video-controls" role="group" aria-label="Hero video controls">
  <button className="video-btn" onClick={togglePlay}>
    {isPlaying ? "⏸️ Pause" : "▶️ Play"}
  </button>
  <button className="video-btn" onClick={restartVideo}>
    🔁 Restart
  </button>
  <input
    type="range"
    min="0"
    max="1"
    step="0.05"
    value={volume}
    onChange={handleVolumeChange}
    aria-label="Volume control"
  />
</div>


  <div className="hero-overlay">
    <div className="logo">
      <img src="/DOKO_Battlefield.png" alt="Logo" className="logo-img" />
    </div>
    <h1 className="hero-title">The Future of Combat + Culture Is Here.</h1>
    <p className="hero-subtitle">
      Immersive combat sport, wearable tech, and rhythm-based VR — all in one unforgettable experience.
    </p>
    <Link to="/vr-tour" className="hero-button">Watch the Walkthrough</Link>
    <Link to="/contact" className="hero-button">Join Our Vision</Link>
  </div>
</section>



      {/* About DOKO (Problem + Purpose)*/}
      <section id="problem" className="about problem fade-in">
        <h2 className="section-title">What problem are we solving?</h2>
        <p className="section-text">
          <strong>Combat sports and immersive entertainment are often hard to access, overly competitive, or built for a limited audience.</strong> Many people — especially women, families, and underrepresented communities — feel left out of active spaces that should be fun, safe, and empowering.
<br />
Most venues today lean toward either fitness or nightlife, not purpose, creativity, or community. Places like Topgolf create exciting environments, but often come with a bar-and-nightclub vibe that doesn’t serve families or those seeking clean, meaningful experiences. Meanwhile, traditional gyms, arcades, and VR lounges rarely offer anything physically engaging and culturally intentional.

        </p>
        <h4 className="section-title">
          Who is DOKO for?
        </h4>
         <p className="section-text">
          People who want to move their bodies in a space that’s immersive, but not intimidating
<br />
Groups seeking tech-powered, clean, and social experiences they can enjoy together
<br />
Creatives, athletes, and gamers looking for something new, exciting, and inclusive — not just another bar, bowling alley, or escape room

        </p>
        <p className="section-text">
DOKO is building a new category — where movement, tech, and story come together in a space that’s built for everyone.
  
            </p> 
      </section>

          {/* How DOKO Works (Solution)*/}
      <section id="solution" className="about solution fade-in">
        <h2 className="section-title">How DOKO Works?</h2>
        <p className="section-text">
          We combine real-life combat training and performance areas, VR experiences, food, and immersive tech into one unforgettable space. Whether someone is new to sports or just looking for something different, DOKO makes it easy and exciting to jump in.
        </p>
        <h4 className="section-title">
          What makes DOKO unique?
        </h4>
           <ul className="section-text">
       <li> <strong>Smart wearable gear</strong> with QR code check-ins and real-time waitlist tracking — so there are no long lines or confusion </li>
     <li> <strong>Auto-captured video and photo footage </strong> so players can relive and share their favorite moments</li>
         <li><strong>Theater-style viewing rooms</strong> where friends and family can watch and cheer</li>
         <li> <strong>Indoor landscaping and projection domes</strong> that transform the entire space into a themed, story-driven world</li>
         <li>  <strong>Clean, alcohol-free food and drink options</strong>  that make it family-friendly and welcoming to all backgrounds</li>
        </ul>
         <p className="section-text">
            Everything is designed to be high-energy, safe, and inclusive — so that everyone, not just combat athletes, can belong, play, and connect.
         </p>
      </section>

      {/*  Project Milestones (Traction) */}
      <section id="traction" className="traction fade-in">
  <h2 className="section-title">Project Milestones (Traction)!</h2>
  <p className="section-text">
    I’ve bootstrapped DOKO Battlefield from the ground up — combining my skills in tech, design, and business to build a clear foundation with real progress.
  </p>
  <ul className="timeline">
    <li>✅ Website launched with detailed brand messaging, visuals, and sections for each major experience</li>
    <li>✅ Pitch deck, budget, and investor documents fully built and ready for outreach</li>
    <li>✅ Custom smart wearable prototype created using ESP32 microcontroller, Flask backend, and real-time waitlist logic</li>
    <li>✅ Interactive VR walkthrough of the DOKO venue built in Unity, with themed rooms, dome projections, and immersive props</li>
    <li>✅ Naqi VR Game in development — a rhythm-based, body-controlled combat experience</li>
    <li>✅ Brand extensions like DOKO Feast Field and The Shop fully conceptualized</li>
    <li>✅ Social media channels created and launched, outreach to 40+ investors</li>
    <li>✅ Full business plan, 3-phase roadmap (Pop-Up → Detroit Pilot → Atlanta Flagship), and financial projections complete</li>
    <li>✅ Accepted in the Pegasus Ignite program</li>
    <li>✅ Completed 3 Lvlup bootcamps</li>
     <li>✅ Entered 2 Lvlup pitch competition</li>
    <li>✅ Currently in the Lvlup Labs program</li>
  </ul>
</section>

      {/* Our Vision (Long-Term) */}
      <section id="vision" className="long-term fade-in">
        <h2 className="section-title">Our Vision!</h2>
        
        <p className="section-text">
  We’re starting with a self-funded Detroit Pop-Up, building toward a Detroit Pilot facility, and then 
  scaling into the flagship Atlanta arena — each phase expanding what DOKO can offer in impact, tech, and reach.
</p>
 <h4 className="section-title">We’re starting with a flagship location, but the long-term umbrella includes:</h4>
   <ul className="roadmap">
<li>Multiple DOKO Battlefield venues in major cities, each tailored to reflect local culture and community</li>
<li>A product line of smart wearable gear, real-time tracking systems, and in-house media tools for capturing and sharing footage</li>
<li>Our own VR rhythm-based combat game (Naqi) that lets players train, compete, and explore the DOKO universe from anywhere</li>
<li>The Shop — a physical and digital retail brand featuring exclusive DOKO merchandise, wearable tech, and culturally curated gear for athletes, artists, and fans</li>
<li>ELOS — a sister concept to DOKO: an interactive art and cultural museum focused on creative expression, immersive tech, and sensory-based activities that bring joy and reflection to all ages</li>
</ul>
  <p className="section-text">At its core, DOKO is about building clean, empowering, culturally-rich environments where people come not just to be entertained — but to grow, feel seen, and experience something unforgettable.</p>

      </section>

       {/*  Founder Section (Why Me) */}
        <section id="founder" className="why-me fade-in">
        <img src="/Treneese.png" alt="Treneese Johnson" className="founder-photo" />
          <div className="founder-text">
    <h2 className="section-title">Why me?</h2>
        <h3>Treneese Johnson</h3>
        <p><strong>Founder</strong></p>
        <p>
          Growing up in America, I was surrounded by gun ranges — but I was always more drawn to blades and 
          skill-based combat. Guns felt loud, reactive, and temporary. Blades felt creative, controlled, and 
          intentional. My love for knives and precision naturally led me to admire all kinds of combat sports — 
          but I never felt like I had access. It always seemed too niche, too expensive, or like a space I didn’t belong in.
<br />
        What combat sports symbolize — discipline, self-awareness, and respect — are values I believe people need more of today.
         Not just for competition, but for confidence, focus, and personal growth. That’s why I created DOKO: a space where culture, 
         movement, and technology come together in a way that feels welcoming, inspiring, and real.
        </p>

        


         <h4>DOKO also reflects my identity.</h4>
          <p className="section-text">
          <strong>As a Muslim and a mother</strong> , I’m mindful of the environments I step into. 
<br />
          <strong>DOKO Bar </strong> , despite the name, is a 100% alcohol-free electrolyte and vitamin bar — built to refuel your body and
           offer a clean space to rest between experiences.
<br />
          <strong>DOKO Feast Field</strong> blends cultures through food, just like the Detroit I grew up in — where any ethnicity, any flavor,
           any culture can be found and celebrated.

        </p>
         <p className="section-text">
            I’m passionate about solving this because DOKO is not just a business to me — it’s a vision for a better, more inclusive future. 
            One that feels like home.
         </p>
           </div>
    </section>

      {/* Call to Action */}
      <section id="contact" className="home-cta fade-in">
       <h2>Want to support DOKO, invest, or collaborate on the pop-up?</h2>
        <Link to="/contact" className="hero-button">Get In Touch </Link>
      </section>

    </div>
  );
}

 // const toggleMute = () => {
  //   const v = videoRef.current;
  //   if (!v) return;
  //   v.muted = !v.muted;
  //   setMuted(v.muted);
  // };