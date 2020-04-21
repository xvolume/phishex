package com.phishex.dao;

import com.phishex.entity.Credentials;
import com.phishex.entity.SysInfo;
import com.phishex.pool.ConnectionPool;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class SysInfoDao extends AbstractDao<SysInfo> {

    private static final String SQL_SELECT_SYSINFO_ALL
            = "select * from public.sysinfo";
    private static final String SQL_INSERT_SYSINFO
            = "insert into public.sysinfo (ip, country, city, location, organization, postal, timezone) values(?, ?, ?, ?, ?, ?, ?)";
    private static final String SQL_DELETE_SYSINFO_BY_ID
            = "delete from public.sysinfo where id=?";
    private static final String SQL_UPDATE_SYSINFO
            = "update public.sysinfo set ip=?. country=?, city=?, location=?, organization=?, postal=?, timezone=? where id=?";
    private static final String SQL_SELECT_SYSINFO_BY_ID
            = "select * from public.sysinfo where id=?";



    private SysInfo setSysInfoParameters(ResultSet resultSet) throws SQLException {
        SysInfo sysinfo = new SysInfo();
        sysinfo.setId(resultSet.getInt("id"));
        sysinfo.setIp(resultSet.getString("ip"));
        sysinfo.setCountry(resultSet.getString("country"));
        sysinfo.setCity(resultSet.getString("city"));
        sysinfo.setLocation(resultSet.getString("location"));
        sysinfo.setOrganization(resultSet.getString("organization"));
        sysinfo.setPostal(resultSet.getString("postal"));
        sysinfo.setTimezone(resultSet.getString("timezone"));
        return sysinfo;
    }

    @Override
    public SysInfo findById(int id) {
        SysInfo sysinfo = null;
        Connection connection = ConnectionPool.getConnectionPool().getConnection();
        try (PreparedStatement preparedStatement = connection.prepareStatement(SQL_SELECT_SYSINFO_BY_ID)) {
            preparedStatement.setInt(1, id);
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                while (resultSet.next()) {
                    sysinfo = setSysInfoParameters(resultSet);
                }
            }
        } catch (SQLException e) {
            System.out.println("Error occurred");
        } finally {
            ConnectionPool.getConnectionPool().releaseConnection(connection);
        }
        return sysinfo;
    }

    @Override
    public SysInfo findBySite(String site) {
        return null;
    }

    @Override
    public boolean insert(SysInfo entity) {
        boolean inserted = false;
        Connection connection = ConnectionPool.getConnectionPool().getConnection();
        try (PreparedStatement preparedStatement = connection.prepareStatement(SQL_INSERT_SYSINFO)) {
            preparedStatement.setString(1, entity.getIp());
            preparedStatement.setString(2, entity.getCountry());
            preparedStatement.setString(3, entity.getCity());
            preparedStatement.setString(4, entity.getLocation());
            preparedStatement.setString(5, entity.getOrganization());
            preparedStatement.setString(6, entity.getPostal());
            preparedStatement.setString(7, entity.getTimezone());
            preparedStatement.executeUpdate();
            inserted = true;
        } catch (SQLException e) {
            System.out.println("Sysinfo wasn't inserted!" + e.getMessage());
        } finally {
            ConnectionPool.getConnectionPool().releaseConnection(connection);
        }
        return inserted;
    }

    @Override
    public boolean update(SysInfo entity) {
        boolean updated = false;
        Connection connection = ConnectionPool.getConnectionPool().getConnection();
        try (PreparedStatement preparedStatement = connection.prepareStatement(SQL_UPDATE_SYSINFO)) {
            preparedStatement.setString(1, entity.getIp());
            preparedStatement.setString(2, entity.getCountry());
            preparedStatement.setString(3, entity.getCity());
            preparedStatement.setString(4, entity.getLocation());
            preparedStatement.setString(5, entity.getOrganization());
            preparedStatement.setString(6, entity.getPostal());
            preparedStatement.setString(7, entity.getTimezone());
            preparedStatement.setInt(8, entity.getId());
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
    public boolean delete(SysInfo entity) {
        boolean deleted = false;
        Connection connection = ConnectionPool.getConnectionPool().getConnection();
        try (PreparedStatement preparedStatement = connection.prepareStatement(SQL_DELETE_SYSINFO_BY_ID)) {
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
        try (PreparedStatement preparedStatement = connection.prepareStatement(SQL_DELETE_SYSINFO_BY_ID)) {
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
    public List<SysInfo> findAll() {
        List<SysInfo> sysInfos = new ArrayList<>();
        Connection connection = ConnectionPool.getConnectionPool().getConnection();

        try (Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(SQL_SELECT_SYSINFO_ALL)) {
            while (resultSet.next()) {
                SysInfo sysInfo = new SysInfo();
                sysInfo.setId(resultSet.getInt("id"));
                sysInfo.setIp(resultSet.getString("ip"));
                sysInfo.setCountry(resultSet.getString("country"));
                sysInfo.setCity(resultSet.getString("city"));
                sysInfo.setLocation(resultSet.getString("location"));
                sysInfo.setOrganization(resultSet.getString("organization"));
                sysInfo.setPostal(resultSet.getString("postal"));
                sysInfo.setTimezone(resultSet.getString("timezone"));
                sysInfos.add(sysInfo);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            ConnectionPool.getConnectionPool().releaseConnection(connection);
        }
        return sysInfos;
    }
}
