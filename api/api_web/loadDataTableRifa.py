import sqlite3


try:
    sqliteConnection = sqlite3.connect('db.sqlite3')

    lst = [i for i in range(37, 100 + 1)]
    for i in lst:
        sql_query="INSERT INTO api_rifa (number, status) VALUES (%s, 'available')" % i
        cursor = sqliteConnection.cursor()
        cursor.execute(sql_query)
        sqliteConnection.commit()
        cursor.close()
        print("Successfully Connected to SQLite")

except sqlite3.Error as error:
    print("Error while creating a sqlite table", error)
finally:
    if sqliteConnection:
        sqliteConnection.close()
        print("sqlite connection is closed")
