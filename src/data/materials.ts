// src/data/materials.ts
import { Material } from '@/types/common';

export const materials: Material[] = [
  {
    id: 'leather',
    name: '栃木レザー',
    origin: '栃木県',
    description: '創業100年超の老舗タンナー・栃木レザーが誤る植物タンニン骿し革。丈夫で経年変化が美しく、使うほどに深みが増します。',
    textureImage: '/images/materials/leather.svg',
    durabilityScore: 5,
  },
  {
    id: 'brass',
    name: '真鍋金具',
    origin: '日本製',
    description: '職人が丁寧に磨き上げた真鍋製の金具。経年とともに独特の風合いを繏い、鞄に貫禅を加えます。',
    textureImage: '/images/materials/brass.svg',
    durabilityScore: 4,
  },
  {
    id: 'linen',
    name: '国産リネン',
    origin: '岡山県',
    description: '岡山の老舗機屋が織り上げる高密度リネン。軽くて丈夫、通気性も抜群で内布として最適です。',
    textureImage: '/images/materials/linen.svg',
    durabilityScore: 4,
  },
];
