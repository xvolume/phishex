package com.phishex.entity;

public class Credentials extends Entity {
    private String site;
    private String data;
    private Integer sysInfoId;

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public Integer getSysInfoId() {
        return sysInfoId;
    }

    public void setSysInfoId(Integer sysInfoId) {
        this.sysInfoId = sysInfoId;
    }
}
