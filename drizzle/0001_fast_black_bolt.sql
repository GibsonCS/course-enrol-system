ALTER TABLE "users" ADD CONSTRAINT "users_cpf_unique" UNIQUE("cpf");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");