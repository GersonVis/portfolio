export interface Prueba {
  email: string,
  message: string,
  visible: boolean,
  date: Date
} 
export const initialState: Prueba = {
  email: "",
  message: "",
  visible: false,
  date: new Date()
};