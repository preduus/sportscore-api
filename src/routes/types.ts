import { Request, Response } from 'express';

export interface IRouteHandleResponse {
  code: number;
  message: any
}

export interface IRoutePropertiesOptions {
  endpoint: string;
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE';
  // eslint-disable-next-line no-unused-vars
  handle: (request: Request, response: Response) => Promise<Response>
}
