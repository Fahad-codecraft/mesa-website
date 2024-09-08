// components/TeamMemberCard.js
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
        <div className="imgBx">
          <img src={imgSrc} alt={`${name}'s profile picture`} />
        </div>
        <div className="contentBx">
          <h3>│{name}<br /><span>{role}</span></h3>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
