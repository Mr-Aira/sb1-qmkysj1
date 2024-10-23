import { ZodiacSign } from '../types/zodiac';

export const getZodiacSign = (month: number, day: number): ZodiacSign => {
  const signs: Record<string, ZodiacSign> = {
    aries: {
      name: 'Aries',
      symbol: '♈',
      date: 'March 21 - April 19',
      element: 'Fire',
      traits: ['Confident', 'Courageous', 'Enthusiastic', 'Impulsive', 'Natural Leader'],
      description: 'Aries is a passionate, motivated, and confident leader who builds community with their cheerful disposition and relentless determination.',
      compatibility: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
      luckyNumbers: [1, 8, 17],
      color: 'rgb(239 68 68)'
    },
    taurus: {
      name: 'Taurus',
      symbol: '♉',
      date: 'April 20 - May 20',
      element: 'Earth',
      traits: ['Patient', 'Reliable', 'Devoted', 'Determined', 'Stable'],
      description: 'Taurus is known for being reliable, practical, ambitious and sensual. These steadfast personalities love relaxing, working with their hands, and routines.',
      compatibility: ['Virgo', 'Capricorn', 'Cancer', 'Pisces'],
      luckyNumbers: [2, 6, 15],
      color: 'rgb(34 197 94)'
    },
    gemini: {
      name: 'Gemini',
      symbol: '♊',
      date: 'May 21 - June 20',
      element: 'Air',
      traits: ['Adaptable', 'Versatile', 'Intellectual', 'Communicative', 'Witty'],
      description: 'Gemini is energetic and quick-witted. They are intellectual, adaptable, and masters of communication who bring playfulness to all they do.',
      compatibility: ['Libra', 'Aquarius', 'Aries', 'Leo'],
      luckyNumbers: [3, 12, 21],
      color: 'rgb(234 179 8)'
    },
    cancer: {
      name: 'Cancer',
      symbol: '♋',
      date: 'June 21 - July 22',
      element: 'Water',
      traits: ['Nurturing', 'Protective', 'Intuitive', 'Emotional', 'Caring'],
      description: 'Cancer is deeply intuitive and sentimental. They care deeply about matters of family and home, and are protective and highly emotional.',
      compatibility: ['Scorpio', 'Pisces', 'Taurus', 'Virgo'],
      luckyNumbers: [4, 13, 22],
      color: 'rgb(147 197 253)'
    },
    leo: {
      name: 'Leo',
      symbol: '♌',
      date: 'July 23 - August 22',
      element: 'Fire',
      traits: ['Creative', 'Passionate', 'Generous', 'Warm-hearted', 'Cheerful'],
      description: 'Leo is dramatic, creative, self-confident, and born to lead. They have a natural royal air that draws people to their magnetic personalities.',
      compatibility: ['Aries', 'Sagittarius', 'Gemini', 'Libra'],
      luckyNumbers: [5, 14, 23],
      color: 'rgb(234 88 12)'
    },
    virgo: {
      name: 'Virgo',
      symbol: '♍',
      date: 'August 23 - September 22',
      element: 'Earth',
      traits: ['Analytical', 'Practical', 'Diligent', 'Modest', 'Intelligent'],
      description: 'Virgo is analytical, practical, and precise. Their deep sense of humanity makes them one of the most careful signs of the zodiac.',
      compatibility: ['Taurus', 'Capricorn', 'Cancer', 'Scorpio'],
      luckyNumbers: [6, 15, 24],
      color: 'rgb(168 162 158)'
    },
    libra: {
      name: 'Libra',
      symbol: '♎',
      date: 'September 23 - October 22',
      element: 'Air',
      traits: ['Diplomatic', 'Gracious', 'Fair-minded', 'Social', 'Peaceful'],
      description: 'Libra is peaceful, fair, and diplomatic. They are natural mediators who seek harmony and balance in all aspects of life.',
      compatibility: ['Gemini', 'Aquarius', 'Leo', 'Sagittarius'],
      luckyNumbers: [7, 16, 25],
      color: 'rgb(216 180 254)'
    },
    scorpio: {
      name: 'Scorpio',
      symbol: '♏',
      date: 'October 23 - November 21',
      element: 'Water',
      traits: ['Passionate', 'Resourceful', 'Powerful', 'Mysterious', 'Intense'],
      description: 'Scorpio is passionate, independent, and unafraid to blaze their own trail. They are known for their calm and cool persona.',
      compatibility: ['Cancer', 'Pisces', 'Virgo', 'Capricorn'],
      luckyNumbers: [8, 17, 26],
      color: 'rgb(127 29 29)'
    },
    sagittarius: {
      name: 'Sagittarius',
      symbol: '♐',
      date: 'November 22 - December 21',
      element: 'Fire',
      traits: ['Optimistic', 'Adventurous', 'Philosophical', 'Outgoing', 'Honest'],
      description: 'Sagittarius is optimistic, adventurous, and philosophical. They have a boundless enthusiasm for life and new experiences.',
      compatibility: ['Aries', 'Leo', 'Libra', 'Aquarius'],
      luckyNumbers: [9, 18, 27],
      color: 'rgb(147 51 234)'
    },
    capricorn: {
      name: 'Capricorn',
      symbol: '♑',
      date: 'December 22 - January 19',
      element: 'Earth',
      traits: ['Responsible', 'Disciplined', 'Self-controlled', 'Ambitious', 'Patient'],
      description: 'Capricorn is ambitious, determined, and practical. They possess an inner state of independence that enables significant progress in life.',
      compatibility: ['Taurus', 'Virgo', 'Scorpio', 'Pisces'],
      luckyNumbers: [10, 19, 28],
      color: 'rgb(55 65 81)'
    },
    aquarius: {
      name: 'Aquarius',
      symbol: '♒',
      date: 'January 20 - February 18',
      element: 'Air',
      traits: ['Progressive', 'Original', 'Independent', 'Humanitarian', 'Intellectual'],
      description: 'Aquarius is progressive, original, and independent. They are deep thinkers with a love for helping others and intellectual conversation.',
      compatibility: ['Gemini', 'Libra', 'Aries', 'Sagittarius'],
      luckyNumbers: [11, 20, 29],
      color: 'rgb(6 182 212)'
    },
    pisces: {
      name: 'Pisces',
      symbol: '♓',
      date: 'February 19 - March 20',
      element: 'Water',
      traits: ['Intuitive', 'Artistic', 'Compassionate', 'Gentle', 'Musical'],
      description: 'Pisces is intuitive, artistic, and deeply feeling. They are the most spiritual of the zodiac signs, with a strong connection to the arts and music.',
      compatibility: ['Cancer', 'Scorpio', 'Taurus', 'Capricorn'],
      luckyNumbers: [12, 21, 30],
      color: 'rgb(147 197 253)'
    }
  };

  // Determine zodiac sign based on month and day
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return signs.aries;
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return signs.taurus;
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return signs.gemini;
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return signs.cancer;
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return signs.leo;
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return signs.virgo;
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return signs.libra;
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return signs.scorpio;
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return signs.sagittarius;
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return signs.capricorn;
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return signs.aquarius;
  return signs.pisces;
};

export const calculateNextBirthday = (birthMonth: number, birthDay: number): Date => {
  const today = new Date();
  let nextBirthday = new Date(today.getFullYear(), birthMonth - 1, birthDay);
  
  if (nextBirthday < today) {
    nextBirthday = new Date(today.getFullYear() + 1, birthMonth - 1, birthDay);
  }
  
  return nextBirthday;
};