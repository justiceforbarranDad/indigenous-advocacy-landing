CREATE TABLE `stripe_payments` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int,
	`payment_intent_id` varchar(255) NOT NULL,
	`amount` int NOT NULL,
	`currency` varchar(3) NOT NULL DEFAULT 'CAD',
	`status` enum('pending','succeeded','failed','canceled') NOT NULL DEFAULT 'pending',
	`customer_email` varchar(320) NOT NULL,
	`customer_name` varchar(255),
	`metadata` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `stripe_payments_id` PRIMARY KEY(`id`),
	CONSTRAINT `stripe_payments_payment_intent_id_unique` UNIQUE(`payment_intent_id`)
);
--> statement-breakpoint
ALTER TABLE `donations` MODIFY COLUMN `method` enum('etransfer','gofundme','stripe','other') NOT NULL;--> statement-breakpoint
ALTER TABLE `donations` ADD `user_id` int;--> statement-breakpoint
ALTER TABLE `donations` ADD `stripe_payment_intent_id` varchar(255);