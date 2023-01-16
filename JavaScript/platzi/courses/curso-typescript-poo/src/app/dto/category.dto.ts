import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validateOrReject } from 'class-validator';
import { AccessType, Category } from '../models/category.model';

export interface ICreateCategoryDto extends Omit<Category, 'id'> {};
export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 50)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async() => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'Pepa';
    dto.image = 'https://nicobosti.com';
    await validateOrReject(dto)
  } catch (error) {
    console.log(error);
    
  }


})();