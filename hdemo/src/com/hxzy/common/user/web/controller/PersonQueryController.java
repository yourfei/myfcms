/**
 * <p>��Ŀ���ƣ�����ģ��</p>
 * <p>��Ȩ���� (c) 2005 ����ȫ����Ϣ�Ƽ����޹�˾</p>
 * <p>���ߣ�</p>
 * <p>�汾��1.0</p>
 * <p>���ڣ�2007-9-3</p>
 * <p>���£�2007-9-4:���Ӳ�ѯ�������ַ�����ʽ����ȥ�ո��жϰٷֺţ�</p>
 */
package com.hxzy.common.user.web.controller;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.validation.BindException;
import org.springframework.web.servlet.ModelAndView;

import com.hxzy.base.util.Pagination;
import com.hxzy.base.util.StringUtil;
import com.hxzy.base.web.controller.BaseCommandController;
import com.hxzy.common.user.model.User;
import com.hxzy.common.user.service.UserService;

/**
 * <p>
 * ����: PersonQueryController
 * </p>
 * <p>
 * ����: ��Ա��ѯController��
 * </p>
 */
public class PersonQueryController extends BaseCommandController {

	/**
	 * ����: ��ԱManager
	 */
	private UserService userService;

	/**
	 * ����: �����ֵ�Manager
	 */
//	private DictionaryManager dictionaryManager;

	/*
	 * @see com.quanda.common.web.controller.BaseCommandController#handle(javax.servlet.http.HttpServletRequest,
	 *      javax.servlet.http.HttpServletResponse, java.lang.Object,
	 *      org.springframework.validation.BindException)
	 */
	protected ModelAndView handle(HttpServletRequest request,
			HttpServletResponse response, Object o, BindException errors)
			throws Exception {
		PersonQueryForm form = (PersonQueryForm) o;
		HashMap map = new HashMap();
		// �γɲ�ѯ�������ݣ��Ա��ڴ���������ʾ
		map.put("formInfo", form);
		// �γɲ�ѯ�������ݣ��Դ���Service������в�ѯ�����������������Map�Ա���ҳ����ʾ
		DetachedCriteria detachedCriteria = DetachedCriteria.forClass(User.class);
		
		if (form.getName() != null && !"".equals(form.getName().trim())) {
			String name = StringUtil.formatQueryStr(form.getName());
			detachedCriteria.add(Restrictions.eq("name", name));
		}
		if (form.getCode() != null && !"".equals(form.getCode().trim())) {
			String code = StringUtil.formatQueryStr(form.getCode());
			detachedCriteria.add(Restrictions.eq("code", code));
		}

		int pageNo = StringUtil.String2Int(form.getPageNo());
		int pageSize = StringUtil.String2Int(form.getRecPerPage());
		
		Pagination pagination = userService.findPageByCriteria(detachedCriteria, pageSize, pageNo);

		// ���в�ѯ���������������Map�Ա���ҳ����ʾ
		map.put("pagination", pagination);

		return new ModelAndView("common/person/personQuery", map);
	}

	/**
	 * ���� userService
	 */
	public UserService getUserService() {
		return userService;
	}

	/**
	 * ���� userService
	 */
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	


	
}