-- CreateTable

-- 6-5-Creating Migration
-- ----------------------

-- we have a SQL file and this file has instructions for
-- creating a database table called User with these columns.

-- Now the type of these columns is based on the User model that we 
-- defined in our schema.

-- Now the type of these columns will vary depending on the provider 
-- we use.For example, if we use a "Postgres database", you will see that 
-- the type of these columns will be different.

CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `followers` INTEGER NOT NULL DEFAULT 0,
    `isActive` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
