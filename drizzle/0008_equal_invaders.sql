CREATE TABLE `donation_campaigns` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text NOT NULL,
	`goal_amount` int NOT NULL,
	`raised_amount` int NOT NULL DEFAULT 0,
	`is_active` enum('yes','no') NOT NULL DEFAULT 'yes',
	`start_date` timestamp NOT NULL DEFAULT (now()),
	`end_date` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `donation_campaigns_id` PRIMARY KEY(`id`)
);
