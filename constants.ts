import { Module, Professor } from './types';

export const PROGRAM_INFO = {
  generation: "10ª Generación",
  startDate: "7 de marzo de 2026",
  endDate: "16 de mayo de 2026",
  duration: "80 horas",
  schedule: "Sábados 8:00 A.M. a 3:00 P.M.",
  modality: "Online en vivo + 3 clases híbridas",
  price: "$ 45,000 MXN IVA incl.",
  certification: "Diploma oficial U. Anáhuac e IELujo"
};

export const MODULES: Module[] = [
  {
    id: 1,
    title: "El concepto, evolución y significado del Lujo",
    topics: ["Definiciones y significado", "Atributos del lujo", "Metodología SADE", "Luxury Brand Value", "Diferencias Premium/Lujo/Moda"]
  },
  {
    id: 2,
    title: "El consumidor del lujo",
    topics: ["Perfil y segmentación", "Comportamiento generacional", "Nuevos consumidores"]
  },
  {
    id: 3,
    title: "Actualidad y tendencias del sector",
    topics: ["Perspectivas del sector", "Tendencias globales", "El mercado en Latinoamérica"]
  },
  {
    id: 4,
    title: "Análisis del sector del Lujo",
    topics: ["Estructura del sector", "Principales grupos y conglomerados", "Resultados financieros actuales"]
  },
  {
    id: 5,
    title: "Los Recursos Humanos en el Lujo",
    topics: ["Selección y reclutamiento (Onboarding)", "Planes de compensación", "Cultura de servicio"]
  },
  {
    id: 6,
    title: "La logística en el Lujo",
    topics: ["Peculiaridades logísticas", "Logística en comercio digital", "Importaciones y aduanas"]
  },
  {
    id: 7,
    title: "El Marketing del lujo",
    topics: ["Gestión diferencial", "Estrategias de marketing", "El plan de marketing", "Campañas exitosas"]
  },
  {
    id: 8,
    title: "La experiencia del Cliente (CX)",
    topics: ["Luxury Customer Journey", "Pilares de la experiencia", "Excelencia en el servicio"]
  },
  {
    id: 9,
    title: "El Lujo en el mundo digital",
    topics: ["E-commerce y Marketplaces", "Redes Sociales (IG, TikTok, LinkedIn)", "Inteligencia Artificial en lujo"]
  },
  {
    id: 10,
    title: "El Lujo responsable y sustentable",
    topics: ["RSC y Eco-Lujo", "Economía circular", "Tendencias de sustentabilidad"]
  },
  {
    id: 11,
    title: "Comercialización de productos y servicios",
    topics: ["Retail vs Wholesale", "Travel Retail", "Licencias y Franquicias", "Outlets y Pre-loved"]
  }
];

export const PROFESSORS: Professor[] = [
  {
    name: "Frank Sánchez",
    role: "CEO",
    company: "Instituto Europeo del Lujo (IELujo)",
    image: "https://www.ielujo.com/wp-content/uploads/2019/07/1685117491039-thegem-person.jpg" 
  },
  {
    name: "Gabriela Vallejo",
    role: "HR Director México",
    company: "RICHEMONT",
    image: "https://www.ielujo.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-09-at-12.58.40-PM-thegem-person.jpeg",
    linkedin: "https://www.linkedin.com/in/gabriela-vallejo-ballesteros-67133b2a/?skipRedirect=true"
  },
  {
    name: "Amparo de la Concepción",
    role: "Directora Académica",
    company: "Instituto Europeo del Lujo (IELujo)",
    image: "https://www.ielujo.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-07-at-11.10.57-e1691428317980-thegem-person.jpeg",
    linkedin: "https://www.linkedin.com/in/amparodelaconcepcion/"
  },
  {
    name: "Ricardo Romero",
    role: "Director General",
    company: "Cinlat Logistics",
    image: "https://www.ielujo.com/wp-content/uploads/2023/04/Ricardo3-thegem-person.png",
    linkedin: "https://www.linkedin.com/in/ricardo-romero-neveu-5a159524/"
  },
  {
    name: "Rafael Arroyo",
    role: "Chief Marketing Officer",
    company: "El Palacio de Hierro",
    image: "https://www.ielujo.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-11-at-13.22.48-thegem-person.jpeg",
    linkedin: "https://www.linkedin.com/in/arroyorafael/"
  },
  {
    name: "Fernando Alarcón",
    role: "Chief Corporate Responsibility Officer",
    company: "L'Oréal LATAM",
    image: "https://www.ielujo.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-11-at-16.29.08-thegem-person.jpeg",
    linkedin: "https://www.linkedin.com/in/fernandoa1/"
  },
  {
    name: "Edgar Embriz",
    role: "CEO Country General Manager",
    company: "Swatch Group",
    image: "https://www.ielujo.com/wp-content/uploads/2020/05/Captura-de-pantalla-2019-03-15-a-las-11.11.18-e1588947673738.png",
    linkedin: "https://www.linkedin.com/in/edgar-e-embriz-ruiz-9a4711120/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BfhdaabLrRpWPyRS6ucktVg%3D%3D"
  }
];

export const OBJECTIVES = [
  "Dominar la gestión diferencial de las marcas de Lujo.",
  "Aprender estrategias exitosas para conquistar consumidores de alto poder adquisitivo.",
  "Desarrollar competencias para gestionar y comercializar con éxito productos y servicios de Lujo.",
  "Analizar la estructura y tendencias del mercado mexicano e internacional.",
  "Dominar el Customer Relationship Management y estrategias de fidelización."
];