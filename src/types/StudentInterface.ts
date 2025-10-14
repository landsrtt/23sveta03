export default interface StudentInterface {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  groupId: number;
  uuid?: string; // опционально, для клиентской стороны
}
