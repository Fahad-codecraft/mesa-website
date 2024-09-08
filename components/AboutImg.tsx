import AboutImgs from "./AboutImgsCard";
import { SparklesCore } from "./ui/sparkels";

const CoreTeam = () => {
  const officeBearer = [
    {
      name: 'Shriram Nimbalkar',
      role: 'Vice-President',
      imgSrc: '/About/1. Shriram.webp',
      linkedinUrl: 'https://www.linkedin.com/in/shreyash-mogaveera'
    },
    {
      name: 'Prajakta Wagh',
      role: 'President',
      imgSrc: '/About/2. Prajakta.webp',
      linkedinUrl: 'https://www.linkedin.com/in/prajakta-wagh-0388b3259'
    },
    {
      name: 'Shravani Mahajan',
      role: 'Vice-President',
      imgSrc: '/About/3. Shravani Mahajan.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },
    {
      name: 'Kaushik Ashtekar',
      role: 'Secretary',
      imgSrc: '/About/4. Kaushik.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },
    {
      name: 'Abhinav Ujjiankar',
      role: 'Treasurer',
      imgSrc: '/About/5. Abhinav.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },
    {
      name: 'Shravani Wakchaure',
      role: 'Human Resource',
      imgSrc: '/About/6. Shravani Wackchure.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },
    {
      name: 'Siddhi Tiwari',
      role: 'Event Management Head',
      imgSrc: '/About/7. Siddhi Tiwari.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },
    {
      name: 'Rajwardhan Kadam',
      role: 'Director of Marketing',
      imgSrc: '/About/8. Rajwardhan.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },
    {
      name: 'Sujal Hanji',
      role: 'Director of Social Media',
      imgSrc: '/About/9. Sujal Hanji.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },
    {
      name: 'Society of Women Engineering',
      role: 'Aditi Mane',
      imgSrc: '/About/10. Aditi Mane.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },
    {
      name: 'Atharva Wankar',
      role: 'Isr Cell head',
      imgSrc: '/About/11. Atharva Wankar.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },
    {
      name: 'Devraj Patil',
      role: 'Higher Studies Cell ',
      imgSrc: '/About/12. Devraj.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },
    {
      name: 'Samiksha Koli',
      role: 'Cultrual and Social Activity',
      imgSrc: '/About/13. Samisksha Koli.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },
    {
      name: 'tanmay Shah',
      role: 'Senior Editor',
      imgSrc: '/About/14. Tanmay Shah.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },
    {
      name: 'Parth Lekule',
      role: 'President',
      imgSrc: '/About/15. Parth Lekule.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },
    {
      name: 'Abhishek Salunkhe',
      role: 'Senior Advisor',
      imgSrc: '/About/16. Abhishek.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },
    {
      name: 'Anirudh Gahane',
      role: 'Senior Advisor',
      imgSrc: '/About/17. Anirudh.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },
    {
      name: 'Aastha Hajare',
      role: 'Senior Advisor',
      imgSrc: '/About/18. Aastha.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },
    {
      name: 'Pritesh Amrutkar',
      role: 'Senior Advisor',
      imgSrc: '/About/19. Pritesh.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },
    {
      name: 'Shrutika Kale',
      role: 'Senior Advisor',
      imgSrc: '/About/20. Shrutika.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },
    {
      name: 'Tanaya Sutar',
      role: 'Senior Advisor',
      imgSrc: '/About/21. Tanaya.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },
    {
      name: 'Patik Rohokale',
      role: 'Senior Advisor',
      imgSrc: '/About/22. Pratik.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },
    {
      name: 'Priyanka Shridhonkar',
      role: 'Senior Advisor',
      imgSrc: '/About/23. Priyanka.webp',
      linkedinUrl: 'https://www.linkedin.com/in/abhishek-salunkhe-93bbb5236'
    },

  ];


  return (
    <>
      <div className="fixed h-full w-full inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={10}
          speed={10}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="py-20 flex items-center justify-center flex-col">
        <h1 className="md:text-7xl text-3xl lg:text-8xl font-bold text-center text-white relative z-20">
          OFFICE BEARER's
        </h1>
        <div className="w-[40rem] mb-7 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeBearer.map((member, index) => (
              <AboutImgs key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoreTeam;
