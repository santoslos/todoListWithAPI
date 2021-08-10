import { ApiProperty } from '@nestjs/swagger';

export class DeleteResponse {
  @ApiProperty()
  raw: any;

  @ApiProperty()
  affected?: number | null;
}