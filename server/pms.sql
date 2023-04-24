drop schema pms;
create database pms;
use pms;
CREATE TABLE studentdetails (
  stid int NOT NULL AUTO_INCREMENT,
  sname varchar(30) NOT NULL ,
  usn varchar(12) NOT NULL UNIQUE,
  sskills varchar(30) NOT NULL ,
  mobile bigint NOT NULL UNIQUE,
  email varchar(30) NOT NULL UNIQUE ,
  dob date NOT NULL,
  branch varchar(10) NOT NULL,
  cgpa float NOT NULL,
  PRIMARY KEY (stid,usn)
);



CREATE TABLE slogin (
  id int NOT NULL AUTO_INCREMENT,
  usn varchar(12) NOT NULL UNIQUE,
  pass varchar(50) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (usn) REFERENCES studentdetails(usn) ON DELETE CASCADE
);



CREATE TABLE admindetails (
  aid int NOT NULL AUTO_INCREMENT,
  aname varchar(30)  NOT NULL,
  email varchar(30) NOT NULL UNIQUE,
  phone bigint NOT NULL UNIQUE,
  depname varchar(10) NOT NULL,
  PRIMARY KEY (aid)
);


CREATE TABLE alogin (
  id int NOT NULL AUTO_INCREMENT,
  aname varchar(30)  NOT NULL,
  email varchar(30) NOT NULL,
  pass varchar(50) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (email) REFERENCES admindetails(email) ON DELETE CASCADE
);



CREATE TABLE companydetails (
  id int NOT NULL AUTO_INCREMENT,
  cname varchar(30) NOT NULL UNIQUE,
  crequiredskills  varchar(300) NOT NULL,
  email varchar(30) NOT NULL UNIQUE,
  phone bigint NOT NULL UNIQUE,
  website varchar(30) NOT NULL,
  jloc varchar(300) NOT NULL,
  package varchar(30) NOT NULL,
  mincgpa float NOT NULL,
  position varchar(50) NOT NULL,
  PRIMARY KEY (id,cname)
);



CREATE TABLE updateddrive (
  id int NOT NULL AUTO_INCREMENT,
  usn varchar(12) NOT NULL,
  sname varchar(30) NOT NULL UNIQUE,
  batch varchar(10) NOT NULL,
  cname varchar(30) NOT NULL,
  pdate date NOT NULL,
  package varchar(30) NOT NULL,
  position varchar(50) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (usn) REFERENCES studentdetails(usn) ON DELETE CASCADE,
  FOREIGN KEY (cname) REFERENCES companydetails(cname) ON DELETE CASCADE
);

INSERT INTO `studentdetails` (`stid`, `sname`, `usn`, `sskills`, `mobile`, `email`, `dob`, `branch`, `cgpa`) VALUES
(1,'John Doe','usn001','Java, Python', '9876543210', 'johndoe@example.com', '2000-01-01', 'CS', 8.75),
(2,'Jane Doe','usn002', 'C++, Python', '9876543211', 'janedoe@example.com', '2000-02-01', 'CS', 8.50),
( 3,'Bob Smith','usn003','AutoCAD, SolidWorks', '9876543212', 'bobsmith@example.com', '2000-03-01', 'ME', 8.25),
( 4,'Alice Johnson','usn004', 'MATLAB, Simulink', '9876543213', 'alicejohnson@example.com', '2000-04-01', 'EC', 8.00),
( 5,'David Lee','usn005', 'ANSYS, CFD', '9876543214', 'davidlee@example.com', '2000-05-01', 'ME', 7.75),
( 6,'Karen Brown','usn006', 'Verilog, VHDL', '9876543215', 'karenbrown@example.com', '2000-06-01', 'EC', 7.50),
( 7, 'Mark Wilson','usn007','JavaScript, HTML', '9876543216', 'markwilson@example.com', '2000-07-01', 'CS', 7.25),
( 8, 'Amy Davis','usn008','ANSYS, SolidWorks', '9876543217', 'amydavis@example.com', '2000-08-01', 'ME', 7.00),
( 9, 'Tommy Garcia','usn009','MATLAB, Simulink', '9876543218', 'tommygarcia@example.com', '2000-09-01', 'EC', 6.75),
(10, 'Sara Jackson','usn010','Python, Django', '9876543219', 'sarajackson@example.com', '2000-10-01', 'CS', 6.50),
(11,'Ryan Smith', 'usn011', 'AutoCAD, ANSYS', '9876543220', 'ryansmith@example.com', '2000-11-01', 'ME', 6.25),
( 12, 'Olivia Johnson','usn012','Verilog, VHDL', '9876543221', 'oliviajohnson@example.com', '2000-12-01', 'EC', 6.00),
( 13,'Lucas Davis','usn013','Java, JavaScript', '9876543222', 'lucasdavis@example.com', '2001-01-01', 'CS', 5.75),
( 14 , 'Sophia Wilson','usn014','SolidWorks, CFD', '987654322', 'sophiawilson@gmail.com','2001-01-05','cs',6.35);



INSERT INTO slogin ( usn, pass) VALUES
('1js18is005', 'shikumi'),
('1js18is071', 'tillu'),
('1js18is002', 'jaditi'),
('1js18cs003', 'anku'),
('1js18is052', 'aman'),
('1js18is063', 'gujrati'),
('1js18cs069', 'khalid'),
('1js18cs025', 'ishani'),
('1js18cs013', 'dishu'),
('1js18is082', 'shikumi'),
('1js18is062', 'pallavi');


INSERT INTO admindetails (aname, email, phone, depname) VALUES
('Rajat', 'rajjo@gmail.com', 1414175414, 'CSE'),
('Rahul', 'rahul111@gmail.com', 5546675414, 'ISE'),
('shiku', 'shiku@gmail.com', 7854475414, 'ISE'),
('Aditi', 'ajr@gmail.com', 8926525414, 'ECE');

INSERT INTO alogin ( aname, email, pass) VALUES
('Rajat', 'rajjo@gmail.com', 'rajjo'),
('Rahul', 'rahul111@gmail.com', 'rahul'),
('Shiku', 'shiku@gmail.com','shiku'),
('Aditi', 'ajr@gmail.com', 'aditi');

INSERT INTO `companydetails` (`id`,`cname`, `crequiredskills`, `email`, `phone`, `website`, `jloc`, `package`, `mincgpa`, `position`) VALUES
(1,'ABC Corporation', 'Programming, Database Management', 'info@abccorp.com', '1234567890', 'www.abccorp.com', 'Bangalore', 800000, 7.5, 'Software Developer'),
(2,'XYZ Corporation', 'Marketing, Public Speaking', 'info@xyzcorp.com', '2345678905', 'www.xyzcorp.com', 'Mumbai', 700000, 7.0, 'Marketing Manager'),
(3,'PQR Corporation', 'Graphic Design, Web Development', 'info@pqrcorp.com', '3456789011', 'www.pqrcorp.com', 'Chennai', 900000, 8.0, 'Web Designer'),
(4,'LMN Corporation', 'Journalism, Creative Writing', 'info@lmncorp.com', '4567890123', 'www.lmncorp.com', 'Delhi', 750000, 7.2, 'Content Writer'),
(5,'DEF Corporation', 'Data Analysis, Statistics', 'info@defcorp.com', '5678901243', 'www.defcorp.com', 'Pune', 850000, 8.5, 'Data Analyst'),
(6,'GHI Corporation', 'Public Relations, Event Planning', 'info@ghicorp.com', '6789012345', 'www.ghicorp.com', 'Hyderabad', 700000, 7.0, 'Event Manager'),
(7,'JKL Corporation', 'Networking, Cybersecurity', 'info@jklcorp.com', '7890123456', 'www.jklcorp.com', 'Bangalore', 1000000, 9.0, 'Cybersecurity Analyst'),
(8,'MNO Corporation', 'Project Management, Leadership', 'info@mnoCorp.com', '8901234567', 'www.mnocorp.com', 'Mumbai', 950000, 8.0, 'Project Manager'),
(9,'QRS Corporation', 'Data Mining, Machine Learning', 'info@qrscorp.com', '9012345678', 'www.qrscorp.com', 'Chennai', 1200000, 9.5, 'Data Scientist'),
(10,'TUV Corporation', 'Graphic Design, Photography', 'info@tuvcorp.com', '0123456789', 'www.tuvcorp.com', 'Delhi', 650000, 7.5, 'Graphic Designer'),
(11,'VWX Corporation', 'Web Development, UI/UX Design', 'info@vwxcorp.com', '2345678901', 'www.vwxcorp.com', 'Pune', 800000, 8.0, 'UI/UX Designer'),
(12,'YZA Corporation', 'Marketing, Advertising', 'info@yzacorp.com', '3456789012', 'www.yzacorp.com', 'Hyderabad', 700000, 7.0, 'Advertising Manager'),
(13,'BCT Corporation', 'Database Management, Programming', 'info@bctcorp.com', '4567890133', 'www.bctcorp.com', 'Bangalore', 900000, 8.0, 'Database Administrator'),
(14,'LQP Corporation', 'Creative Writing, Journalism', 'info@lqpcorp.com', '5678901234', 'www.lqpcorp.com', 'Mumbai', 750000, 7.5, 'Journalist');

INSERT INTO updateddrive (usn, sname, batch, cname, pdate, package, position) VALUES
('1js18is005', 'Aarushi Rathore', '2018', 'Infosys', '2021-09-28', '11,00,000', 'WEB DEVELOPER'),
('1js18is071', 'Rahul Tilwani', '2018', 'Amazon', '2021-11-28', '19,00,000', 'WEB DEVELOPER'),
('1js18is003', 'Akanksha', '2018', 'Wipro', '2021-11-08', '15,00,000', 'WEB DEVELOPER'),
('1js18cs025', 'Ishani', '2018', 'Amazon', '2021-09-28', '16,00,000', 'WEB DEVELOPER'),
('1js18is063', 'Kavan Patel', '2018', 'Infosys', '2021-09-28', '12,00,000', 'WEB DEVELOPER'),
('1js18is082', 'Shikumi', '2018', 'Amazon', '2021-09-28', '14,00,000', 'WEB DEVELOPER');



SELECT sl.usn,sd.sname,sd.mobile,sd.email,sd.dob,sd.branch,sd.cgpa
FROM slogin AS sl
INNER JOIN studentdetails AS sd ON sl.usn = sd.usn;



DELETE FROM studentdetails
WHERE sname = 'RT';

DELETE FROM studentdetails
WHERE sname IN ('Lalu','fjlg');