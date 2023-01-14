-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 14, 2023 at 05:50 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `invoice`
--

-- --------------------------------------------------------

--
-- Table structure for table `descriptions`
--

CREATE TABLE `descriptions` (
  `id` int(11) NOT NULL,
  `id_invoices` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `qty` int(100) NOT NULL,
  `rate` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `descriptions`
--

INSERT INTO `descriptions` (`id`, `id_invoices`, `description`, `qty`, `rate`) VALUES
(169, 40, 'Lorem ipsum dolor sit amet  consectetur.', 2, 2000000),
(170, 40, 'Kotak', 1, 1500000),
(171, 40, 'Lorem ipsum dolor sit amet  consectetur.', 2, 1000000),
(172, 40, 'Lorem ipsum dolor sit amet  consectetur.', 1, 2000000),
(173, 40, 'Lorem ipsum dolor sit amet  consectetur.', 4, 1000000),
(174, 40, 'Lorem ipsum dolor sit amet  consectetur.', 3, 1000000),
(196, 36, 'Merah', 2, 3000);

-- --------------------------------------------------------

--
-- Table structure for table `down_payments`
--

CREATE TABLE `down_payments` (
  `id` int(11) NOT NULL,
  `id_invoices` int(11) NOT NULL,
  `date` date NOT NULL,
  `rate` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `down_payments`
--

INSERT INTO `down_payments` (`id`, `id_invoices`, `date`, `rate`) VALUES
(171, 40, '2023-01-02', 1000000),
(172, 40, '2023-01-02', 1000000),
(173, 40, '2023-01-03', 2000000),
(174, 40, '2023-01-01', 2000000),
(175, 40, '2023-01-02', 2000000),
(194, 36, '2023-01-04', 300),
(195, 36, '2023-01-06', 400);

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `id` int(11) NOT NULL,
  `alamat_perusahaan` varchar(255) NOT NULL,
  `no_invoice` varchar(255) NOT NULL,
  `company` varchar(255) NOT NULL,
  `invoice_date` date NOT NULL,
  `due_date` date NOT NULL,
  `payment_instruction` varchar(500) NOT NULL,
  `discount` int(3) NOT NULL,
  `tax` int(3) NOT NULL,
  `shipping` int(255) NOT NULL,
  `latest_update` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`id`, `alamat_perusahaan`, `no_invoice`, `company`, `invoice_date`, `due_date`, `payment_instruction`, `discount`, `tax`, `shipping`, `latest_update`) VALUES
(36, 'Jl Jakarta\n402002\nIndonesaa', 'A20222', 'PT Tokopediaa', '2022-12-07', '2022-12-08', 'asdws', 12, 23, 33, '2023-01-14'),
(40, 'Jl. Raya Kamojang No. 74 RT. 03 RW. 06 \nDs. Laksana Kec. Ibun Kab. Bandung\nMobile : 08123456789\nEmail : contoh@email.com ', '32424', 'PT ABC ', '2022-12-19', '2022-12-10', 'Pembayaran melalui rekening : \n\nPT KAMOJANG MANDIRI\nBANK MANDIRI \nA/C No. 1310001204009\nREK. DOLLAR PT KAMOJANG MANDIRI\nNo. 131-00-1967023-3', 50, 0, 0, '2023-01-14');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
(1, 'admin', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `descriptions`
--
ALTER TABLE `descriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `down_payments`
--
ALTER TABLE `down_payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `descriptions`
--
ALTER TABLE `descriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=197;

--
-- AUTO_INCREMENT for table `down_payments`
--
ALTER TABLE `down_payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=196;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
