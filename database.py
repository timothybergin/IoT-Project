# Step 1: Create a Database for Sensor Data
import sqlite3
conn = sqlite3.connect('database.db')
c = conn.cursor()
sql = """DROP TABLE IF EXISTS readings; CREATE TABLE readings (sound integer, humidity integer, Temperature integer);"""
c.executescript(sql)
conn.commit()
conn.close()
