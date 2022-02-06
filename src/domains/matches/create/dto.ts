export interface IStatus {
  code: number;
  description: string;
  type: 'inprogress' | 'finished' | 'cancelled' | 'notstarted';
}

export interface ICreateDTO {
  readonly id: string;
  homeTeamId: string;
  awayTeamId: string;
  customId: string;
  status: IStatus;
  tournamentId: string;
  slug: string;
}
