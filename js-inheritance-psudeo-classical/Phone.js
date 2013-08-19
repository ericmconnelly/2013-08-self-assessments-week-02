var Phone = function(phoneNumber){
  this.phoneNumber = phoneNumber;
  this.send = function(recipientPhoneNumber, message){
    console.log('sending the message "'+ message +'" to ' + recipientPhoneNumber);
  };
};

Phone.prototype.send()

var makeSmartPhone = function(phoneNumber, phoneEmail){
  var result = new Phone(phoneNumber);
  result.phoneEmail = phoneEmail;
  var oldSend = result.send;
  this.send = function(recipientPhoneNumberOrEmail, message){
    if(typeof recipientPhoneNumberOrEmail === 'number'){
      var recipientPhoneNumber = recipientPhoneNumberOrEmail;
      oldSend(recipientPhoneNumber, message);
    } else {
      var recipientEmail = recipientPhoneNumberOrEmail;
      console.log('sending the message "'+ message +'" to ' + recipientEmail);
    }
  };
  return result;
};
