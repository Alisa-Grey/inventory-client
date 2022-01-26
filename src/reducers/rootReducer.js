import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';
import { loginReducer } from './loginReducer';
import { roomsReducer } from './roomsReducer';
import { employeesReducer } from './employeeReducer';
import { inventoriesReducer } from './inventoriesReducer'

export const rootReducer = combineReducers({
    registration: registerReducer,
    login: loginReducer,
    rooms: roomsReducer,
    employees: employeesReducer,
    inventories: inventoriesReducer
  })