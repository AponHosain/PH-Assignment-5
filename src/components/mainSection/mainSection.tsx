import SkillCard from './SkillCard';
import type { Icard } from '../../types/CardTypes';
import { use } from 'react';



interface CardProps {
  cardPromise: Promise<Icard[]>;
}

const MainSection = ({ cardPromise }: CardProps) => {
  const cards = use(cardPromise);

  return (
    <div>
      <div className=' container mx-auto my-5'>
        <h1 className='text-3xl font-bold'>Explore the <span className='text-pink-500'>Technologies</span></h1>
        <p className='font-thin'>Pick one technology per category to build your ideal stack.</p>
      </div>
      <SkillCard cards={cards} />
      <footer/>
    </div>
  );
};

export default MainSection;
