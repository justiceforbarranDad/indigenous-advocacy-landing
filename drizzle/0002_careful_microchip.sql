CREATE TABLE `legal_profiles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`lawyer_name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`jurisdiction` varchar(255) NOT NULL,
	`specialization` text NOT NULL,
	`experience` text NOT NULL,
	`message` text,
	`status` enum('pending','reviewed','contacted') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `legal_profiles_id` PRIMARY KEY(`id`)
);
