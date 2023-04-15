export interface Prueba {
  email: string,
  message: string,
  visible: boolean
}
export const initialState: Prueba = {
  email: "",
  message: "",
  visible: false
};