import type FioInterface from '@/types/FioInterface';

const firstNames = ['Иван', 'Петр', 'Сергей', 'Алексей', 'Дмитрий', 'Андрей', 'Михаил'];
const lastNames = ['Иванов', 'Петров', 'Сидоров', 'Смирнов', 'Кузнецов', 'Попов'];
const middleNames = ['Иванович', 'Петрович', 'Сергеевич', 'Алексеевич', 'Дмитриевич'];

export default function getRandomFio(): FioInterface {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const middleName = middleNames[Math.floor(Math.random() * middleNames.length)];

  return {
    firstName,
    lastName,
    middleName,
  };
}
