CREATE TABLE IF NOT EXISTS `over_chans` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `id` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `url` varchar(100) NOT NULL,
  `default` tinyint(1) NOT NULL DEFAULT '0',
  `included` tinyint(1) NOT NULL DEFAULT '0',
  `userboards` varchar(100) DEFAULT NULL,
  `userboards_catname` varchar(50) DEFAULT NULL,
  `userboards_system` varchar(20) DEFAULT NULL,
  `boards` text,
  `catbg` varchar(13) NOT NULL DEFAULT 'ffffff|ffffff',
  `wiki` varchar(100) DEFAULT NULL,
  `rating` int(11) NOT NULL DEFAULT '1500',
  `offset` varchar(10) DEFAULT NULL,
  `prefix` varchar(20) DEFAULT NULL,
  `postfix` varchar(20) DEFAULT NULL,
  `radio` text,
  `colors` varchar(13) DEFAULT NULL,
  `advanced_less` text,
  `passhash` char(64) NOT NULL,
  `ballv` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`_id`),
  UNIQUE KEY `id` (`id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `live_links` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(300) NOT NULL,
  `urlnorm` varchar(300) NOT NULL,
  `description` varchar(70) NOT NULL,
  `iphash` char(32) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8;