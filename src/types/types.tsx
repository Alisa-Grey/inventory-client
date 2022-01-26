export interface IDefect {
  id: number;
  name: string;
  itemId: number;
  desc: string;
  img: string;
}

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

export interface ISetup {
  id: number;
  name: string;
  ownerId: number;
  roomName: string;
  img: string;
  status: string;
  items: IItem;
}

export interface IRoom {
  id: number;
  name: string;
  inventories: IItem;
  setups: ISetup;
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