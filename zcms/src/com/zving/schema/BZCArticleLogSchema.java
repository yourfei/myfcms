 package com.zving.schema;
 
 import com.zving.framework.data.QueryBuilder;
 import com.zving.framework.orm.Schema;
 import com.zving.framework.orm.SchemaColumn;
 import com.zving.framework.orm.SchemaSet;
 import java.util.Date;
 
 public class BZCArticleLogSchema extends Schema
 {
   private Long ID;
   private Long ArticleID;
   private String Action;
   private String ActionDetail;
   private String Prop1;
   private String Prop2;
   private String Prop3;
   private String Prop4;
   private String AddUser;
   private Date AddTime;
   private String BackupNo;
   private String BackupOperator;
   private Date BackupTime;
   private String BackupMemo;
   public static final SchemaColumn[] _Columns = { 
     new SchemaColumn("ID", 7, 0, 0, 0, true, true), 
     new SchemaColumn("ArticleID", 7, 1, 0, 0, true, false), 
     new SchemaColumn("Action", 1, 2, 200, 0, true, false), 
     new SchemaColumn("ActionDetail", 1, 3, 200, 0, false, false), 
     new SchemaColumn("Prop1", 1, 4, 50, 0, false, false), 
     new SchemaColumn("Prop2", 1, 5, 50, 0, false, false), 
     new SchemaColumn("Prop3", 1, 6, 50, 0, false, false), 
     new SchemaColumn("Prop4", 1, 7, 50, 0, false, false), 
     new SchemaColumn("AddUser", 1, 8, 200, 0, true, false), 
     new SchemaColumn("AddTime", 0, 9, 0, 0, true, false), 
     new SchemaColumn("BackupNo", 1, 10, 15, 0, true, true), 
     new SchemaColumn("BackupOperator", 1, 11, 200, 0, true, false), 
     new SchemaColumn("BackupTime", 0, 12, 0, 0, true, false), 
     new SchemaColumn("BackupMemo", 1, 13, 50, 0, false, false) };
   public static final String _TableCode = "BZCArticleLog";
   public static final String _NameSpace = "com.zving.schema";
   protected static final String _InsertAllSQL = "insert into BZCArticleLog values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
   protected static final String _UpdateAllSQL = "update BZCArticleLog set ID=?,ArticleID=?,Action=?,ActionDetail=?,Prop1=?,Prop2=?,Prop3=?,Prop4=?,AddUser=?,AddTime=?,BackupNo=?,BackupOperator=?,BackupTime=?,BackupMemo=? where ID=? and BackupNo=?";
   protected static final String _DeleteSQL = "delete from BZCArticleLog  where ID=? and BackupNo=?";
   protected static final String _FillAllSQL = "select * from BZCArticleLog  where ID=? and BackupNo=?";
 
   public BZCArticleLogSchema()
   {
     this.TableCode = "BZCArticleLog";
     this.NameSpace = "com.zving.schema";
     this.Columns = _Columns;
     this.InsertAllSQL = "insert into BZCArticleLog values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
     this.UpdateAllSQL = "update BZCArticleLog set ID=?,ArticleID=?,Action=?,ActionDetail=?,Prop1=?,Prop2=?,Prop3=?,Prop4=?,AddUser=?,AddTime=?,BackupNo=?,BackupOperator=?,BackupTime=?,BackupMemo=? where ID=? and BackupNo=?";
     this.DeleteSQL = "delete from BZCArticleLog  where ID=? and BackupNo=?";
     this.FillAllSQL = "select * from BZCArticleLog  where ID=? and BackupNo=?";
     this.HasSetFlag = new boolean[14];
   }
 
   protected Schema newInstance() {
     return new BZCArticleLogSchema();
   }
 
   protected SchemaSet newSet() {
     return new BZCArticleLogSet();
   }
 
   public BZCArticleLogSet query() {
     return query(null, -1, -1);
   }
 
   public BZCArticleLogSet query(QueryBuilder qb) {
     return query(qb, -1, -1);
   }
 
   public BZCArticleLogSet query(int pageSize, int pageIndex) {
     return query(null, pageSize, pageIndex);
   }
 
   public BZCArticleLogSet query(QueryBuilder qb, int pageSize, int pageIndex) {
     return ((BZCArticleLogSet)querySet(qb, pageSize, pageIndex));
   }
 
   public void setV(int i, Object v) {
     if (i == 0) { if (v == null) this.ID = null; else this.ID = new Long(v.toString()); return; }
     if (i == 1) { if (v == null) this.ArticleID = null; else this.ArticleID = new Long(v.toString()); return; }
     if (i == 2) { this.Action = ((String)v); return; }
     if (i == 3) { this.ActionDetail = ((String)v); return; }
     if (i == 4) { this.Prop1 = ((String)v); return; }
     if (i == 5) { this.Prop2 = ((String)v); return; }
     if (i == 6) { this.Prop3 = ((String)v); return; }
     if (i == 7) { this.Prop4 = ((String)v); return; }
     if (i == 8) { this.AddUser = ((String)v); return; }
     if (i == 9) { this.AddTime = ((Date)v); return; }
     if (i == 10) { this.BackupNo = ((String)v); return; }
     if (i == 11) { this.BackupOperator = ((String)v); return; }
     if (i == 12) { this.BackupTime = ((Date)v); return; }
     if (i != 13) return; this.BackupMemo = ((String)v); return;
   }
 
   public Object getV(int i) {
     if (i == 0) return this.ID;
     if (i == 1) return this.ArticleID;
     if (i == 2) return this.Action;
     if (i == 3) return this.ActionDetail;
     if (i == 4) return this.Prop1;
     if (i == 5) return this.Prop2;
     if (i == 6) return this.Prop3;
     if (i == 7) return this.Prop4;
     if (i == 8) return this.AddUser;
     if (i == 9) return this.AddTime;
     if (i == 10) return this.BackupNo;
     if (i == 11) return this.BackupOperator;
     if (i == 12) return this.BackupTime;
     if (i == 13) return this.BackupMemo;
     return null;
   }
 
   public long getID()
   {
     if (this.ID == null) return 0L;
     return this.ID.longValue();
   }
 
   public void setID(long iD)
   {
     this.ID = new Long(iD);
   }
 
   public void setID(String iD)
   {
     if (iD == null) {
       this.ID = null;
       return;
     }
     this.ID = new Long(iD);
   }
 
   public long getArticleID()
   {
     if (this.ArticleID == null) return 0L;
     return this.ArticleID.longValue();
   }
 
   public void setArticleID(long articleID)
   {
     this.ArticleID = new Long(articleID);
   }
 
   public void setArticleID(String articleID)
   {
     if (articleID == null) {
       this.ArticleID = null;
       return;
     }
     this.ArticleID = new Long(articleID);
   }
 
   public String getAction()
   {
     return this.Action;
   }
 
   public void setAction(String action)
   {
     this.Action = action;
   }
 
   public String getActionDetail()
   {
     return this.ActionDetail;
   }
 
   public void setActionDetail(String actionDetail)
   {
     this.ActionDetail = actionDetail;
   }
 
   public String getProp1()
   {
     return this.Prop1;
   }
 
   public void setProp1(String prop1)
   {
     this.Prop1 = prop1;
   }
 
   public String getProp2()
   {
     return this.Prop2;
   }
 
   public void setProp2(String prop2)
   {
     this.Prop2 = prop2;
   }
 
   public String getProp3()
   {
     return this.Prop3;
   }
 
   public void setProp3(String prop3)
   {
     this.Prop3 = prop3;
   }
 
   public String getProp4()
   {
     return this.Prop4;
   }
 
   public void setProp4(String prop4)
   {
     this.Prop4 = prop4;
   }
 
   public String getAddUser()
   {
     return this.AddUser;
   }
 
   public void setAddUser(String addUser)
   {
     this.AddUser = addUser;
   }
 
   public Date getAddTime()
   {
     return this.AddTime;
   }
 
   public void setAddTime(Date addTime)
   {
     this.AddTime = addTime;
   }
 
   public String getBackupNo()
   {
     return this.BackupNo;
   }
 
   public void setBackupNo(String backupNo)
   {
     this.BackupNo = backupNo;
   }
 
   public String getBackupOperator()
   {
     return this.BackupOperator;
   }
 
   public void setBackupOperator(String backupOperator)
   {
     this.BackupOperator = backupOperator;
   }
 
   public Date getBackupTime()
   {
     return this.BackupTime;
   }
 
   public void setBackupTime(Date backupTime)
   {
     this.BackupTime = backupTime;
   }
 
   public String getBackupMemo()
   {
     return this.BackupMemo;
   }
 
   public void setBackupMemo(String backupMemo)
   {
     this.BackupMemo = backupMemo;
   }
 }

/* Location:           F:\JAVA\Tomcat5.5\webapps\zcms\WEB-INF\classes\
 * Qualified Name:     com.zving.schema.BZCArticleLogSchema
 * JD-Core Version:    0.5.3
 */