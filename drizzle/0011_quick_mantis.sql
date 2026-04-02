CREATE TABLE `donation_impact_metrics` (
	`id` int AUTO_INCREMENT NOT NULL,
	`total_raised_cad` int NOT NULL DEFAULT 0,
	`total_raised_usd` int NOT NULL DEFAULT 0,
	`total_donors` int NOT NULL DEFAULT 0,
	`legal_hours_funded` int NOT NULL DEFAULT 0,
	`hourly_rate` int NOT NULL DEFAULT 25000,
	`last_updated` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `donation_impact_metrics_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `government_response_tracker` (
	`id` int AUTO_INCREMENT NOT NULL,
	`official_name` varchar(255) NOT NULL,
	`title` varchar(255) NOT NULL,
	`government_level` enum('federal','provincial','municipal','agency','other') NOT NULL,
	`department` varchar(255),
	`jurisdiction` varchar(255),
	`email` varchar(320),
	`phone` varchar(20),
	`date_contacted` timestamp NOT NULL,
	`contact_method` enum('email','phone','social_media','in_person','letter','other') NOT NULL,
	`contact_subject` varchar(255) NOT NULL,
	`response_status` enum('no_response','acknowledged','partial_response','full_response','refused','hostile') NOT NULL DEFAULT 'no_response',
	`response_date` timestamp,
	`response_notes` text,
	`days_to_respond` int,
	`follow_up_required` enum('yes','no') NOT NULL DEFAULT 'no',
	`follow_up_date` timestamp,
	`publicly_shared` enum('yes','no') NOT NULL DEFAULT 'no',
	`notes` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `government_response_tracker_id` PRIMARY KEY(`id`)
);
