/**
 * <p>��Ŀ���ƣ�</p>
 * <p>��Ȩ���� (c) </p>
 * <p>�汾��1.0</p>
 * <p>���ڣ�Mar 26, 2010</p>
 * <p>���£�</p>
 */
package web;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.zkoss.zul.Textbox;

import com.hxzy.base.util.Pagination;
import com.hxzy.common.user.model.User;
import com.hxzy.common.user.service.UserService;

/**
 * @author xiacc
 *
 * ������
 */
public class UserWindow extends BaseWindow {
	
	@Autowired
	private UserService userService;
	
	private Textbox search;

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
	

	/* (non-Javadoc)
	 * @see web.BaseWindow#find(java.lang.String, java.lang.String, java.lang.Object[])
	 */
	@Override
	public void onFind() {
		DetachedCriteria detachedCriteria = DetachedCriteria.forClass(User.class);

		if(StringUtils.hasText(search.getValue())){
			detachedCriteria.add(
					Restrictions.or(
							Restrictions.like("name",search.getValue(),MatchMode.ANYWHERE),
							Restrictions.like("code",search.getValue(),MatchMode.ANYWHERE)
					));
			
			detachedCriteria.add(
					Restrictions.or(
							Restrictions.like("password",search.getValue(),MatchMode.ANYWHERE),
							Restrictions.like("code",search.getValue(),MatchMode.ANYWHERE)
					));
		}
		Pagination pagination = userService.findPageByCriteria(detachedCriteria, pg.getPageSize(), pg.getActivePage()+1);
		pg.setTotalSize(pagination.getTotalCount());
		this.list = pagination;		
		binder.loadComponent(listbox);
		
	}
	
	

}