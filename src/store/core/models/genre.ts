/** Available genre type. */
export enum GenreType {
  Genres = 'Genres',
  ExplicitGenres = 'Explicit genres',
  Themes = 'Themes',
  Demographics = 'Demographics',
}

/** Genre. */
export interface Genre {

  /** Id. */
  readonly id: number;

  /** Name. */
  readonly name: string;

  /** Type. */
  readonly type: GenreType;
}
