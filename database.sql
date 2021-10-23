BEGIN TRANSACTION;
DROP TABLE IF EXISTS "users";
CREATE TABLE IF NOT EXISTS "users" (
	"id"	INTEGER NOT NULL,
	"username"	VARCHAR(50),
	"score"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO "users" ("id","username","score") VALUES (1,'lohanessian0',2740);
INSERT INTO "users" ("id","username","score") VALUES (2,'ptrippick1',301);
INSERT INTO "users" ("id","username","score") VALUES (3,'gfontell2',3371);
INSERT INTO "users" ("id","username","score") VALUES (4,'kackroyd3',9159);
INSERT INTO "users" ("id","username","score") VALUES (5,'ncarabet4',4142);
INSERT INTO "users" ("id","username","score") VALUES (6,'tbarnardo5',648);
INSERT INTO "users" ("id","username","score") VALUES (7,'rcomettoi6',2905);
INSERT INTO "users" ("id","username","score") VALUES (8,'tgreenman7',6687);
INSERT INTO "users" ("id","username","score") VALUES (9,'ccuschieri8',6221);
INSERT INTO "users" ("id","username","score") VALUES (10,'ohendren9',4643);
INSERT INTO "users" ("id","username","score") VALUES (11,'kchurma',1038);
INSERT INTO "users" ("id","username","score") VALUES (12,'fbernardetb',1626);
INSERT INTO "users" ("id","username","score") VALUES (13,'wcolquittc',7850);
INSERT INTO "users" ("id","username","score") VALUES (14,'epollastroned',4022);
INSERT INTO "users" ("id","username","score") VALUES (15,'csireye',4186);
INSERT INTO "users" ("id","username","score") VALUES (16,'bhearlef',4466);
INSERT INTO "users" ("id","username","score") VALUES (17,'lstrutherg',9852);
INSERT INTO "users" ("id","username","score") VALUES (18,'gtythertonh',832);
INSERT INTO "users" ("id","username","score") VALUES (19,'bburminghami',9282);
INSERT INTO "users" ("id","username","score") VALUES (20,'lpennamanj',5698);
INSERT INTO "users" ("id","username","score") VALUES (21,'ddiprosek',8245);
INSERT INTO "users" ("id","username","score") VALUES (22,'tclaricoatsl',6856);
INSERT INTO "users" ("id","username","score") VALUES (23,'lcloym',7764);
INSERT INTO "users" ("id","username","score") VALUES (24,'rrothchildn',5242);
INSERT INTO "users" ("id","username","score") VALUES (25,'rbrecknocko',6663);
INSERT INTO "users" ("id","username","score") VALUES (26,'clambillionp',5120);
INSERT INTO "users" ("id","username","score") VALUES (27,'syablsleyq',7841);
INSERT INTO "users" ("id","username","score") VALUES (28,'jhuper',453);
INSERT INTO "users" ("id","username","score") VALUES (29,'amiddiss',1473);
INSERT INTO "users" ("id","username","score") VALUES (30,'speasgoodt',8329);
INSERT INTO "users" ("id","username","score") VALUES (31,'celgaru',7390);
INSERT INTO "users" ("id","username","score") VALUES (32,'sbaskwellv',8840);
INSERT INTO "users" ("id","username","score") VALUES (33,'rhollingsbyw',242);
INSERT INTO "users" ("id","username","score") VALUES (34,'cbritnellx',8227);
INSERT INTO "users" ("id","username","score") VALUES (35,'bgheeraerty',8012);
INSERT INTO "users" ("id","username","score") VALUES (36,'rohanlonz',6006);
INSERT INTO "users" ("id","username","score") VALUES (37,'khaill10',8442);
INSERT INTO "users" ("id","username","score") VALUES (38,'mludlem11',8043);
INSERT INTO "users" ("id","username","score") VALUES (39,'lbudnik12',2403);
INSERT INTO "users" ("id","username","score") VALUES (40,'edeek13',6184);
INSERT INTO "users" ("id","username","score") VALUES (41,'pyearsley14',4341);
INSERT INTO "users" ("id","username","score") VALUES (42,'bdevinn15',1565);
INSERT INTO "users" ("id","username","score") VALUES (43,'kbushell16',7392);
INSERT INTO "users" ("id","username","score") VALUES (44,'bcringle17',66);
INSERT INTO "users" ("id","username","score") VALUES (45,'gmccaskill18',4238);
INSERT INTO "users" ("id","username","score") VALUES (46,'bhaseley19',4355);
INSERT INTO "users" ("id","username","score") VALUES (47,'hfarryan1a',4374);
INSERT INTO "users" ("id","username","score") VALUES (48,'astannion1b',9720);
INSERT INTO "users" ("id","username","score") VALUES (49,'hbiscomb1c',3053);
INSERT INTO "users" ("id","username","score") VALUES (50,'msirl1d',814);
COMMIT;
