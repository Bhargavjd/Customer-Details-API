-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 24, 2021 at 08:55 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 5.6.39

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_name` varchar(255) DEFAULT NULL,
  `user_id` char(36) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `user_image` blob,
  `total_orders` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `last_logged_in` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_name`, `user_id`, `user_email`, `user_password`, `user_image`, `total_orders`, `createdAt`, `updatedAt`, `last_logged_in`) VALUES
('Bhargav', '14147ced-4ea4-4de6-978f-0f3697cb941e', 'bhargavtest@gmail.com', '$2a$08$FWv4dCVGDDlYgFjcAIzOru2KUqOV9gye43j0mH7jncfLDmM.ZcDKm', 0x666f726d2e4a5047, 2, '2021-10-23 19:36:00', '2021-10-23 19:36:00', '2021-10-23 19:36:00'),
('test2', 'f8591f7d-102b-48d6-90c2-2008e8a314ae', 'test2@gmail.com', '$2a$08$aX7WCJyxr5MyW603fG0r5.cdzLAQKOAcnTlBQPtUuEbY6t6TGgvuy', NULL, 3, '2021-10-23 20:54:56', '2021-10-23 20:54:56', '2021-10-23 20:54:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_name` (`user_name`),
  ADD UNIQUE KEY `user_name_2` (`user_name`),
  ADD UNIQUE KEY `user_name_3` (`user_name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
