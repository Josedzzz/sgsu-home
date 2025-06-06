import { Zone } from "../types/Zone";

export const universityData: Zone[] = [
  {
    id: "guadales",
    name: "Guaduales",
    buildings: [
      {
        id: "b1",
        name: "Facultad de Ciencias Básicas, Humanas y Bellas Artes",
        type: "Facultad",
        description:
          "Facultad de Ciencias Básicas, Humanas y Bellas Artes, con laboratorios y aulas especializadas",
        pointsOfInterest: [],
      },
      {
        id: "b2",
        name: "Auditorio Bernardo Ramirez",
        type: "Auditorio",
        description:
          "Auditorio principal de la facultad de Ciencias para eventos académicos.",
        pointsOfInterest: [],
      },
      {
        id: "b3",
        name: "Biblioteca Infantil",
        type: "Biblioteca",
        description: "Espacio para el aprendizaje infantil.",
        pointsOfInterest: [],
      },
      {
        id: "b4",
        name: "Cepas",
        type: "Instituto",
        description: "Centro de estudios y proyectos avanzados.",
        pointsOfInterest: [],
      },
      {
        id: "b5",
        name: "Instituto interdisciplinario de ciencias",
        type: "Instituto",
        description: "Centro de estudios y proyectos de ciencias",
        pointsOfInterest: [],
      },
      {
        id: "b6",
        name: "Edificio 50 años",
        type: "Edificio",
        description:
          "Construido para conmemorar el cincuentenario de la institución, este edificio alberga múltiples aulas diseñadas para la enseñanza de diversas disciplinas.",
        pointsOfInterest: [],
      },
      {
        id: "b7",
        name: "Laboratorio de Suelos",
        type: "Facultad",
        description: "Laboratorio especializado en análisis de suelos.",
        pointsOfInterest: [],
      },
      {
        id: "b8",
        name: "Laboratorio de Bioterio",
        type: "Facultad",
        description: "Laboratorio especializado para fines medicos.",
        pointsOfInterest: [],
      },
      {
        id: "b9",
        name: "Jardin Botanico",
        type: "Vivero",
        description:
          "Este jardín alberga una gran variedad de especies de flora nativa y exótica, proporcionando un entorno ideal para el estudio de la biodiversidad y la ecología.",
        pointsOfInterest: [],
      },
      {
        id: "b11",
        name: "Finca la Aldana",
        type: "Laboratorio",
        description:
          "Ubicada dentro del campus, esta finca funciona como un laboratorio al aire libre donde los estudiantes pueden desarrollar proyectos relacionados con la agricultura, la zootecnia, la agroindustria y la sostenibilidad.",
        pointsOfInterest: [],
      },
      {
        id: "b12",
        name: "Centro de Acopio",
        type: "Laboratorio",
        description:
          "Es una instalación destinada al almacenamiento, clasificación y gestión de materiales agrícolas y de investigación.",
        pointsOfInterest: [],
      },
      {
        id: "b13",
        name: "Lombricultivo y Lombricultura",
        type: "Vivero",
        description:
          "Espacio dedicado al estudio y aplicación de técnicas de compostaje y producción de abonos orgánicos a través de la cría de lombrices.",
        pointsOfInterest: [],
      },
    ],
  },
  {
    id: "cambulus",
    name: "Cambulos",
    buildings: [
      {
        id: "c1",
        name: "Coliseo",
        type: "Coliseo",
        description:
          "Es el principal escenario deportivo del campus, diseñado para la práctica y desarrollo de diversas disciplinas atléticas.",
        pointsOfInterest: [
          {
            name: "Reserva espacios",
            link: "https://espacios-sgsu.vercel.app/#/login",
          },
        ],
      },
      {
        id: "c2",
        name: "Bienestar Institucional",
        type: "Edificio",
        description:
          "Es un espacio dedicado al desarrollo integral de los estudiantes, docentes y administrativos, ofreciendo programas y servicios que promueven el bienestar físico, emocional y social.",
        pointsOfInterest: [],
      },
      {
        id: "c4",
        name: "Canchas Multiples",
        type: "Cancha",
        description:
          "Son espacios deportivos diseñados para la práctica de diversas disciplinas como baloncesto, voleibol y fútbol sala.",
        pointsOfInterest: [],
      },
      {
        id: "c5",
        name: "Piscina",
        type: "Cancha",
        description:
          "Espacio adecuado para que los deportistas practiquen todo tipo de deportes acuaticos",
        pointsOfInterest: [],
      },
      {
        id: "c6",
        name: "Camerinos",
        type: "Edificio",
        description:
          "Espacio adecuado para que los deportistas hagan uso de los camerinos.",
        pointsOfInterest: [],
      },
      {
        id: "c7",
        name: "Cancha de fútbol",
        type: "Cancha",
        description:
          "Es un espacio amplio y adecuado para la práctica y competencia de este deporte.",
        pointsOfInterest: [],
      },
      {
        id: "c9",
        name: "Teatrino y Media Torta",
        type: "Coliseo",
        description:
          "Es un escenario al aire libre diseñado para la realización de eventos culturales, artísticos y académicos.",
        pointsOfInterest: [],
      },
      {
        id: "c10",
        name: "Centro de Salud",
        type: "Centro de Salud",
        description:
          "Es una unidad dedicada a la atención médica primaria y el bienestar de la comunidad universitaria.",
        pointsOfInterest: [],
      },
    ],
  },
  {
    id: "gualanday",
    name: "Gualanday",
    buildings: [
      {
        id: "f1",
        name: "Facultad de Ciencias de la Educación",
        type: "Facultad",
        description:
          "Edificio académico donde se imparten programas de formación en pedagogía, humanidades y ciencias de la educación.",
        pointsOfInterest: [],
      },
      {
        id: "f2",
        name: "Facultad de Ciencias Económicas, Administrativas y Contables",
        type: "Facultad",
        description:
          "Edificio donde se desarrollan programas académicos en economía, administración, contabilidad, entre otros, con enfoque en la gestión empresarial.",
        pointsOfInterest: [],
      },
      {
        id: "f4",
        name: "Plantas Piloto",
        type: "Laboratorio",
        description:
          "Espacio destinado a la experimentación y desarrollo de procesos industriales a pequeña escala para la enseñanza e investigación.",
        pointsOfInterest: [],
      },
      {
        id: "f5",
        name: "Facultad de Ciencias Agroindustriales",
        type: "Facultad",
        description:
          "Se dedica a la formación de profesionales en el área de las ciencias agroindustriales, promoviendo la investigación y el desarrollo de tecnologías para el sector agropecuario y agroindustrial.",
        pointsOfInterest: [],
      },
      {
        id: "f6",
        name: "Laboratorio de Postcosecha",
        type: "Laboratorio",
        description:
          "Laboratorio especializado en el estudio y desarrollo de técnicas para la conservación y manejo de productos agrícolas después de la cosecha, con enfoque en la calidad y vida útil de los alimentos.",
        pointsOfInterest: [],
      },
    ],
  },
  {
    id: "platanillas",
    name: "Platanillas",
    buildings: [
      {
        id: "e1",
        name: "Capilla Universitaria",
        type: "Edificio",
        description:
          "La Capilla Universitaria es un espacio de reflexión y espiritualidad para la comunidad estudiantil y docente de la Universidad del Quindío. También es un punto de encuentro para actividades culturales y religiosas.",
        pointsOfInterest: [],
      },
      {
        id: "e2",
        name: "Zona de Estudio",
        type: "Edificio",
        description:
          "Área designada para el estudio individual o grupal de los estudiantes, con mesas, sillas y un ambiente tranquilo que favorece la concentración y el aprendizaje.",
        pointsOfInterest: [],
      },
      {
        id: "e4",
        name: "Biblioteca Euclides Jaramillo",
        type: "Biblioteca",
        description:
          "La Biblioteca Euclides Jaramillo es el principal centro de recursos bibliográficos y de información de la Universidad del Quindío. Ofrece servicios de consulta, préstamo de libros, salas de estudio y acceso a recursos digitales.",
        pointsOfInterest: [],
      },
      {
        id: "e5",
        name: "Auditorio Euclides Jaramillo",
        type: "Auditorio",
        description:
          "El Auditorio Euclides Jaramillo es un espacio moderno y equipado para la realización de conferencias, charlas, presentaciones y eventos académicos o culturales de la Universidad del Quindío.",
        pointsOfInterest: [],
      },
    ],
  },
  {
    id: "guamos",
    name: "Guamos",
    buildings: [
      {
        id: "d2",
        name: "Facultad de Ciencias de la Salud",
        type: "Facultad",
        description:
          "La Facultad de Ciencias de la Salud de la Universidad del Quindío se dedica a la formación de profesionales en áreas como medicina, enfermería, fisioterapia y otras disciplinas relacionadas con la salud, promoviendo la investigación y el servicio comunitario.",
        pointsOfInterest: [],
      },
      {
        id: "d3",
        name: "Centro de Investigaciones Biomédicas",
        type: "Laboratorio",
        description:
          "El Centro de Investigaciones Biomédicas es un espacio dedicado a la investigación científica en áreas relacionadas con la salud humana, incluyendo estudios en biología molecular, genética, farmacología y enfermedades crónicas.",
        pointsOfInterest: [],
      },
      {
        id: "d4",
        name: "Facultad de Ingeniería",
        type: "Facultad",
        description:
          "La Facultad de Ingeniería de la Universidad del Quindío ofrece programas académicos en diversas áreas de la ingeniería, promoviendo la innovación, la investigación y el desarrollo tecnológico.",
        pointsOfInterest: [
          {
            name: "Laboratorio de Electrónica",
            link: "https://labuq.catavento.co/",
          },
        ],
      },
    ],
  },
  {
    id: "guayacan",
    name: "Guayacan",
    buildings: [
      {
        id: "a1",
        name: "Bloque Administrativo",
        type: "Edificio",
        description:
          "El Bloque Administrativo es el centro neurálgico de las operaciones administrativas de la Universidad del Quindío. Aquí se encuentran las oficinas de rectoría, secretaría, finanzas y otras dependencias clave para el funcionamiento de la institución.",
        pointsOfInterest: [],
      },
    ],
  },
];
