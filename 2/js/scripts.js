// Three *new* message when page loads
// Show Date
// Show Number of Messages in Inbox
// Add JavaScript to close button

var msg1 = "Promotions";
var msg2 = "Better with more stuff!";

var total = 100+4561;
$('.content p').text('Unread Messages:' + total);

$('.header').text(msg1);

$('.message .close').on('click', function() {
  $(this).closest('.message').fadeOut();
});