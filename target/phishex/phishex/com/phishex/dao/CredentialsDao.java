package com.phishex.dao;

import com.phishex.entity.Credentials;
import com.phishex.pool.ConnectionPool;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class CredentialsDao extends AbstractDao<Credentials> {

    private static final String SQL_SELECT_CREDENTIALS_ALL
            = "select * from public.credentials";
    private static final String SQL_INSERT_CREDENTIALS
            = "insert into public.credentials (site, data) values(?, ?)";
//    private static final String SQL_INSERT_CREDENTIALS_DATA
//            = "insert into public.credentials (data) values(?)";
    private static final String SQL_DELETE_CREDENTIALS_BY_ID
            = "delete from public.credentials where id=?";
    private static final String SQL_UPDATE_CREDENTIALS
            = "update public.credentials set site=?, data=? where id=?";
    private static final String SQL_SELECT_CREDENTIALS_BY_ID
            = "select * from public.credentials where id=?";
    private static final String SQL_SELECT_CREDENTIALS_BY_SITE
            = "select * from public.credentials where site=?";


    private Credentials setCredentialsParameters(ResultSet resultSet) throws SQLException {
        Credentials credentials = new Credentials();
        credentials.setId(resultSet.getInt("id"));
        credentials.setData(resultSet.getString("data"));
        return credentials;
    }

    @Override
    public Credentials findById(int id) {
        Credentials credentials = null;
        Connection connection = ConnectionPool.getConnectionPool().getConnection();
        try (PreparedStatement preparedStatement = connection.prepareStatement(SQL_SELECT_CREDENTIALS_BY_ID)) {
            preparedStatement.setInt(1, id);
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                while (resultSet.next()) {
                    credentials = setCredentialsParameters(resultSet);
                }
            }
        } catch (SQLException e) {
            System.out.println("Error occurred");
        } finally {
            ConnectionPool.getConnectionPool().releaseConnection(connection);
        }
        return credentials;
    }

    @Override
    public Credentials findBySite(String site) {
        Credentials credentials = null;
        Connection connection = ConnectionPool.getConnectionPool().getConnection();
        try (PreparedStatement preparedStatement = connection.prepareStatement(SQL_SELECT_CREDENTIALS_BY_SITE)) {
            preparedStatement.setString(1, site);
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                while (resultSet.next()) {
                    credentials = setCredentialsParameters(resultSet);
                }
            }
        } catch (SQLException e) {
            System.out.println("Error occurred");
        } finally {
            ConnectionPool.getConnectionPool().releaseConnection(connection);
        }
        return credentials;
    }

    @Override
    public boolean insert(Credentials entity) {
        boolean inserted = false;
        Connection connection = ConnectionPool.getConnectionPool().getConnection();
        try (PreparedStatement preparedStatement = connection.prepareStatement(SQL_INSERT_CREDENTIALS)) {
            preparedStatement.setString(1, entity.getSite());
            preparedStatement.setString(2, entity.getData());
            preparedStatement.executeUpdate();
            inserted = true;
        } catch (SQLException e) {
            System.out.println("Credentials wasn't inserted!" + e.getMessage());
        } finally {
            ConnectionPool.getConnectionPool().releaseConnection(connection);
        }
        return inserted;
    }

    @Override
    public boolean update(Credentials entity) {
        boolean updated = false;
        Connection connection = ConnectionPool.getConnectionPool().getConnection();
        try (PreparedStatement preparedStatement = connection.prepareStatement(SQL_UPDATE_CREDENTIALS)) {
            preparedStatement.setString(1, entity.getSite());
            preparedStatement.setString(2, entity.getData());
            preparedStatement.setInt(3, entity.getId());
            preparedStatement.executeUpdate();
            updated = true;
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            ConnectionPool.getConnectionPool().releaseConnection(connection);
        }
        return updated;
    }

    @Override
    public boolean delete(Credentials entity) {
        boolean deleted = false;
        Connection connection = ConnectionPool.getConnectionPool().getConnection();
        try (PreparedStatement preparedStatement = connection.prepareStatement(SQL_DELETE_CREDENTIALS_BY_ID)) {
            preparedStatement.setInt(1, entity.getId());
            preparedStatement.execute();
            deleted = true;
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            ConnectionPool.getConnectionPool().releaseConnection(connection);
        }
        return deleted;
    }

    @Override
    public boolean delete(int id) {
        boolean deleted = false;
        Connection connection = ConnectionPool.getConnectionPool().getConnection();
        try (PreparedStatement preparedStatement = connection.prepareStatement(SQL_DELETE_CREDENTIALS_BY_ID)) {
            preparedStatement.setInt(1, id);
            preparedStatement.execute();
            deleted = true;
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            ConnectionPool.getConnectionPool().releaseConnection(connection);
        }
        return deleted;
    }

    @Override
    public List<Credentials> findAll() {
        List<Credentials> credentials = new ArrayList<>();
        Connection connection = ConnectionPool.getConnectionPool().getConnection();

        try (Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(SQL_SELECT_CREDENTIALS_ALL)) {
            while (resultSet.next()) {
                Credentials credential = new Credentials();
                credential.setId(resultSet.getInt("id"));
                credential.setSite(resultSet.getString("site"));
                credential.setData(resultSet.getString("data"));
                credentials.add(credential);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            ConnectionPool.getConnectionPool().releaseConnection(connection);
        }
        return credentials;
    }

}
