// src/types/common.ts
export interface Material {
  id: string;
  name: string;
  origin: string;
  description: string;
  textureImage: string;
  durabilityScore: number;
}

export interface ArtisanProfile {
  name: string;
  brandName: string;
  biography: string;
  startedYear: number;
  philosophy: string;
  profileImage: string;
  instagram?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  instagram?: string;
  category: string;
  message: string;
}
