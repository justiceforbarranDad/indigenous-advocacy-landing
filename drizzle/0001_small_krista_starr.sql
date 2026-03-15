CREATE TABLE `donations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`donor_name` varchar(255) NOT NULL,
	`donor_email` varchar(320) NOT NULL,
	`amount` int NOT NULL,
	`method` enum('etransfer','gofundme','other') NOT NULL,
	`message` text,
	`is_anonymous` enum('yes','no') NOT NULL DEFAULT 'no',
	`status` enum('pending','confirmed','failed') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `donations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `survivor_stories` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20),
	`story` text NOT NULL,
	`category` enum('child_victim','adult_victim','family_member','advocate','other') NOT NULL,
	`is_public` enum('yes','no') NOT NULL DEFAULT 'no',
	`status` enum('pending','approved','rejected') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `survivor_stories_id` PRIMARY KEY(`id`)
);
