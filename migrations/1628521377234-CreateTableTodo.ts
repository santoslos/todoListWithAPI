import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableTodo1628521377234 implements MigrationInterface {
  name = 'CreateTableTodo1628521377234';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "todo" ("id" SERIAL NOT NULL, "textTodo" character varying NOT NULL, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "todo"');
  }
}
