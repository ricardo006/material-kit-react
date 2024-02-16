import { faker } from '@faker-js/faker';

const CAIXA_TITLES = [
  'Saldo Total',
  'Entradas',
  'Saídas',
  'Lançamentos',
  'Comissões',
  'Saldo do dia',
  'Lucro Total',
];

const SALDO_TITLES = [
  '2.200,00',
  '600,00',
  '15.000,00',
  'Ver Lançamentos ->',
  'Ver Comissões ->',
  '✨What is Done is Done ✨',
  '✨What is Done is Done ✨',
];

const posts = [...Array(7)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/assets/images/covers/cover_${index + 14}.jpg`,
  title: CAIXA_TITLES[index],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  saldo: SALDO_TITLES[index],
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 2}.jpg`,
  },
}));

export default posts;
