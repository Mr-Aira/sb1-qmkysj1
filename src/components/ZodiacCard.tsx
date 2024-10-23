import { motion } from 'framer-motion';
import type { ZodiacSign } from '../types/zodiac';

type ZodiacCardProps = {
  sign: ZodiacSign;
};

export const ZodiacCard = ({ sign }: ZodiacCardProps) => {
  return (
    <motion.div
      className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 text-white"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <span className="text-4xl">{sign.symbol}</span>
        <div>
          <h2 className="text-2xl font-bold">{sign.name}</h2>
          <p className="text-purple-200">{sign.date}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Element</h3>
          <p className="text-purple-200">{sign.element}</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Traits</h3>
          <div className="flex flex-wrap gap-2">
            {sign.traits.map((trait) => (
              <span key={trait} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">
                {trait}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-purple-200">{sign.description}</p>
        </div>
      </div>
    </motion.div>
  );
};