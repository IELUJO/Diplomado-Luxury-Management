import React from 'react';

export interface Module {
  id: number;
  title: string;
  topics: string[];
}

export interface Professor {
  name: string;
  role: string;
  company: string;
  image?: string;
  linkedin?: string;
}

export interface ProgramStat {
  icon: React.ComponentType<any>;
  label: string;
  value: string;
  subValue?: string;
}