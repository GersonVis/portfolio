
export const menuOptions: any = {
    inicio: {
        name: "inicio",
        title: "Inicio",
        path: "/inicio",
        active: false
    },
    proyectos: {
        name: "proyectos",
        title: "Proyectos",
        path: "/croyectos",
        active: false
    },
    contactos: {
        name: "contactos",
        title: "Contactos",
        path: "/contactos",
        active: false
    }
}
   


export interface MenuOption{
    name:string,
    title: string
    path:string,
    active: boolean
}