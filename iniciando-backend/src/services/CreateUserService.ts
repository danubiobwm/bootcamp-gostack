import {getRepository} from 'typeorm';
import {hash} from 'bcryptjs';
import User from '../models/User'

interface Request{
  name:string;
  email:string;
  password:string;
}

class CreacteUserService{
 public async execute({name, email, password}:Request):Promise<User>{
  const usersRepository=getRepository(User);

  const checkUserExist=await usersRepository.findOne({
    where:{email}
  });

  if(checkUserExist){
    throw new Error('email address already used')
  }
  const hashPassword = await hash(password, 8);
  const user = usersRepository.create({
    name,
    email,
    password:hashPassword
  });
  await usersRepository.save(user)



  return user
 }
}

export default CreacteUserService;
