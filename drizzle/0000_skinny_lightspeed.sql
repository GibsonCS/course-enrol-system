CREATE TYPE "public"."roleNames" AS ENUM('student', 'administrator', 'teacher');--> statement-breakpoint
CREATE TABLE "roles" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "roles_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"role" "roleNames"
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"cpf" varchar NOT NULL,
	"email" varchar NOT NULL,
	"password" varchar NOT NULL
);
