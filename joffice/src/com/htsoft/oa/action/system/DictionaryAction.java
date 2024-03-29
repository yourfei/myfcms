package com.htsoft.oa.action.system;

import java.lang.reflect.Type;
import java.util.List;

import javax.annotation.Resource;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.htsoft.core.command.QueryFilter;
import com.htsoft.core.web.action.BaseAction;
import com.htsoft.oa.model.system.Dictionary;
import com.htsoft.oa.service.system.DictionaryService;

public class DictionaryAction extends BaseAction {

	@Resource
	private DictionaryService dictionaryService;
	private Dictionary dictionary;
	private Long dicId;
	private String itemName;

	public String getItemName() {
		return this.itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public Long getDicId() {
		return this.dicId;
	}

	public void setDicId(Long dicId) {
		this.dicId = dicId;
	}

	public Dictionary getDictionary() {
		return this.dictionary;
	}

	public void setDictionary(Dictionary dictionary) {
		this.dictionary = dictionary;
	}

	public String list() {
		QueryFilter filter = new QueryFilter(getRequest());
		List<Dictionary> list = this.dictionaryService.getAll(filter);

		Type type = new TypeToken<List<Dictionary>>() {
		}.getType();
		StringBuffer buff = new StringBuffer("{success:true,'totalCounts':").append(
				filter.getPagingBean().getTotalItems()).append(",result:");

		Gson gson = new Gson();
		buff.append(gson.toJson(list, type));
		buff.append("}");

		this.jsonString = buff.toString();

		return "success";
	}

	public String load() {
		List<String> list = this.dictionaryService.getAllByItemName(this.itemName);
		StringBuffer buff = new StringBuffer("[");
		for (String itemName : list) {
			buff.append("'").append(itemName).append("',");
		}
		if (list.size() > 0) {
			buff.deleteCharAt(buff.length() - 1);
		}
		buff.append("]");
		setJsonString(buff.toString());
		return "success";
	}

	public String multiDel() {
		String[] ids = getRequest().getParameterValues("ids");
		if (ids != null) {
			for (String id : ids) {
				this.dictionaryService.remove(new Long(id));
			}
		}

		this.jsonString = "{success:true}";

		return "success";
	}

	public String get() {
		Dictionary dictionary = (Dictionary) this.dictionaryService.get(this.dicId);

		Gson gson = new Gson();

		StringBuffer sb = new StringBuffer("{success:true,data:");
		sb.append(gson.toJson(dictionary));
		sb.append("}");
		setJsonString(sb.toString());

		return "success";
	}

	public String save() {
		this.dictionaryService.save(this.dictionary);
		setJsonString("{success:true}");
		return "success";
	}

	public String items() {
		List<String> list = this.dictionaryService.getAllItems();
		StringBuffer buff = new StringBuffer("[");
		for (String str : list) {
			buff.append("'").append(str).append("',");
		}
		if (list.size() > 0) {
			buff.deleteCharAt(buff.length() - 1);
		}
		buff.append("]");
		setJsonString(buff.toString());
		return "success";
	}
}


 
 
 
 
 