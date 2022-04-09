import {MigrationInterface, QueryRunner} from "typeorm";

export class updateColumn1649465570542 implements MigrationInterface {
    name = 'updateColumn1649465570542'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdOn"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdOn" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedOn"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedOn" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedOn"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedOn" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdOn"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdOn" TIMESTAMP NOT NULL`);
    }

}
