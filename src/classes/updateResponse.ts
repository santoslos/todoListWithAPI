import { ApiProperty } from '@nestjs/swagger';
import { ObjectLiteral } from 'typeorm/common/ObjectLiteral';

export class UpdateResponse {
  @ApiProperty()
  raw: any;

  @ApiProperty()
  affected?: number;

  @ApiProperty()
  generatedMaps: ObjectLiteral[];
}