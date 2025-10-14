import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getStudentsApi, deleteStudentApi, addStudentApi } from '@/api/studentsApi';
import type StudentInterface from '@/types/StudentInterface';

interface UseStudentsReturn {
  students: StudentInterface[] | undefined;
  isLoading: boolean;
  error: Error | null;
  deleteStudent: (studentId: number) => void;
  addStudent: (student: Omit<StudentInterface, 'id'>) => void;
  isAdding: boolean;
  isDeleting: boolean;
}

export const useStudents = (): UseStudentsReturn => {
  const queryClient = useQueryClient();

  const { data: students, isLoading, error } = useQuery({
    queryKey: ['students'],
    queryFn: getStudentsApi,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteStudentApi,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['students'] });
    },
  });

  const addMutation = useMutation({
    mutationFn: addStudentApi,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['students'] });
    },
  });

  return {
    students,
    isLoading,
    error,
    deleteStudent: deleteMutation.mutate,
    addStudent: addMutation.mutate,
    isAdding: addMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
};
