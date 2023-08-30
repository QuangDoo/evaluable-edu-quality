// Đây là mẫu interface
interface IUser {
  useName: string;
  age: number;
  accountType: string;
}

interface ISchoolAccount extends IUser {
  address: string;
}
