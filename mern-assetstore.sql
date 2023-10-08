-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 08 Okt 2023 pada 18.19
-- Versi server: 10.4.20-MariaDB
-- Versi PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mern-assetstore`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 'Kaos Merah Superman', 'Size XL PM-COLOR : RED', '62ea071be03f3f0574acccdebfcc2db1.jpg', 'http://localhost:5000/images/62ea071be03f3f0574acccdebfcc2db1.jpg', '2023-10-08 13:23:03', '2023-10-08 16:14:59'),
(3, 'Kaos Biru Hitam', 'Size L PM-COLOR : BLUE & BLACK', '00fe81b90584dacca15bf4c1dbd2dd3d.jpg', 'http://localhost:5000/images/00fe81b90584dacca15bf4c1dbd2dd3d.jpg', '2023-10-08 13:45:06', '2023-10-08 15:14:22'),
(6, 'Celana Putih', 'Size : XL PM-COLOR: WHITE', '8b481616853c51c6a230e60c4c41b0f4.jpg', 'http://localhost:5000/images/8b481616853c51c6a230e60c4c41b0f4.jpg', '2023-10-08 16:14:47', '2023-10-08 16:14:47'),
(7, 'Jeans Hitam', 'Size : XL PM-COLOR: HITAM', 'adf06f9b8a75857d831981b6689568bd.jpg', 'http://localhost:5000/images/adf06f9b8a75857d831981b6689568bd.jpg', '2023-10-08 16:15:26', '2023-10-08 16:17:40');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
