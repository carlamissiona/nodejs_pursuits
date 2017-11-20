-- Dumping data for table `assessment`
--

INSERT INTO `assessment` ( `name`, `html_questions`, `html_answers`, `desc`) VALUES
('CSS', 'html', 'html', NULL);


INSERT INTO `assessment` ( `name`, `html_questions`, `html_answers`, `desc`) VALUES
('Public Health', 'html', 'html', NULL);


INSERT INTO `assessment` ( `name`, `html_questions`, `html_answers`, `desc`) VALUES
('Calculus', 'html', 'html', NULL);


INSERT INTO `assessment` ( `name`, `html_questions`, `html_answers`, `desc`) VALUES
('HTML', 'html', 'html', NULL);


--
-- Indexes for dumped tables
--

--
-- Indexes for table `assessment`
--
ALTER TABLE `assessment`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assessment`
--
ALTER TABLE `assessment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
