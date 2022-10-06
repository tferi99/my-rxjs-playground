import {Request, Response} from 'express';
import { COURSES, INIT_RELOAD, } from './db-data';


export function getHome(req: Request, res: Response) {
  res.end(JSON.stringify({}));
}


export function initReload(req: Request, res: Response) {
  res.end(JSON.stringify(INIT_RELOAD));
}
