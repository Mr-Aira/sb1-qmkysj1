import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Star } from 'lucide-react';
import { ZodiacWheel } from './components/ZodiacWheel';
import { BirthdayCountdown } from './components/BirthdayCountdown';
import { ZodiacCard } from './components/ZodiacCard';
import { getZodiacSign, calculateNextBirthday } from './utils/zodiacData';
import type { UserBirthday } from './types/zodiac';

function App() {
  const [birthday, setBirthday] = useState<UserBirthday | null>(null);
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const day = parseInt(formData.get('day') as string);
    const month = parseInt(formData.get('month') as string);
    const year = parseInt(formData.get('year') as string);
    
    setBirthday({ day, month, year });
    setShowForm(false);
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50L50 0L0 0L0 50L50 50' fill='%23ffffff' fill-opacity='0.02'/%3E%3C/svg%3E")`,
      }}
    >
      {showForm ? (
        <motion.div 
          className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mb-8">
            <Star className="absolute text-yellow-300 w-8 h-8 -top-4 -left-4 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Birthday Astrology
            </h1>
          </div>
          
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 bg-white/5 backdrop-blur-lg p-8 rounded-xl">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="month" className="block text-sm font-medium mb-2">Month</label>
                <input
                  required
                  type="number"
                  name="month"
                  min="1"
                  max="12"
                  className="w-full px-4 py-2 bg-purple-900/50 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
                />
              </div>
              <div>
                <label htmlFor="day" className="block text-sm font-medium mb-2">Day</label>
                <input
                  required
                  type="number"
                  name="day"
                  min="1"
                  max="31"
                  className="w-full px-4 py-2 bg-purple-900/50 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
                />
              </div>
              <div>
                <label htmlFor="year" className="block text-sm font-medium mb-2">Year</label>
                <input
                  required
                  type="number"
                  name="year"
                  min="1900"
                  max={new Date().getFullYear()}
                  className="w-full px-4 py-2 bg-purple-900/50 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium 
                       hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Discover Your Cosmic Journey
            </button>
          </form>
        </motion.div>
      ) : birthday ? (
        <div className="container mx-auto px-4 py-16 space-y-12">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
              <Sparkles className="text-yellow-300" />
              Your Cosmic Profile
              <Sparkles className="text-yellow-300" />
            </h1>
            <BirthdayCountdown targetDate={calculateNextBirthday(birthday.month, birthday.day)} />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <ZodiacWheel />
            </div>
            <div>
              <ZodiacCard sign={getZodiacSign(birthday.month, birthday.day)} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;