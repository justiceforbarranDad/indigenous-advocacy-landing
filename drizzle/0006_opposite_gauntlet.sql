CREATE TABLE `survey_responses` (
	`id` int AUTO_INCREMENT NOT NULL,
	`response` enum('yes','no') NOT NULL,
	`email` varchar(320),
	`name` varchar(255),
	`additional_info` text,
	`ip_address` varchar(45),
	`user_agent` varchar(500),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `survey_responses_id` PRIMARY KEY(`id`)
);
