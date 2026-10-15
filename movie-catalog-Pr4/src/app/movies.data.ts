export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
}

export const MOVIES: Movie[] = [
  { id: 1, title: 'Interstellar', year: 2014, rating: 9 },
  { id: 2, title: 'Avatar', year: 2009, rating: 8 },
  { id: 3, title: 'Titanic', year: 1997, rating: 7 },
];