export interface IStatus {
  description: string;
  type: 'inprogress' | 'finished' | 'cancelled' | 'notstarted';
}

export interface IUpdateDTO {
  customId?: string;
  status?: IStatus;
  slug?: string;
}
