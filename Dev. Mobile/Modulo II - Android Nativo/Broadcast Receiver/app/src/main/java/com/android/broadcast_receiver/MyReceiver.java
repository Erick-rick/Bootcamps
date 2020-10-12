package com.android.broadcast_receiver;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

public class MyReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {
        // TODO: This method is called when the BroadcastReceiver is receiving
        //Ativado quando modo Aviao e bateria fraca for ativada
        if(intent.ACTION_AIRPLANE_MODE_CHANGED.equals(intent.getAction())) {
            Toast.makeText(context, "Broadcast Recebido Airplane", Toast.LENGTH_LONG).show();
        }
        if(intent.ACTION_BATTERY_LOW.equals(intent.getAction())){
            Toast.makeText(context, "Broadcast Recebido Bateria", Toast.LENGTH_LONG).show();
        }
    }
}
