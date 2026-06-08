export interface Trainer {
  id: number;
  name: string;
  role: string;
  specializations: string[];
  experience: string;
  certifications: string[];
  image: string;
  bio: string;
  social: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Program {
  id: number;
  title: string;
  description: string;
  duration: string;
  intensity: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  category: string;
  icon: string;
  floor: number;
  schedule: string;
  maxParticipants: number;
}

export interface MembershipPlan {
  id: number;
  name: string;
  price: number;
  period: string;
  badge?: string;
  features: string[];
  highlighted: boolean;
  color: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  achievement: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
}

export interface ClassSchedule {
  id: number;
  className: string;
  trainer: string;
  day: string;
  startTime: string;
  endTime: string;
  duration: string;
  floor: number;
  category: string;
  maxParticipants: number;
  enrolled: number;
  intensity: string;
}

export interface TransformationStory {
  id: number;
  name: string;
  age: number;
  duration: string;
  weightLost?: string;
  musclGained?: string;
  beforeImage: string;
  afterImage: string;
  story: string;
  program: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
  fitnessGoal: string;
  membershipPlan: string;
  memberSince: string;
  membershipExpiry: string;
  avatar: string;
}

export interface Booking {
  id: string;
  className: string;
  trainer: string;
  date: string;
  time: string;
  duration: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  floor: number;
}

export interface Payment {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: 'paid' | 'pending' | 'failed';
  method: string;
  invoiceId: string;
}
