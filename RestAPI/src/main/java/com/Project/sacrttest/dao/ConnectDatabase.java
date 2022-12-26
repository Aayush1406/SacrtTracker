package com.Project.sacrttest.dao;
import java.io.IOException;
import java.nio.file.Paths;
import java.sql.Time;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import org.json.JSONException;
import org.springframework.stereotype.Repository;
import com.Project.sacrttest.model.Stop;
import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.cql.ResultSet;
import com.datastax.oss.driver.api.core.cql.Row;

@Repository
public class ConnectDatabase {
// This class contains the connection logic for Datastax Astra DB and CRUD operations.
	CqlSession session = null;
	Stop s = new Stop();

	public void connect() {
		session = CqlSession.builder()
				.withCloudSecureConnectBundle(
						Paths.get("C:/Users/aayus/OneDrive/Desktop/SpringBoot/secure-connect-aayush.zip"))
				.withAuthCredentials("iUSONfUPPlvEyDTCbuYNLyXI",
						"09eeHjl3TlCNZY_Ls+gUwHzTgkfC_6URK.eZUJZFn7WhAmBDEBFLuInTbpTg3a2zjcxCqbf_zte4cJBO_mRjXtQOP7yriDKN8bRZOtk5d3qlDEmMvBtBM9swrJmmDu1E")
				.build();
	}

	public List<Stop> getValue(String key) {
		List <Stop> ls = new ArrayList<Stop>();
		if (session == null)
			connect();
		System.out.println("Key = " + key);
		ResultSet rs = session.execute("select * from sacrt.sacrtdata where stopid ="+key+" and arrivaltime>'"+LocalTime.now()+"' ");
		System.out.println("result set" + rs);
		List<Row> row = rs.all();
		if (row != null) {
			for (Row row2 : row) {
				try {
				
					Stop s = new Stop();
					int stopid = row2.getInt("stopid");
					String stopname = row2.getString("stopname");
					int route = row2.getInt("route");
				
					String tripheads = row2.getString("tripheads");
					Time arrivaltime = Time.valueOf(row2.getLocalTime("arrivaltime"));
					s.setStopid(stopid);
					s.setArrivaltime(arrivaltime);
					s.getOnstreet();
					s.setRoute(route);
					s.setStopname(stopname);
					s.setTripheads(tripheads);
					ls.add(s);	
				} catch (JSONException err) {

			}
		}
			return ls;

		} else {
			return null;
		}
	}

	public void createTable() {
		if (session == null)
			connect();
		session.execute(
				"create table sacrt.sacrtdata (stopname text,stopid int, arrivaltime time, route int, tripheads text, primary key(stopid,arrivaltime))");
	}

	public void insertTable() throws IOException {

		if (session == null)
			connect();
		s.load();
		List<Stop> ls = s.getList();
		for (int i = 0; i < ls.size(); i++) {

			session.execute(
					"insert into sacrt.sacrtdata (stopid,arrivaltime,route,stopname,tripheads) values ("+ls.get(i).getStopid()+" , '"+ls.get(i).getArrivaltime()+"' , "+ls.get(i).getRoute()+" , '"+ls.get(i).getStopname()+"' , '" + ls.get(i).getTripheads() + "');");

		}
	}

}
