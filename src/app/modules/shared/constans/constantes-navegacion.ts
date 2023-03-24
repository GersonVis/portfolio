
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
        info: `Se muestran los proyectos realizados a lo largo de mi vida professional, junto con las
        tecnologías utilizadas`,
        img: "assets/images/atenas.png"
    },
    contactos: {
        name: "contactos",
        title: "Contactos",
        path: "/contactos",
        active: false,
        info: "Aquí encontrarás toda la información acerca de como ponerte en contacto conmigo, accesos a linkedin, git y un botón de descarga del cv          ",
        img: "assets/images/hades.png"
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