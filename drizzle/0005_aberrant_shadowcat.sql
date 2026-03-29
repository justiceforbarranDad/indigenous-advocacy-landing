CREATE TABLE `email_campaigns` (
	`id` int AUTO_INCREMENT NOT NULL,
	`news_update_id` int NOT NULL,
	`subject` varchar(255) NOT NULL,
	`recipient_count` int NOT NULL DEFAULT 0,
	`sent_count` int NOT NULL DEFAULT 0,
	`open_count` int NOT NULL DEFAULT 0,
	`click_count` int NOT NULL DEFAULT 0,
	`status` enum('draft','scheduled','sent','failed') NOT NULL DEFAULT 'draft',
	`sent_at` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `email_campaigns_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `email_subscribers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`name` varchar(255),
	`subscription_type` enum('all_updates','news_only','podcast_only') NOT NULL DEFAULT 'all_updates',
	`is_active` enum('yes','no') NOT NULL DEFAULT 'yes',
	`confirmation_token` varchar(255),
	`is_confirmed` enum('yes','no') NOT NULL DEFAULT 'no',
	`confirmed_at` timestamp,
	`unsubscribed_at` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `email_subscribers_id` PRIMARY KEY(`id`),
	CONSTRAINT `email_subscribers_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `news_updates` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text NOT NULL,
	`content` text NOT NULL,
	`category` enum('breaking_news','podcast_episode','legal_update','event','other') NOT NULL,
	`image_url` varchar(512),
	`status` enum('draft','published','archived') NOT NULL DEFAULT 'draft',
	`published_at` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `news_updates_id` PRIMARY KEY(`id`)
);
