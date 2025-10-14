import type StudentInterface from '@/types/StudentInterface';

export const getStudentsApi = async (): Promise<StudentInterface[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}students`);
    if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
    const students = await response.json() as StudentInterface[];
    return students;
  }
  catch (err) {
    console.log('>>> getStudentsApi', err);
    return [] as StudentInterface[];
  }
};

export const deleteStudentApi = async (studentId: number): Promise<number> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}students/${studentId}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
    return studentId;
  }
  catch (err) {
    console.log('>>> deleteStudentApi', err);
    return -1;
  }
};

export const addStudentApi = async (student: Omit<StudentInterface, 'id'>): Promise<StudentInterface> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}students`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    });
    if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
    const newStudent = await response.json() as StudentInterface;
    return newStudent;
  }
  catch (err) {
    console.log('>>> addStudentApi', err);
    throw err;
  }
};
