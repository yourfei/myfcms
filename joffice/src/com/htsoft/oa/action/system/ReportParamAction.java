package com.htsoft.oa.action.system;

import java.lang.reflect.Type;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.htsoft.core.web.action.BaseAction;
import com.htsoft.oa.model.system.ReportParam;
import com.htsoft.oa.service.system.ReportParamService;

public class ReportParamAction extends BaseAction {

	@Resource
	private ReportParamService reportParamService;
	private ReportParam reportParam;
	private Long paramId;

	public Long getParamId() {
		return this.paramId;
	}

	public void setParamId(Long paramId) {
		this.paramId = paramId;
	}

	public ReportParam getReportParam() {
		return this.reportParam;
	}

	public void setReportParam(ReportParam reportParam) {
		this.reportParam = reportParam;
	}

	public String list() {
		String strReportId = getRequest().getParameter("reportId");
		if (StringUtils.isNotEmpty(strReportId)) {
			List<ReportParam> list = this.reportParamService.findByRepTemp(new Long(strReportId));

			Type type = new TypeToken<List<ReportParam>>() {
			}.getType();
			StringBuffer buff = new StringBuffer("{success:true,").append("result:");
			Gson gson = new Gson();
			buff.append(gson.toJson(list, type));
			buff.append("}");
			this.jsonString = buff.toString();
		}

		return "success";
	}

	public String multiDel() {
		String[] ids = getRequest().getParameterValues("ids");
		if (ids != null) {
			for (String id : ids) {
				this.reportParamService.remove(new Long(id));
			}
		}

		this.jsonString = "{success:true}";

		return "success";
	}

	public String get() {
		ReportParam reportParam = (ReportParam) this.reportParamService.get(this.paramId);

		Gson gson = new Gson();

		StringBuffer sb = new StringBuffer("{success:true,data:");
		sb.append(gson.toJson(reportParam));
		sb.append("}");
		setJsonString(sb.toString());

		return "success";
	}

	public String save() {
		this.reportParamService.save(this.reportParam);
		setJsonString("{success:true}");
		return "success";
	}
}


 
 
 
 
 