import {Request, Response} from 'express';
import {COURSES, GRIDS, INIT_RELOAD, setGrids} from './db-data';


export function getHome(req: Request, res: Response) {
  res.end(JSON.stringify({}));
}

export function getGrids(req: Request, res: Response) {
  res.end(JSON.stringify(GRIDS));
}

export function saveGrids(req: Request, res: Response) {

  const changes = req.body;
  setGrids(changes);

  res.status(200).json(GRIDS);
}

export function initReload(req: Request, res: Response) {
  res.end(JSON.stringify(INIT_RELOAD));
}
