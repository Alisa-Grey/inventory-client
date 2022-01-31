import { RoomActionTypes } from "../redux/actions/types";

export interface IAction {
  type: string;
  payload?: any;
}

export interface IResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}

// Room
export interface IRoom {
  id: number;
  name: string;
  inventories: IItem;
  setups: ISetup;
}

export interface IRoomState {
  loading: boolean;
  adding: boolean;
  rooms: IRoom[];
  addResult: string;
}

export interface IGetRooms {
  type: typeof RoomActionTypes.GET_ROOMS_REQUEST;
}

export interface IGetRoomsSuccess {
  type: RoomActionTypes.GET_ROOMS_RESULT;
  payload: any[];
}

export type RoomAction = IGetRooms | IGetRoomsSuccess;

// Item

export interface IItem {
  id: number;
  name: number;
  category: string;
  ownerId: number | null;
  roomName: string;
  setupId: number;
  img: string;
  defects: IDefect;
}

export interface IItemState {
  loading: boolean;
  items: any[];
}

// User

export interface IUserState {
  loading: boolean;
  users: any[];
}
export interface IDefect {
  id: number;
  name: string;
  itemId: number;
  desc: string;
  img: string;
}

export interface ISetup {
  id: number;
  name: string;
  ownerId: number;
  roomName: string;
  img: string;
  status: string;
  items: IItem;
}

export interface IUser {
  id: number;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  inventory: IItem;
  setup: ISetup;
}

