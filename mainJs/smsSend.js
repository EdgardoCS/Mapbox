sendArray = [];
exports.man = function(result) {
  var text = result;
  var zmq = require('zmq'),
    sock = zmq.socket('req');

  for (i = 0; i < text.length; i++) {
    setPersonas(text[i].id, text[i].sms);
    sendArray[i] = setPersonas(text[i].id, text[i].sms)
  }
  var key = "header";
  sendArray.unshift({
    [key]: text.length
  });
  sock.connect('tcp://10.140.25.184:3000')
  console.log('Sending to port 3000');

  sock.on('message', function(msg) {
    console.log('got reply', msg.toString());
  });
  var stringObject = JSON.stringify(sendArray);
  sock.send(stringObject);
  console.log('data sended');
}

setPersonas = function(id, sms) {
  var pointPersonas;
  pointPersonas = {
    "type": "Feature",
    "properties": {
      "usuario": id,
      "mensaje": sms,
    }
  }
  return pointPersonas;
};
