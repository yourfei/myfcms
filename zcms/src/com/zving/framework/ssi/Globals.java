 package com.zving.framework.ssi;
 
 public final class Globals
 {
   public static final String ALT_DD_ATTR = "org.apache.catalina.deploy.alt_dd";
   public static final String CERTIFICATES_ATTR = "javax.servlet.request.X509Certificate";
   public static final String CIPHER_SUITE_ATTR = "javax.servlet.request.cipher_suite";
   public static final String CLASS_LOADER_ATTR = "org.apache.catalina.classloader";
   public static final String DISPATCHER_TYPE_ATTR = "org.apache.catalina.core.DISPATCHER_TYPE";
   public static final String DISPATCHER_REQUEST_PATH_ATTR = "org.apache.catalina.core.DISPATCHER_REQUEST_PATH";
   public static final String RESOURCES_ATTR = "org.apache.catalina.resources";
   public static final String CLASS_PATH_ATTR = "org.apache.catalina.jsp_classpath";
   public static final String EXCEPTION_ATTR = "javax.servlet.error.exception";
   public static final String EXCEPTION_PAGE_ATTR = "javax.servlet.error.request_uri";
   public static final String EXCEPTION_TYPE_ATTR = "javax.servlet.error.exception_type";
   public static final String ERROR_MESSAGE_ATTR = "javax.servlet.error.message";
   public static final String INVOKED_ATTR = "org.apache.catalina.INVOKED";
   public static final String JSP_FILE_ATTR = "org.apache.catalina.jsp_file";
   public static final String KEY_SIZE_ATTR = "javax.servlet.request.key_size";
   public static final String SSL_SESSION_ID_ATTR = "javax.servlet.request.ssl_session";
   public static final String MBEAN_REGISTRY_ATTR = "org.apache.catalina.Registry";
   public static final String MBEAN_SERVER_ATTR = "org.apache.catalina.MBeanServer";
   public static final String NAMED_DISPATCHER_ATTR = "org.apache.catalina.NAMED";
   public static final String INCLUDE_REQUEST_URI_ATTR = "javax.servlet.include.request_uri";
   public static final String INCLUDE_CONTEXT_PATH_ATTR = "javax.servlet.include.context_path";
   public static final String INCLUDE_PATH_INFO_ATTR = "javax.servlet.include.path_info";
   public static final String INCLUDE_SERVLET_PATH_ATTR = "javax.servlet.include.servlet_path";
   public static final String INCLUDE_QUERY_STRING_ATTR = "javax.servlet.include.query_string";
   public static final String FORWARD_REQUEST_URI_ATTR = "javax.servlet.forward.request_uri";
   public static final String FORWARD_CONTEXT_PATH_ATTR = "javax.servlet.forward.context_path";
   public static final String FORWARD_PATH_INFO_ATTR = "javax.servlet.forward.path_info";
   public static final String FORWARD_SERVLET_PATH_ATTR = "javax.servlet.forward.servlet_path";
   public static final String FORWARD_QUERY_STRING_ATTR = "javax.servlet.forward.query_string";
   public static final String SERVLET_NAME_ATTR = "javax.servlet.error.servlet_name";
   public static final String SESSION_COOKIE_NAME = System.getProperty("org.apache.catalina.SESSION_COOKIE_NAME", 
     "JSESSIONID");
 
   public static final String SESSION_PARAMETER_NAME = System.getProperty("org.apache.catalina.SESSION_PARAMETER_NAME", 
     "jsessionid");
   public static final String SSI_FLAG_ATTR = "org.apache.catalina.ssi.SSIServlet";
   public static final String STATUS_CODE_ATTR = "javax.servlet.error.status_code";
   public static final String SUBJECT_ATTR = "javax.security.auth.subject";
   public static final String WELCOME_FILES_ATTR = "org.apache.catalina.WELCOME_FILES";
   public static final String WORK_DIR_ATTR = "javax.servlet.context.tempdir";
   public static final boolean STRICT_SERVLET_COMPLIANCE = Boolean.valueOf(System.getProperty("org.apache.catalina.STRICT_SERVLET_COMPLIANCE", "false")).booleanValue();
 }

/* Location:           F:\JAVA\Tomcat5.5\webapps\zcms\WEB-INF\classes\
 * Qualified Name:     com.zving.framework.ssi.Globals
 * JD-Core Version:    0.5.3
 */