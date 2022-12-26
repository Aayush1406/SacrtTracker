package com.Project.sacrttest.model;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Time;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

// It is a simple POJO class
@Component
public class Stop {

	String stoptxt;
	int stopid;
	String stopname;
	int route;
	String atstreet;
	String onstreet;
	String tripheads;

	Time arrivaltime;
	
	public String getStoptxt() {
		return stoptxt;
	}


	public void setStoptxt(String stoptxt) {
		this.stoptxt = stoptxt;
	}


	public int getStopid() {
		return stopid;
	}


	public void setStopid(int stopid) {
		this.stopid = stopid;
	}


	public String getStopname() {
		return stopname;
	}


	public void setStopname(String stopname) {
		this.stopname = stopname;
	}


	public int getRoute() {
		return route;
	}


	public void setRoute(int route) {
		this.route = route;
	}


	public String getAtstreet() {
		return atstreet;
	}


	public void setAtstreet(String atstreet) {
		this.atstreet = atstreet;
	}


	public String getOnstreet() {
		return onstreet;
	}


	public void setOnstreet(String onstreet) {
		this.onstreet = onstreet;
	}


	public String getTripheads() {
		return tripheads;
	}


	public void setTripheads(String tripheads) {
		this.tripheads = tripheads;
	}


	public Time getArrivaltime() {
		return arrivaltime;
	}


	public void setArrivaltime(Time arrivaltime) {
		this.arrivaltime = arrivaltime;
	}
	List<Stop> ls = new ArrayList<Stop>(); 
	
	public List<Stop> getList(){
		return ls;
	}

	public void load() throws IOException { // The load method loads the csv file and store all the data in a list.
		BufferedReader br = new BufferedReader(new FileReader("C:\\Users\\aayus\\OneDrive\\Desktop\\SpringBoot\\final.csv"));
	
	    String data="";
	    
		while ((data = br.readLine()) != null) {
			String [] values = data.split(",");
		
			Stop s = new Stop();
			stopid = Integer.parseInt(values[1]);		
			s.setStopid(stopid);
			
			stopname = values[0] ;
			s.setStopname(stopname);
			
			route = Integer.parseInt(values[3]);
			s.setRoute(route);
			
			arrivaltime = Time.valueOf(values[2]);			
			s.setArrivaltime(arrivaltime);
			
			tripheads = values[4];
			s.setTripheads(tripheads);
			
			ls.add(s);
		}
		br.close();
		for(int i=0;i<ls.size();i++) {
			System.out.println("Stopid="+ls.get(i).getStopid()+"Stopname="+ls.get(i).getStopname()+"route="+ls.get(i).getRoute()+
					"arrivaltime="+ls.get(i).getArrivaltime()+"tripheads="+ls.get(i).getTripheads() );
		}
	}	
}
