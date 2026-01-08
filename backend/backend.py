import mysql.connector

import User

# host: 35.188.45.52
def connect_mysql():
    connector = mysql.connector.connect(
        host="35.188.45.52",
        port="3306",
        user="root",
        database="Main",
    )

    return connector


# Create
def create_table():
    pass

# Read
def query_data():
    pass

# Update
def update_data(table, attribute, new_data, condition):
    if condition != "":
        condition = " WHERE " + condition

    query = "UPDATE" + table + " SET " + attribute + " = " + new_data + condition

    connector = connect_mysql()
    cursor = connector.cursor()

    cursor.execute(query)
    print("Finished updating!")
    print(cursor.rowcount + " rows was affected.")

    cursor.close()
    connector.commit()


# Delete
def delete_data(table, condition):
    if condition != "":
        condition = " WHERE " + condition

    query = "DELETE FROM " + table + condition

    connector = connect_mysql()
    cursor = connector.cursor()

    cursor.execute(query)
    print("Finished deleting!")
    print(cursor.rowcount + " rows was affected.")

    cursor.close()
    connector.commit()


if __name__ == '__main__':
    update_data()
