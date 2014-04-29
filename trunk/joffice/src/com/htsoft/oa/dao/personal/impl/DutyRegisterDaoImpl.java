package com.htsoft.oa.dao.personal.impl;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import com.htsoft.core.dao.impl.BaseDaoImpl;
import com.htsoft.core.util.DateUtil;
import com.htsoft.oa.dao.personal.DutyRegisterDao;
import com.htsoft.oa.model.personal.DutyRegister;

public class DutyRegisterDaoImpl extends BaseDaoImpl<DutyRegister> implements DutyRegisterDao {
	public DutyRegisterDaoImpl() {
		super(DutyRegister.class);
	}

	public DutyRegister getTodayUserRegister(Long userId, Short inOffFlag, Long sectionId) {
		String hql = "from DutyRegister dr where dr.appUser.userId=? and dr.registerDate>=? and dr.registerDate<=? and dr.inOffFlag=? and dr.dutySection.sectionId=?";
		Calendar cal = Calendar.getInstance();
		Date startTime = DateUtil.setStartDay(cal).getTime();
		Date endTime = DateUtil.setEndDay(cal).getTime();
		List list = findByHql(hql,
				new Object[] { userId, startTime, endTime, inOffFlag, sectionId });

		if (list.size() > 0) {
			return (DutyRegister) list.get(0);
		}

		return null;
	}
}


 
 
 
 
 