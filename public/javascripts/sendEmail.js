$('#SendButton').click(function(e) {
 /* e.preventDefault(); */
  $.ajax({
    type: 'POST',
    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    data: {
      'key': '9984cd1a4506dc377be8f917e77898f4-us20',
      'message': {
        'from_email': 'karolw101@gmail.com',
        'to': [
            {
              'email': 'karolw101@gmail.com',
              'name': 'RECIPIENT NAME (OPTIONAL)',
              'type': 'to'
            }
          ],
        'autotext': 'true',
        'subject': 'YOUR SUBJECT HERE!',
        'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
      }
    }
   }).done(function(response) {
     console.log(response); // if you're into that sorta thing
   });
});