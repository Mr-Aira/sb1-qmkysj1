import { motion } from 'framer-motion';
import { getZodiacSign } from '../utils/zodiacData';

const ZODIAC_SYMBOLS = [
  '♈', '♉', '♊', '♋', '♌', '♍', 
  '♎', '♏', '♐', '♑', '♒', '♓'
];

export const ZodiacWheel = () => {
  return (
    <div className="relative w-96 h-96">
      <motion.div 
        className="absolute inset-0 rounded-full border-2 border-purple-500/30"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      >
        {ZODIAC_SYMBOLS.map((symbol, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const x = Math.cos(angle) * 150 + 192;
          const y = Math.sin(angle) * 150 + 192;
          
          return (
            <motion.div
              key={symbol}
              className="absolute text-2xl text-purple-300/70 transform -translate-x-1/2 -translate-y-1/2 hover:text-purple-200 hover:scale-150 transition-all duration-300"
              style={{ left: x, top: y }}
              whileHover={{ scale: 1.2 }}
            >
              {symbol}
            </motion.div>
          );
        })}
      </motion.div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="text-4xl text-yellow-300">✧</div>
        </motion.div>
      </div>
      
      <div className="absolute inset-0">
        {Array.from({ length: 36 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-300/30"
            style={{
              left: '50%',
              top: '50%',
              transform: `rotate(${i * 10}deg) translate(180px)`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </div>
  );
};