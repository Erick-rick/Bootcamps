import 'package:flutter/material.dart';

void main() {
  runApp(Hello());
}

testeButton(){
  debugPrint('Clicou');
}

class Hello extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Material(
        color: Colors.grey,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            Expanded(
                child: Image.asset(
                "assets/igti_logo.png",
                width: 90.0,
              )),

            Expanded(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text('Hello ', style: TextStyle(fontSize:60.0 )),
                  ),
                  Text('World!', style: TextStyle(fontSize:60.0 ))
                ],
              ),
            ),

            Expanded(
                child: Center (child: FlatButton(
                  onPressed: testeButton(),
                  color: Colors.lightBlue,
                  child: Text(
                    'Teste',
                    style: TextStyle(fontSize: 20.0),
                  ),
                )))

          ],
        ),
      ),
    );
  }
}

