import type { NextRequest } from 'next/server';
import { deleteStudentDb } from '@/db/studentdb';

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
): Promise<Response> {
  const studentId = parseInt(params.id);
  const deletedId = await deleteStudentDb(studentId);

  return new Response(JSON.stringify({ id: deletedId }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
