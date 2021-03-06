import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  IsArray,
  ArrayNotEmpty,
} from 'class-validator';
import { BodyField } from '../interfaces/template.interface';

export class SaveTemplateDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly report: string;
  
  @IsString()
  readonly path_to_issues: string;

  @IsArray()
  @ArrayNotEmpty()
  readonly title_fields: string[];

  @IsArray()
  @ArrayNotEmpty()
  readonly external_comparison_fields: string[];  
  
  @IsArray()
  @ArrayNotEmpty()
  readonly internal_comparison_fields: string[];

  @IsArray()
  readonly merge_fields: string[];

  @IsString()
  @IsNotEmpty()
  readonly title_pattern: string;

  @IsString()
  readonly subtitle_pattern: string;

  @IsArray()
  readonly tags: string[];

  @IsArray()
  @ArrayNotEmpty()
  readonly body_fields: BodyField[];
}

export class IdParamDto {
  @IsString()
  @IsNotEmpty()
  readonly id: string;
}

export class EditTemplateBodyDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  readonly path_to_issues: string;

  @IsArray()
  @ArrayNotEmpty()
  readonly title_fields: string[];

  @IsArray()
  @ArrayNotEmpty()
  readonly external_comparison_fields: string[];  
  
  @IsArray()
  @ArrayNotEmpty()
  readonly internal_comparison_fields: string[];

  @IsString()
  @IsNotEmpty()
  readonly title_pattern: string;

  @IsString()
  readonly subtitle_pattern: string;

  @IsArray()
  readonly tags: string[];

  @IsArray()
  @ArrayNotEmpty()
  readonly body_fields: BodyField[];
}
