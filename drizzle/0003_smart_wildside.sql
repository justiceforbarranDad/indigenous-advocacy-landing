CREATE TABLE `parent_profiles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`parent_name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20),
	`child_situation` text NOT NULL,
	`involvement` text NOT NULL,
	`message` text,
	`status` enum('pending','reviewed','contacted') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `parent_profiles_id` PRIMARY KEY(`id`)
);
