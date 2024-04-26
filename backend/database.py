import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv()

MYSQL_HOST=os.getenv("MYSQL_HOST")
MYSQL_PASSWORD=os.getenv("MYSQL_PASSWORD")
MYSQL_USER=os.getenv("MYSQL_USER")
MYSQL_DB=os.getenv("MYSQL_DB")



def connect():
    return mysql.connector.connect(
        host=MYSQL_HOST,
        password=MYSQL_PASSWORD,
        user=MYSQL_USER,
        db=MYSQL_DB
    )

conn=connect()
cursor=conn.cursor()


def initialize_db():
    creatTableQuery="""
        CREATE TABLE IF NOT EXISTS users(
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(30),
            role VARCHAR(15),
            emailId VARCHAR(30),
            password VARCHAR(30),
        )
    """ 

    cursor.execute(creatTableQuery)
    cursor.close()

def create_User(name,role,emailId,password):
    insertQuery="""
        INSERT INTO users(name, role, emailId, password) values(%s, %s, %s, %s, %s)
    """
    values=(name,role,emailId,password)
    
    cursor.execute(insertQuery, values)
    conn.commit()
    conn.close()
    return cursor.lastrowid