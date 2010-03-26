/**
 * <p>项目名称：公共模块</p>
 * <p>版权所有 (c) 2005 湖北全达信息科技有限公司</p>
 * <p>作者：</p>
 * <p>版本：1.0</p>
 * <p>日期：2005-12-3</p>
 * <p>更新：</p>
 */
package com.hxzy.common.log.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.hxzy.common.user.model.User;

/**
 * <p>
 * 类名: Log
 * </p>
 * <p>
 * 描述: 系统日志类
 * </p>
 */
@Entity
@Table(name = "log")
public class Log implements Serializable {

    /**
     * 描述: 记录ID
     */
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private Long recordId;

    /**
     * 描述: 操作用户
     */
	@OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE})
	@PrimaryKeyJoinColumn
    private User user;

    /**
     * 描述: 操作时间
     */
    private Date logTime = new Date();

    /**
     * 描述: 操作对象
     */
    private String logObject;

    /**
     * 描述: 操作：删除，修改，新增，登陆，登出等
     */
    private String logAction;

    /**
     * 描述: 详细信息
     */
    private String detail;

    /**
     * 描述: 返回 detail
     */
    public String getDetail() {
        return detail;
    }

    /**
     * 描述: 设置 detail
     */
    public void setDetail(String detail) {
        this.detail = detail;
    }

    /**
     * 描述: 返回 logAction
     */
    public String getLogAction() {
        return logAction;
    }

    /**
     * 描述: 设置 logAction
     */
    public void setLogAction(String logAction) {
        this.logAction = logAction;
    }

    /**
     * 描述: 返回 logObject
     */
    public String getLogObject() {
        return logObject;
    }

    /**
     * 描述: 设置 logObject
     */
    public void setLogObject(String logObject) {
        this.logObject = logObject;
    }

    /**
     * 描述: 返回 logTime
     */
    public Date getLogTime() {
        return logTime;
    }

    /**
     * 描述: 设置 logTime
     */
    public void setLogTime(Date logTime) {
        this.logTime = logTime;
    }

    /**
     * 描述: 返回 recordId
     */
    public Long getRecordId() {
        return recordId;
    }

    /**
     * 描述: 设置 recordId
     */
    public void setRecordId(Long recordId) {
        this.recordId = recordId;
    }

    /**
	 * 返回 user
	 */
	public User getUser() {
		return user;
	}

	/**
	 * 设置 user
	 */
	public void setUser(User user) {
		this.user = user;
	}

}