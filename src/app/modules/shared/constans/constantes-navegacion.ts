
export const menuOptions: any = {
    inicio: {
        name: "inicio",
        title: "Inicio",
        path: "/inicio",
        active: false,
        info: `Parte de bienvenida al portafolio
        se muestra el nombre del propietario
        y el stack principal`,
        img: "assets/images/sparta.png"
    },
    proyectos: {
        name: "proyectos",
        title: "Proyectos",
        path: "/croyectos",
        active: false,
        info: "",
        img: ""
    },
    contactos: {
        name: "contactos",
        title: "Contactos",
        path: "/contactos",
        active: false,
        info: "",
        img: ""
    }
}
   


export interface MenuOption{
    name:string,
    title: string
    path:string,
    active: boolean,
    info: string,
    img: string
}