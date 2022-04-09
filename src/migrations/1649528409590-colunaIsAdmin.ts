import {MigrationInterface, QueryRunner} from "typeorm";

export class colunaIsAdmin1649528409590 implements MigrationInterface {
    name = 'colunaIsAdmin1649528409590'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isAdmin" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isAdmin" SET DEFAULT false`);
    }

}
