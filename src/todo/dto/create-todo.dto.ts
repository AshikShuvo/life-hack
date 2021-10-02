import { OPENSSL_VERSION_NUMBER } from "constants";

export class CreateTodoDto {
  name : string;
  description :string;
  status :TodoStatus;
  createdAt : Date;
  completedAt: Date;
  startingDate: Date;
  estimatedDate: Date;
  rejectedAt : Date;
  authorId : number;
}
enum TodoStatus{
  OPEN="OPEN",
  COMPLETED="COMPLETED",
  PAUSE="PAUSE",
  REJECTED="REJECTED"
}