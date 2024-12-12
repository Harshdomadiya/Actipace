-- AlterTable
ALTER TABLE `user` MODIFY `resetPasswordExpires` DATETIME(3) NULL,
    MODIFY `token` VARCHAR(191) NULL;
