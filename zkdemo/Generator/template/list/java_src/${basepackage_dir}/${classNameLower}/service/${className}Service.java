<#include "/java_copyright.include">
<#assign className = clazz.className>   
<#assign classNameLower = className?uncap_first> 
package ${basepackage}.${classNameLower}.service;

import ${basepackage}.${classNameLower}.dao.${className}Dao;
import ${basepackage}.${classNameLower}.model.${className};
import com.hxzy.base.service.BaseService;

<#include "/java_imports.include">
public interface ${className}Service extends BaseService<${className},${className}Dao> {

}
