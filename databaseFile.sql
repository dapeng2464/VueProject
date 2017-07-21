/*
SQLyog Ultimate v8.32 
MySQL - 5.7.19-log : Database - new_schema
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`new_schema` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `new_schema`;

/*Table structure for table `emtable` */

DROP TABLE IF EXISTS `emtable`;

CREATE TABLE `emtable` (
  `employee` varchar(64) DEFAULT NULL,
  `manager` varchar(64) DEFAULT NULL,
  `mEmail` varchar(64) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `sendTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `emtable` */

insert  into `emtable`(`employee`,`manager`,`mEmail`,`status`,`sendTime`) values ('Tom','Mick','test24642464@gmail.com',0,'2017-07-20 18:44:13'),('Alan','Zac','test24642464@gmail.com',0,'2017-07-20 18:44:48'),('alger','Luca','test24642464@gmail.com',0,'2017-07-20 18:38:35'),('Ted','Mick','test24642464@gmail.com',0,'2017-07-20 18:44:15'),('Taylor','Zac','test24642464@gmail.com',0,'2017-07-20 18:44:52'),('Tab','Mick','test24642464@gmail.com',0,'2017-07-20 18:44:18'),('Stanley','Zac','test24642464@gmail.com',0,'2017-07-20 18:44:54'),('Will','Luca','test24642464@gmail.com',0,'2017-07-20 18:44:58'),('Webster','Luca','test24642464@gmail.com',0,'2017-07-20 18:45:02'),('Jay','Luca','test24642464@gmail.com',0,'2017-07-20 18:45:57'),('Henry','Mick','test24642464@gmail.com',0,'2017-07-20 19:04:56');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
