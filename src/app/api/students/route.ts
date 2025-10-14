import type { NextRequest } from 'next/server';
import { getStudentsDb, addStudentDb } from '@/db/studentdb';
import type StudentInterface from '@/types/StudentInterface';

export async function GET(): Promise<Response> {
  const students = await getStudentsDb();

  return new Response(JSON.stringify(students), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function POST(req: NextRequest): Promise<Response> {
  const student = await req.json() as Omit<StudentInterface, 'id'>;

  const newStudent = await addStudentDb(student);

  console.log(newStudent);
  return new Response(JSON.stringify(newStudent), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
