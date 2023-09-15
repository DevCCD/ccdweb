/*
  Warnings:

  - You are about to drop the column `texto` on the `parrafo` table. All the data in the column will be lost.
  - You are about to drop the column `cargo` on the `persona` table. All the data in the column will be lost.
  - You are about to drop the column `frase` on the `persona` table. All the data in the column will be lost.
  - Added the required column `textoEnglish` to the `Parrafo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `textoSpanish` to the `Parrafo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cargoEnglish` to the `Persona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cargoSpanish` to the `Persona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fraseEnglish` to the `Persona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fraseSpanish` to the `Persona` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `parrafo` DROP COLUMN `texto`,
    ADD COLUMN `textoEnglish` VARCHAR(191) NOT NULL,
    ADD COLUMN `textoSpanish` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `persona` DROP COLUMN `cargo`,
    DROP COLUMN `frase`,
    ADD COLUMN `cargoEnglish` VARCHAR(191) NOT NULL,
    ADD COLUMN `cargoSpanish` VARCHAR(191) NOT NULL,
    ADD COLUMN `fraseEnglish` VARCHAR(191) NOT NULL,
    ADD COLUMN `fraseSpanish` VARCHAR(191) NOT NULL;
