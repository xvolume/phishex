package com.phishex.dao;

import com.phishex.entity.Entity;

import java.util.List;

public abstract class AbstractDao<T extends Entity> {
    public abstract List<T> findAll();

    public abstract T findById(int id);

    public abstract T findBySite(String site);

    public abstract boolean insert(T entity);

    public abstract boolean update(T entity);

    public abstract boolean delete(T entity);

    public abstract boolean delete(int id);
}