package com.ttcdemo.models;

public class EmployeeModel {
	
	/*
	 * {
    "fullname":"chourabi taher",   setFullname()
    "email":"tchourabi@gmail.com",
    "phone":"88552233"
}
	 * */
	
	
	private String fullname;
	private String email;
	private String phone;
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	
	public EmployeeModel() {}
	
	
	
	
	

}
