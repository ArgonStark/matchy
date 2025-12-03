export const getAvatarUrl = (name: string, size = 200): string => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0891B2&color=fff&size=${size}&bold=true`;
};

export const radiusOptions = [
  { label: '100m', value: 0.1 },
  { label: '500m', value: 0.5 },
  { label: '1 KM', value: 1 },
  { label: '5 KM', value: 5 },
];

export const sortOptions = [
  { label: 'Relevance', value: 'relevance' },
  { label: 'Distance', value: 'distance' },
];

