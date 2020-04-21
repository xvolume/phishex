package com.phishex;

import com.phishex.dao.CredentialsDao;
import com.phishex.dao.SysInfoDao;
import com.phishex.entity.Credentials;
import com.phishex.entity.SysInfo;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class DataReader extends Thread {
    public static List<Credentials> credentials;
    public static List<SysInfo> sysInfo;

    @Override
    public void run() {
        while(true) {
            CredentialsDao credentialsDao = new CredentialsDao();
            SysInfoDao sysInfoDao = new SysInfoDao();

            credentials = credentialsDao.findAll();
            sysInfo = sysInfoDao.findAll();
            if(!credentials.isEmpty() && !sysInfo.isEmpty()){
                break;
            }
            else{
                try {
                    TimeUnit.SECONDS.sleep(5);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
