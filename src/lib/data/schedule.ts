import { ClassSchedule } from '@/types';

export const classSchedule: ClassSchedule[] = [
  // Monday
  { id: 1, className: 'CrossFit WOD', trainer: 'Arjun Patil', day: 'Monday', startTime: '06:00', endTime: '07:00', duration: '60 min', floor: 1, category: 'CrossFit', maxParticipants: 15, enrolled: 12, intensity: 'Advanced' },
  { id: 2, className: 'Yoga Flow', trainer: 'Priya Desai', day: 'Monday', startTime: '07:00', endTime: '08:00', duration: '60 min', floor: 3, category: 'Yoga', maxParticipants: 25, enrolled: 18, intensity: 'All Levels' },
  { id: 3, className: 'HIIT Burn', trainer: 'Kavita Nair', day: 'Monday', startTime: '08:00', endTime: '08:45', duration: '45 min', floor: 1, category: 'Cardio', maxParticipants: 20, enrolled: 19, intensity: 'Intermediate' },
  { id: 4, className: 'Zumba Party', trainer: 'Meera Joshi', day: 'Monday', startTime: '09:00', endTime: '10:00', duration: '60 min', floor: 3, category: 'Dance', maxParticipants: 40, enrolled: 35, intensity: 'All Levels' },
  { id: 5, className: 'Strength Training', trainer: 'Rajesh Sharma', day: 'Monday', startTime: '17:00', endTime: '18:00', duration: '60 min', floor: 2, category: 'Strength', maxParticipants: 20, enrolled: 15, intensity: 'All Levels' },
  { id: 6, className: 'Evening Yoga', trainer: 'Priya Desai', day: 'Monday', startTime: '19:00', endTime: '20:00', duration: '60 min', floor: 3, category: 'Yoga', maxParticipants: 25, enrolled: 22, intensity: 'All Levels' },

  // Tuesday
  { id: 7, className: 'Functional Fitness', trainer: 'Arjun Patil', day: 'Tuesday', startTime: '06:00', endTime: '07:00', duration: '60 min', floor: 1, category: 'Functional', maxParticipants: 20, enrolled: 14, intensity: 'Intermediate' },
  { id: 8, className: 'Bollywood Dance', trainer: 'Meera Joshi', day: 'Tuesday', startTime: '07:00', endTime: '08:00', duration: '60 min', floor: 3, category: 'Dance', maxParticipants: 35, enrolled: 28, intensity: 'Beginner' },
  { id: 9, className: 'Morning HIIT', trainer: 'Kavita Nair', day: 'Tuesday', startTime: '08:00', endTime: '08:45', duration: '45 min', floor: 1, category: 'Cardio', maxParticipants: 20, enrolled: 17, intensity: 'Intermediate' },
  { id: 10, className: 'Power Yoga', trainer: 'Priya Desai', day: 'Tuesday', startTime: '10:00', endTime: '11:00', duration: '60 min', floor: 3, category: 'Yoga', maxParticipants: 25, enrolled: 20, intensity: 'Advanced' },
  { id: 11, className: 'Bodybuilding', trainer: 'Rajesh Sharma', day: 'Tuesday', startTime: '17:00', endTime: '18:30', duration: '90 min', floor: 2, category: 'Strength', maxParticipants: 15, enrolled: 13, intensity: 'Intermediate' },
  { id: 12, className: 'Zumba Evening', trainer: 'Meera Joshi', day: 'Tuesday', startTime: '19:00', endTime: '20:00', duration: '60 min', floor: 3, category: 'Dance', maxParticipants: 40, enrolled: 36, intensity: 'All Levels' },

  // Wednesday
  { id: 13, className: 'CrossFit WOD', trainer: 'Arjun Patil', day: 'Wednesday', startTime: '06:00', endTime: '07:00', duration: '60 min', floor: 1, category: 'CrossFit', maxParticipants: 15, enrolled: 11, intensity: 'Advanced' },
  { id: 14, className: 'Morning Yoga', trainer: 'Priya Desai', day: 'Wednesday', startTime: '07:00', endTime: '08:00', duration: '60 min', floor: 3, category: 'Yoga', maxParticipants: 25, enrolled: 21, intensity: 'All Levels' },
  { id: 15, className: 'Cardio Blast', trainer: 'Kavita Nair', day: 'Wednesday', startTime: '08:00', endTime: '08:45', duration: '45 min', floor: 1, category: 'Cardio', maxParticipants: 20, enrolled: 18, intensity: 'Intermediate' },
  { id: 16, className: 'Hip Hop Dance', trainer: 'Meera Joshi', day: 'Wednesday', startTime: '09:00', endTime: '10:00', duration: '60 min', floor: 3, category: 'Dance', maxParticipants: 35, enrolled: 25, intensity: 'All Levels' },
  { id: 17, className: 'Strength & Power', trainer: 'Rajesh Sharma', day: 'Wednesday', startTime: '17:00', endTime: '18:00', duration: '60 min', floor: 2, category: 'Strength', maxParticipants: 20, enrolled: 16, intensity: 'Advanced' },
  { id: 18, className: 'Restorative Yoga', trainer: 'Priya Desai', day: 'Wednesday', startTime: '20:00', endTime: '21:00', duration: '60 min', floor: 3, category: 'Yoga', maxParticipants: 20, enrolled: 14, intensity: 'Beginner' },

  // Thursday
  { id: 19, className: 'Functional HIIT', trainer: 'Kavita Nair', day: 'Thursday', startTime: '06:00', endTime: '06:45', duration: '45 min', floor: 1, category: 'Cardio', maxParticipants: 20, enrolled: 15, intensity: 'Intermediate' },
  { id: 20, className: 'Zumba Morning', trainer: 'Meera Joshi', day: 'Thursday', startTime: '07:00', endTime: '08:00', duration: '60 min', floor: 3, category: 'Dance', maxParticipants: 40, enrolled: 32, intensity: 'All Levels' },
  { id: 21, className: 'Yoga for Athletes', trainer: 'Priya Desai', day: 'Thursday', startTime: '09:00', endTime: '10:00', duration: '60 min', floor: 3, category: 'Yoga', maxParticipants: 20, enrolled: 16, intensity: 'Intermediate' },
  { id: 22, className: 'Olympic Lifting', trainer: 'Arjun Patil', day: 'Thursday', startTime: '17:00', endTime: '18:30', duration: '90 min', floor: 2, category: 'Strength', maxParticipants: 10, enrolled: 8, intensity: 'Advanced' },
  { id: 23, className: 'Evening Zumba', trainer: 'Meera Joshi', day: 'Thursday', startTime: '19:00', endTime: '20:00', duration: '60 min', floor: 3, category: 'Dance', maxParticipants: 40, enrolled: 38, intensity: 'All Levels' },

  // Friday
  { id: 24, className: 'CrossFit WOD', trainer: 'Arjun Patil', day: 'Friday', startTime: '06:00', endTime: '07:00', duration: '60 min', floor: 1, category: 'CrossFit', maxParticipants: 15, enrolled: 13, intensity: 'Advanced' },
  { id: 25, className: 'Flow Yoga', trainer: 'Priya Desai', day: 'Friday', startTime: '07:00', endTime: '08:00', duration: '60 min', floor: 3, category: 'Yoga', maxParticipants: 25, enrolled: 20, intensity: 'All Levels' },
  { id: 26, className: 'HIIT Friday', trainer: 'Kavita Nair', day: 'Friday', startTime: '08:00', endTime: '08:45', duration: '45 min', floor: 1, category: 'Cardio', maxParticipants: 20, enrolled: 20, intensity: 'Intermediate' },
  { id: 27, className: 'Bollywood Night', trainer: 'Meera Joshi', day: 'Friday', startTime: '19:00', endTime: '20:00', duration: '60 min', floor: 3, category: 'Dance', maxParticipants: 40, enrolled: 40, intensity: 'Beginner' },

  // Saturday
  { id: 28, className: 'CrossFit Competition', trainer: 'Arjun Patil', day: 'Saturday', startTime: '07:00', endTime: '08:30', duration: '90 min', floor: 1, category: 'CrossFit', maxParticipants: 20, enrolled: 16, intensity: 'Advanced' },
  { id: 29, className: 'Weekend Yoga', trainer: 'Priya Desai', day: 'Saturday', startTime: '08:00', endTime: '09:00', duration: '60 min', floor: 3, category: 'Yoga', maxParticipants: 30, enrolled: 25, intensity: 'All Levels' },
  { id: 30, className: 'Zumba Mega Class', trainer: 'Meera Joshi', day: 'Saturday', startTime: '09:00', endTime: '10:30', duration: '90 min', floor: 3, category: 'Dance', maxParticipants: 50, enrolled: 46, intensity: 'All Levels' },
  { id: 31, className: 'Strength Master', trainer: 'Rajesh Sharma', day: 'Saturday', startTime: '10:00', endTime: '11:30', duration: '90 min', floor: 2, category: 'Strength', maxParticipants: 20, enrolled: 17, intensity: 'All Levels' },

  // Sunday
  { id: 32, className: 'Sunday Yoga', trainer: 'Priya Desai', day: 'Sunday', startTime: '08:00', endTime: '09:30', duration: '90 min', floor: 3, category: 'Yoga', maxParticipants: 30, enrolled: 26, intensity: 'All Levels' },
  { id: 33, className: 'Zumba Sunday Fiesta', trainer: 'Meera Joshi', day: 'Sunday', startTime: '10:00', endTime: '11:30', duration: '90 min', floor: 3, category: 'Dance', maxParticipants: 50, enrolled: 42, intensity: 'All Levels' },
  { id: 34, className: 'Active Recovery', trainer: 'Kavita Nair', day: 'Sunday', startTime: '11:00', endTime: '12:00', duration: '60 min', floor: 1, category: 'Functional', maxParticipants: 20, enrolled: 12, intensity: 'Beginner' },
];

export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const categories = ['All', 'CrossFit', 'Yoga', 'Dance', 'Cardio', 'Strength', 'Functional'];
