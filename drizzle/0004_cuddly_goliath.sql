CREATE TABLE `video_views` (
	`id` int AUTO_INCREMENT NOT NULL,
	`video_id` varchar(255) NOT NULL,
	`video_title` varchar(255) NOT NULL,
	`view_count` int NOT NULL DEFAULT 0,
	`last_viewed_at` timestamp NOT NULL DEFAULT (now()),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `video_views_id` PRIMARY KEY(`id`)
);
