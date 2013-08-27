/**
 * Module developed by Napp ApS
 * www.napp.dk
 * Mads Møller
 *
 * Appcelerator Titanium is Copyright (c) 2009-2010 by Appcelerator, Inc.
 * and licensed under the Apache Public License (version 2)
 */

package dk.napp.testflight;

import org.appcelerator.kroll.KrollModule;
import org.appcelerator.kroll.annotations.Kroll;

import org.appcelerator.titanium.TiApplication;
import org.appcelerator.kroll.common.Log;
import org.appcelerator.kroll.common.TiConfig;

import com.testflightapp.lib.TestFlight;


@Kroll.module(name="Napptestflightandroid", id="dk.napp.testflight")
public class NapptestflightandroidModule extends KrollModule
{
	private static final String LCAT = "NappTestFlight";
	private static final boolean DBG = TiConfig.LOGD;

	public NapptestflightandroidModule()
	{
		super();
	}

	@Kroll.onAppCreate
	public static void onAppCreate(TiApplication app)
	{
		Log.d(LCAT, "inside onAppCreate");
		
		// TODO
		// we should call takeOff() here - but we do not have the token info  :( 
	}

	// Methods
	@Kroll.method
	public void takeOff(String token)
	{
		Log.d(LCAT, "[INFO] TestFlight takeOff " + token);
		TestFlight.takeOff(this.getActivity().getApplication(), token);
	}
	
	@Kroll.method
	public void startSession()
	{
		Log.d(LCAT, "[INFO] TestFlight start session");
		TestFlight.startSession();
	}
	
	@Kroll.method
	public void endSession()
	{
		Log.d(LCAT, "[INFO] TestFlight end session");
		TestFlight.endSession();
	}
	
	@Kroll.method
	public void passCheckpoint(String checkPoint)
	{
		Log.d(LCAT, "[INFO] TestFlight Checkpoint: " + checkPoint);
		TestFlight.passCheckpoint("[INFO] TestFlight Checkpoint: " + checkPoint);
	}
	
	@Kroll.method
	public void log(String msg)
	{
		TestFlight.log("[INFO] TestFlight " + msg);
	}
}

