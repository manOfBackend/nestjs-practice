import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: '올바른 이메일 형식이 아닙니다.' })
  email: string;

  @IsNotEmpty({ message: '패스워드는 비워둘 수 없습니다.' })
  password: string;
}
