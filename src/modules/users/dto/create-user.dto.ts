import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty({message: "name kh đc để trống"})
  name: string;

  @IsNotEmpty({message: "email kh đc để trống"})
  @IsEmail({
    // viết role để quy định email
  }, {message: 'email không đúng định dạng'})
  email: string;

  @IsNotEmpty({ message: "password kh đc để trống"})
  password: string;
  phone: string;
  address: string;
  image: string;
}
