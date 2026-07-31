// ============================================================
// DRAUTOMOTRIZ - Comunas de Santiago con cobertura
// Cada comuna tiene su propia landing page (SEO local)
// ============================================================

export interface Comuna {
  slug: string;
  nombre: string;
  zona: string; // Norte, Sur, Oriente, Poniente, Centro
  descripcion: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  sectoresPopulares: string[];
}

export const comunas: Comuna[] = [
  // ZONA ORIENTE
  {
    slug: 'las-condes',
    nombre: 'Las Condes',
    zona: 'Oriente',
    descripcion: 'Cubrimos toda la comuna de Las Condes, desde Apoquindo hasta San Carlos de Apoquindo, incluyendo El Golf, Manquehue, Vitacura Sur y La Dehesa. Atendemos en condominios, edificios corporativos y casas particulares sin inconvenientes de acceso.',
    h1: 'Mecánico a Domicilio en Las Condes | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Las Condes | DRAUTOMOTRIZ',
    metaDescription: 'Servicio mecánico a domicilio en Las Condes. Diagnóstico, mantención, frenos, batería y auxilio 24/7. Atendemos en El Golf, Manquehue, La Dehesa. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio las condes', 'mecanico las condes', 'auxilio mecanico las condes', 'servicio automotriz las condes'],
    sectoresPopulares: ['El Golf', 'Manquehue', 'La Dehesa', 'San Carlos de Apoquindo', 'Apoquindo', 'Vitacura Sur', 'Las Tranqueras']
  },
  {
    slug: 'providencia',
    nombre: 'Providencia',
    zona: 'Oriente',
    descripcion: 'Servicio mecánico a domicilio en Providencia, cubriendo desde Plaza Italia hasta Tobalaba, incluyendo Barrio Italia, Pedro de Valdivia, El Salvador y Los Leones. Atendemos en edificios con estacionamiento subterráneo y casas.',
    h1: 'Mecánico a Domicilio en Providencia | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Providencia | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Providencia. Diagnóstico, mantención, frenos y auxilio 24/7. Atendemos en Barrio Italia, Pedro de Valdivia, El Salvador. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio providencia', 'mecanico providencia', 'auxilio mecanico providencia', 'servicio automotriz providencia'],
    sectoresPopulares: ['Barrio Italia', 'Pedro de Valdivia', 'El Salvador', 'Los Leones', 'Plaza Italia', 'Tobalaba']
  },
  {
    slug: 'vitacura',
    nombre: 'Vitacura',
    zona: 'Oriente',
    descripcion: 'Cobertura completa en Vitacura, incluyendo Vitacura Alto, Bajo y Centro, así como el sector de Santa María y Costa Centauro. Atendemos vehículos de alta gama con equipos de diagnóstico especializados.',
    h1: 'Mecánico a Domicilio en Vitacura | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Vitacura | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Vitacura. Diagnóstico multimarca, mantención premium, frenos y auxilio 24/7. Atendemos vehículos de alta gama. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio vitacura', 'mecanico vitacura', 'auxilio mecanico vitacura', 'servicio automotriz vitacura alta gama'],
    sectoresPopulares: ['Vitacura Alto', 'Vitacura Bajo', 'Santa María', 'Costa Centauro', 'Lo Saldes']
  },
  {
    slug: 'lo-barnechea',
    nombre: 'Lo Barnechea',
    zona: 'Oriente',
    descripcion: 'Atendemos toda la comuna de Lo Barnechea, desde Plaza Lo Barnechea hasta Los Trapiales, incluyendo Paseo Las Trapiales, La Dehesa y el sector de Valle Escondido. Cobertura extendida hasta pies de cordillera.',
    h1: 'Mecánico a Domicilio en Lo Barnechea | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Lo Barnechea | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Lo Barnechea. Diagnóstico, mantención, frenos y auxilio 24/7. Atendemos La Dehesa, Paseo Las Trapiales. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio lo barnechea', 'mecanico lo barnechea', 'auxilio mecanico lo barnechea', 'la dehesa mecanico'],
    sectoresPopulares: ['La Dehesa', 'Paseo Las Trapiales', 'Lo Barnechea Centro', 'Los Trapiales', 'Valle Escondido']
  },
  {
    slug: 'nunoa',
    nombre: 'Ñuñoa',
    zona: 'Oriente',
    descripcion: 'Servicio mecánico a domicilio en Ñuñoa, cubriendo Plaza Ñuñoa, Avenida Irarrázaval, Parque Bustamante, Simón Bolívar y todo el sector norte y sur de la comuna. Atención rápida en promedio 45 minutos.',
    h1: 'Mecánico a Domicilio en Ñuñoa | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Ñuñoa | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Ñuñoa. Diagnóstico, mantención, frenos y auxilio 24/7. Atendemos Plaza Ñuñoa, Irarrázaval, Simón Bolívar. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio nuñoa', 'mecanico nuñoa', 'auxilio mecanico nuñoa', 'servicio automotriz nuñoa'],
    sectoresPopulares: ['Plaza Ñuñoa', 'Irarrázaval', 'Parque Bustamante', 'Simón Bolívar', 'Patronato', 'Dublé Almeyda']
  },
  {
    slug: 'la-reina',
    nombre: 'La Reina',
    zona: 'Oriente',
    descripcion: 'Cobertura en toda la comuna de La Reina, desde Plaza Los Dominicos hasta Av. Larraín, incluyendo Villa La Reina, Renato Sánchez y el sector de Los Dominicos. Atención en condominios y casas particulares.',
    h1: 'Mecánico a Domicilio en La Reina | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en La Reina | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en La Reina. Diagnóstico, mantención, frenos y auxilio 24/7. Atendemos Plaza Los Dominicos, Av. Larraín. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio la reina', 'mecanico la reina', 'auxilio mecanico la reina', 'los dominicos mecanico'],
    sectoresPopulares: ['Plaza Los Dominicos', 'Av. Larraín', 'Villa La Reina', 'Renato Sánchez', 'Los Dominicos']
  },

  // ZONA CENTRO
  {
    slug: 'santiago-centro',
    nombre: 'Santiago Centro',
    zona: 'Centro',
    descripcion: 'Atención mecánica a domicilio en Santiago Centro, cubriendo desde Plaza de Armas hasta Av. Matta, incluyendo Barrio Brasil, Lastarria, Bellas Artes, Parque Forestal y todo el casco histórico de la capital.',
    h1: 'Mecánico a Domicilio en Santiago Centro | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Santiago Centro | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Santiago Centro. Diagnóstico, mantención, frenos y auxilio 24/7. Atendemos Barrio Brasil, Lastarria, Bellas Artes. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio santiago centro', 'mecanico santiago centro', 'auxilio mecanico santiago centro', 'barrio brasil mecanico'],
    sectoresPopulares: ['Plaza de Armas', 'Barrio Brasil', 'Lastarria', 'Bellas Artes', 'Parque Forestal', 'Av. Matta']
  },
  {
    slug: 'recoleta',
    nombre: 'Recoleta',
    zona: 'Centro',
    descripcion: 'Cobertura en Recoleta, desde Plaza Baquedano hasta Av. Independencia, incluyendo La Feria, Patronato, Vega Central y el sector del Cerro San Cristóbal. Atención en edificios y casas.',
    h1: 'Mecánico a Domicilio en Recoleta | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Recoleta | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Recoleta. Diagnóstico, mantención, frenos y auxilio 24/7. Atendemos Patronato, La Vega, Av. Independencia. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio recoleta', 'mecanico recoleta', 'auxilio mecanico recoleta', 'patronato mecanico'],
    sectoresPopulares: ['La Feria', 'Patronato', 'Vega Central', 'Cerro San Cristóbal', 'Av. Independencia']
  },
  {
    slug: 'independencia',
    nombre: 'Independencia',
    zona: 'Centro',
    descripcion: 'Servicio mecánico a domicilio en Independencia, cubriendo desde Av. Independencia hasta Huelén, incluyendo Barrio Independencia, Universidad de Chile y el sector norte de la comuna.',
    h1: 'Mecánico a Domicilio en Independencia | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Independencia | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Independencia. Diagnóstico, mantención, frenos y auxilio 24/7. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio independencia', 'mecanico independencia', 'auxilio mecanico independencia'],
    sectoresPopulares: ['Av. Independencia', 'Barrio Independencia', 'Huelén', 'Universidad de Chile']
  },
  {
    slug: 'estacion-central',
    nombre: 'Estación Central',
    zona: 'Centro',
    descripcion: 'Atención en Estación Central, incluyendo el sector del Alameda, Av. General Bonilla, Blanqueado y el entorno de la Universidad de Santiago (USACH).',
    h1: 'Mecánico a Domicilio en Estación Central | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Estación Central | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Estación Central. Diagnóstico, mantención, frenos y auxilio 24/7. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio estacion central', 'mecanico estacion central', 'auxilio mecanico estacion central'],
    sectoresPopulares: ['Alameda', 'Av. General Bonilla', 'Blanqueado', 'USACH']
  },

  // ZONA NORTE
  {
    slug: 'huechuraba',
    nombre: 'Huechuraba',
    zona: 'Norte',
    descripcion: 'Cobertura en Huechuraba, incluyendo Ciudad Empresarial, Los Trapiales, Huechuraba Alto y el sector de El Cobres. Atendemos en oficinas corporativas y condominios.',
    h1: 'Mecánico a Domicilio en Huechuraba | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Huechuraba | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Huechuraba. Diagnóstico, mantención, frenos y auxilio 24/7. Atendemos Ciudad Empresarial. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio huechuraba', 'mecanico huechuraba', 'ciudad empresarial mecanico', 'auxilio mecanico huechuraba'],
    sectoresPopulares: ['Ciudad Empresarial', 'Los Trapiales', 'Huechuraba Alto', 'El Cobres']
  },
  {
    slug: 'quilicura',
    nombre: 'Quilicura',
    zona: 'Norte',
    descripcion: 'Servicio mecánico a domicilio en Quilicura, cubriendo el sector industrial, residencial y Los Andes. Atención en empresas, condominios y casas particulares.',
    h1: 'Mecánico a Domicilio en Quilicura | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Quilicura | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Quilicura. Diagnóstico, mantención, frenos y auxilio 24/7. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio quilicura', 'mecanico quilicura', 'auxilio mecanico quilicura'],
    sectoresPopulares: ['Los Andes', 'Industrial', 'Residencial', 'Lo Echevers']
  },
  {
    slug: 'conchali',
    nombre: 'Conchalí',
    zona: 'Norte',
    descripcion: 'Atención mecánica a domicilio en Conchalí, cubriendo Av. Independencia, El Guanaco, San Pablo y todo el sector norte de la comuna.',
    h1: 'Mecánico a Domicilio en Conchalí | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Conchalí | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Conchalí. Diagnóstico, mantención, frenos y auxilio 24/7. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio conchali', 'mecanico conchali', 'auxilio mecanico conchali'],
    sectoresPopulares: ['Av. Independencia', 'El Guanaco', 'San Pablo']
  },

  // ZONA SUR
  {
    slug: 'la-florida',
    nombre: 'La Florida',
    zona: 'Sur',
    descripcion: 'Cobertura completa en La Florida, desde Plaza de Armas de La Florida hasta Av. Vicuña Mackenna, incluyendo Villa O\'Higgins, Las Parcelas, Rojas Magallanes y todo el sector sur de la comuna.',
    h1: 'Mecánico a Domicilio en La Florida | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en La Florida | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en La Florida. Diagnóstico, mantención, frenos y auxilio 24/7. Atendemos Villa O\'Higgins, Vicuña Mackenna. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio la florida', 'mecanico la florida', 'auxilio mecanico la florida'],
    sectoresPopulares: ['Plaza La Florida', 'Villa O\'Higgins', 'Las Parcelas', 'Rojas Magallanes', 'Vicuña Mackenna']
  },
  {
    slug: 'puente-alto',
    nombre: 'Puente Alto',
    zona: 'Sur',
    descripcion: 'Servicio mecánico a domicilio en Puente Alto, cubriendo Plaza de Armas, Las Mercedes, Plaza Oeste, Avenida Concha y Toro y todo el sector sur poniente de la comuna.',
    h1: 'Mecánico a Domicilio en Puente Alto | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Puente Alto | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Puente Alto. Diagnóstico, mantención, frenos y auxilio 24/7. Atendemos Las Mercedes, Concha y Toro. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio puente alto', 'mecanico puente alto', 'auxilio mecanico puente alto'],
    sectoresPopulares: ['Plaza de Armas', 'Las Mercedes', 'Plaza Oeste', 'Concha y Toro']
  },
  {
    slug: 'la-cisterna',
    nombre: 'La Cisterna',
    zona: 'Sur',
    descripcion: 'Atención en La Cisterna, incluyendo El Parque, La Cisterna Centro, Av. Graneros y el entorno del Metro La Cisterna.',
    h1: 'Mecánico a Domicilio en La Cisterna | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en La Cisterna | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en La Cisterna. Diagnóstico, mantención, frenos y auxilio 24/7. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio la cisterna', 'mecanico la cisterna', 'auxilio mecanico la cisterna'],
    sectoresPopulares: ['El Parque', 'La Cisterna Centro', 'Av. Graneros', 'Metro La Cisterna']
  },
  {
    slug: 'san-miguel',
    nombre: 'San Miguel',
    zona: 'Sur',
    descripcion: 'Servicio en San Miguel, cubriendo Av. Grande, San Miguel Centro, Departamental y el entorno del Metro Lo Valledor.',
    h1: 'Mecánico a Domicilio en San Miguel | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en San Miguel | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en San Miguel. Diagnóstico, mantención, frenos y auxilio 24/7. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio san miguel', 'mecanico san miguel', 'auxilio mecanico san miguel'],
    sectoresPopulares: ['Av. Grande', 'San Miguel Centro', 'Departamental', 'Lo Valledor']
  },
  {
    slug: 'san-bernardo',
    nombre: 'San Bernardo',
    zona: 'Sur',
    descripcion: 'Cobertura en San Bernardo, incluyendo Plaza de Armas, Santa Rosa, El Pinto, Maipo y todo el sector sur de la comuna. Atención en empresas, condominios y casas.',
    h1: 'Mecánico a Domicilio en San Bernardo | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en San Bernardo | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en San Bernardo. Diagnóstico, mantención, frenos y auxilio 24/7. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio san bernardo', 'mecanico san bernardo', 'auxilio mecanico san bernardo'],
    sectoresPopulares: ['Plaza de Armas', 'Santa Rosa', 'El Pinto', 'Maipo']
  },

  // ZONA PONIENTE
  {
    slug: 'maipu',
    nombre: 'Maipú',
    zona: 'Poniente',
    descripcion: 'Servicio mecánico a domicilio en Maipú, cubriendo Plaza de Armas, Av. Pajaritos, Los Pinos, Ciudad Gateway, Tres Poniente y todo el sector poniente de la comuna más grande de Chile.',
    h1: 'Mecánico a Domicilio en Maipú | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Maipú | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Maipú. Diagnóstico, mantención, frenos y auxilio 24/7. Atendemos Pajaritos, Los Pinos, Tres Poniente. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio maipu', 'mecanico maipu', 'auxilio mecanico maipu'],
    sectoresPopulares: ['Plaza de Armas', 'Av. Pajaritos', 'Los Pinos', 'Ciudad Gateway', 'Tres Poniente']
  },
  {
    slug: 'pudahuel',
    nombre: 'Pudahuel',
    zona: 'Poniente',
    descripcion: 'Atención mecánica a domicilio en Pudahuel, incluyendo El Bosque, Pudahuel Sur, Lo Cruchaga, Ciudad Pudahuel y el entorno del Aeropuerto Arturo Merino Benítez.',
    h1: 'Mecánico a Domicilio en Pudahuel | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Pudahuel | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Pudahuel. Diagnóstico, mantención, frenos y auxilio 24/7. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio pudahuel', 'mecanico pudahuel', 'auxilio mecanico pudahuel', 'aeropuerto mecanico'],
    sectoresPopulares: ['El Bosque', 'Pudahuel Sur', 'Lo Cruchaga', 'Ciudad Pudahuel', 'Aeropuerto']
  },
  {
    slug: 'cerro-navia',
    nombre: 'Cerro Navia',
    zona: 'Poniente',
    descripcion: 'Cobertura en Cerro Navia, desde Av. Neptuno hasta Huelén, incluyendo Cerro Navia Centro, Las Parcelas y Av. San Pablo.',
    h1: 'Mecánico a Domicilio en Cerro Navia | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Cerro Navia | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Cerro Navia. Diagnóstico, mantención, frenos y auxilio 24/7. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio cerro navia', 'mecanico cerro navia', 'auxilio mecanico cerro navia'],
    sectoresPopulares: ['Av. Neptuno', 'Cerro Navia Centro', 'Las Parcelas', 'Av. San Pablo']
  },
  {
    slug: 'lo-prado',
    nombre: 'Lo Prado',
    zona: 'Poniente',
    descripcion: 'Servicio mecánico a domicilio en Lo Prado, cubriendo Av. San Pablo, Neptuno, El Salto y todo el sector poniente de la comuna.',
    h1: 'Mecánico a Domicilio en Lo Prado | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Lo Prado | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Lo Prado. Diagnóstico, mantención, frenos y auxilio 24/7. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio lo prado', 'mecanico lo prado', 'auxilio mecanico lo prado'],
    sectoresPopulares: ['Av. San Pablo', 'Neptuno', 'El Salto']
  },
  {
    slug: 'renca',
    nombre: 'Renca',
    zona: 'Poniente',
    descripcion: 'Atención mecánica a domicilio en Renca, cubriendo Plaza de Armas, Av. Cerro Navia, Renca Centro y el sector del Cerro Renca.',
    h1: 'Mecánico a Domicilio en Renca | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Renca | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Renca. Diagnóstico, mantención, frenos y auxilio 24/7. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio renca', 'mecanico renca', 'auxilio mecanico renca'],
    sectoresPopulares: ['Plaza de Armas', 'Av. Cerro Navia', 'Renca Centro', 'Cerro Renca']
  },
  {
    slug: 'quinta-normal',
    nombre: 'Quinta Normal',
    zona: 'Poniente',
    descripcion: 'Cobertura en Quinta Normal, incluyendo el Parque Quinta Normal, Matucana, Blanco Encalada y el entorno del Museo Nacional de Historia Natural.',
    h1: 'Mecánico a Domicilio en Quinta Normal | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Quinta Normal | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Quinta Normal. Diagnóstico, mantención, frenos y auxilio 24/7. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio quinta normal', 'mecanico quinta normal', 'auxilio mecanico quinta normal'],
    sectoresPopulares: ['Parque Quinta Normal', 'Matucana', 'Blanco Encalada']
  },

  // OTRAS COMUNAS IMPORTANTES
  {
    slug: 'penalolen',
    nombre: 'Peñalolén',
    zona: 'Oriente',
    descripcion: 'Servicio mecánico a domicilio en Peñalolén, cubriendo Plaza de Armas, Av. Grecia, Las Parcelas, Peñalolén Alto y el sector oriente de la comuna.',
    h1: 'Mecánico a Domicilio en Peñalolén | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Peñalolén | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Peñalolén. Diagnóstico, mantención, frenos y auxilio 24/7. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio penalolen', 'mecanico penalolen', 'auxilio mecanico penalolen'],
    sectoresPopulares: ['Plaza de Armas', 'Av. Grecia', 'Las Parcelas', 'Peñalolén Alto']
  },
  {
    slug: 'macul',
    nombre: 'Macul',
    zona: 'Oriente',
    descripcion: 'Atención mecánica a domicilio en Macul, cubriendo Av. Macul, Plaza de Armas de Macul, Av. Quilín y el sector de Villa Macul.',
    h1: 'Mecánico a Domicilio en Macul | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Macul | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Macul. Diagnóstico, mantención, frenos y auxilio 24/7. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio macul', 'mecanico macul', 'auxilio mecanico macul'],
    sectoresPopulares: ['Av. Macul', 'Plaza de Armas', 'Av. Quilín', 'Villa Macul']
  },
  {
    slug: 'colina',
    nombre: 'Colina',
    zona: 'Norte',
    descripcion: 'Cobertura en Colina, incluyendo Chicureo, Ciudad de Colina, Las Canteras y todo el sector norte de la comuna.',
    h1: 'Mecánico a Domicilio en Colina | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Colina | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Colina. Diagnóstico, mantención, frenos y auxilio 24/7. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio colina', 'mecanico colina', 'chicureo mecanico', 'auxilio mecanico colina'],
    sectoresPopulares: ['Chicureo', 'Ciudad de Colina', 'Las Canteras']
  },
  {
    slug: 'lampa',
    nombre: 'Lampa',
    zona: 'Norte',
    descripcion: 'Servicio mecánico a domicilio en Lampa, incluyendo el sector urbano, Valle Grande y las zonas rurales aledañas.',
    h1: 'Mecánico a Domicilio en Lampa | DRAUTOMOTRIZ',
    metaTitle: 'Mecánico a Domicilio en Lampa | DRAUTOMOTRIZ',
    metaDescription: 'Mecánico a domicilio en Lampa. Diagnóstico, mantención, frenos y auxilio 24/7. WhatsApp +56962408735.',
    keywords: ['mecanico a domicilio lampa', 'mecanico lampa', 'auxilio mecanico lampa'],
    sectoresPopulares: ['Lampa Centro', 'Valle Grande']
  }
];

export const getComunaBySlug = (slug: string): Comuna | undefined =>
  comunas.find(c => c.slug === slug);

export const getComunasByZona = (zona: string): Comuna[] =>
  comunas.filter(c => c.zona === zona);

export const zonas: string[] = ['Oriente', 'Centro', 'Norte', 'Sur', 'Poniente'];
