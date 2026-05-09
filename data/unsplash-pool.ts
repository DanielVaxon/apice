// Pool curado de imagens Unsplash usadas pelos empreendimentos.
// Todas com licença gratuita (Unsplash) e IDs estáveis. Centralizar aqui
// permite trocar provedor (CDN próprio, S3) sem tocar em componentes.

const U = (id: string, w = 1920) =>
  `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format&fit=crop`;

export const POOL = {
  // Residencial luxo / fachadas
  res_facade_1: U("photo-1545324418-cc1a3fa10c00"),
  res_facade_2: U("photo-1493809842364-78817add7ffb"),
  res_facade_3: U("photo-1600210492486-724fe5c67fb0"),
  res_facade_4: U("photo-1567496898669-ee935f5f647a"),
  // Interiores residenciais
  res_int_1: U("photo-1502672260266-1c1ef2d93688"),
  res_int_2: U("photo-1600596542815-ffad4c1539a9"),
  res_int_3: U("photo-1600210491892-03d54c0aaf87"),
  res_int_4: U("photo-1600607687939-ce8a6c25118c"),
  res_int_5: U("photo-1568605114967-8130f3a36994"),
  res_int_6: U("photo-1502672023488-70e25813eb80"),
  res_int_7: U("photo-1486406146926-c627a92ad1ab"),
  res_int_8: U("photo-1564013799919-ab600027ffc6"),
  // Áreas comuns / lazer
  res_amen_1: U("photo-1540541338287-41700207dee6"), // piscina
  res_amen_2: U("photo-1571902943202-507ec2618e8f"), // lobby
  res_amen_3: U("photo-1582719478250-c89cae4dc85b"), // academia
  // Comercial / hotel
  com_facade_1: U("photo-1497366216548-37526070297c"),
  com_facade_2: U("photo-1542362567-b07e54358753"),
  com_int_1: U("photo-1564540583246-934409427776"), // sala comercial
  com_int_2: U("photo-1551882547-ff40c63fe5fa"), // hotel lobby
  // Lago/Brasília
  lago_1: U("photo-1502602898657-3e91760cbb34"),
  lago_2: U("photo-1496564203457-11bb12075d90"),
} as const;

export type PoolKey = keyof typeof POOL;

export const cardSize = (url: string) => url.replace("w=1920", "w=800");
export const galleryThumb = (url: string) => url.replace("w=1920", "w=600");
