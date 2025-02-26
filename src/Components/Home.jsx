import '../CSS/Home.css';
import image from '../assets/AVSaisundar.jpg';
function Home(){
    return (
      <main>
        <div>
          <img
            src={image}
            height="347px"
            width="247px"
          ></img>
          <h1 className="desi">Hi, I am A V Saisundar</h1>
          <p className='intro'>I am a Computer Science and Engineering student with a strong interest in Data Science. I have expertise in programming, full-stack development, and data science. I gained practical experience through an internship at Supraja Technologies. Currently, I am also pursuing an IITM B.S. degree in Data Science while improving my problem-solving skills, with a LeetCode count of 199 and a Skillrack score of 823. Aspiring to become a Software Developer, I am continuously learning and growing to excel in the tech industry.</p>
        </div>
      </main>
    );
}

export default Home;