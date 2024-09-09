// components/TeamMemberCard.js
import Image from 'next/image';
import Link from 'next/link';

interface AboutImgsProps {
  name: string;
  role: string;
  imgSrc: string;
  linkedinUrl: string;
}

const TeamMemberCard = ({ name, role, imgSrc, linkedinUrl }: AboutImgsProps) => {
  return (
    <div className="card_1 backdrop-blur-sm">
      <div className="content">
        <div>
          <Image width={290} height={290} src={imgSrc} quality={80} alt={`${name}'s profile picture`} className='rounded-xl'/>
        </div>
        <div className="contentBx">
          <h3>│{name}<br /><span>{role}</span></h3>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
