package edu.iastate.locampus.jdbc;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;
import java.util.Scanner;

public class JDBCTest {

    private static Connection conn;
    private static Statement stmt;
    private static Properties props;

    public static void main(String[] args) {
        props = new Properties();
        InputStream is = null;

        try {
            is = new FileInputStream("database.config");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        try {
            props.load(is);
        } catch (IOException e) {
            e.printStackTrace();
        }

        connect();

        Scanner sc = new Scanner(System.in);

        while (true) {
            String line = sc.nextLine();
            if (line.equals("create_test")) {
                createTable();
            } else if (line.equals("insert_test")) {
                insertExample();
            }
        }
    }

    private static void connect() {
        try {
            if (conn != null && !conn.isClosed() && stmt != null) {
                return;
            }

            conn = DriverManager.getConnection("jdbc:mysql://" + props.getProperty("database.ip") + ":" +
                            props.getProperty("database.port") + "/" + props.getProperty("database.name") + "?serverTimezone=UTC",
                    props.getProperty("database.user"), props.getProperty("database.pass"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        try {
            stmt = conn.createStatement();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void disconnect() {
        try {
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void createTable() {
        String query = "CREATE TABLE IF NOT EXISTS `Colleges` (" +
                "`id` CHAR(36) PRIMARY KEY NOT NULL, " +
                "`name` CHAR(50) NOT NULL, " +
                "`num_students` INT)";

        try {
            stmt.execute(query);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void insertExample() {
        String query = "INSERT INTO `Colleges` (`id`, `name`, `num_students`) VALUES (" +
                "'12a787d6-ebce-11ea-adc1-0242ac120002', 'Iowa State University', 36321);";

        try {
            stmt.execute(query);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}