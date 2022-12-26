package com.Project.sacrttest.controller;
import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.Project.sacrttest.dao.ConnectDatabase;
import com.Project.sacrttest.model.Stop;

@Controller
@CrossOrigin("*")
public class SacController {
	// This is the main controller of our project which handles the request coming from our React application
	ConnectDatabase db = new ConnectDatabase();
	

	@Autowired
	Stop s;
	
	@Autowired
	ConnectDatabase connection;
	
		
	@RequestMapping("{key}") // It maps the stopId here from the React Application and sends the response which is stored in a list 
	@ResponseBody
	public List<Stop> getValue(@PathVariable String key) { 
		List<Stop> value = connection.getValue(key);
		return value;
	}
	
	@RequestMapping("/create") // It maps the create table request
	public void createTable() {
		db.createTable();
	}
	
	@RequestMapping("/insert") // It maps the insert into table request 
	public void insert() {
	
		try {
			db.insertTable();
		} catch (IOException e) {
			
			e.printStackTrace();
		}
	}	
}

	
