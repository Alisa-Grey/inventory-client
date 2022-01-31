import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";
import { AppDispatch } from "../store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

