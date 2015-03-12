function sendFormByEmail(e) 
{ 
 //This email is eventually going to go to Resources, LiveUnit, Encoder Online and Media Streaing Teams
  
var email = ""; //put e-mail addresses to people who want to get the e-mail here
var message = "<p>A request for a live stream event has been submitted. Resources and Encoder will respond with the required information \(\NGCN & router source information, Project ID etc.\)\</p>
<p>All events streamed on cbc.ca/news site are entered on the <a href=\"\\"\ target=\"\_blank\"\>Live News Schedule</a></p>
<p>If the event is of interest to News Network, it will be listed on the daily assignment Live Note, which can be found here in iNews: CBCNews > Assignment > Today > Live Note</p>";
 var s = SpreadsheetApp.getActiveSheet();
 var columns = s.getRange(1,1,1,s.getLastColumn()).getValues()[0];    
 var subject = "";
 var username = "";
 
  message += "<table style=\"\table-layout:fixed; width:100%; border-width:1px;border-color:black;border-style:solid;border-collapse:collapse\"\><tbody>";
    for(var i in columns) 
  
     
        message +="<tr bgcolor=\"\#ffffff\"\><td style=\"\word-break:none; border: 1px solid black\"\>" + columns[i] + "</td><td style=\"\word-break:none; border: 1px solid black\"\>" + e.namedValues[columns[i]].toString() + "</td></tr>"; 
  
  //creates email subject title 
  if (columns[i] = "Title") {
     subject = "Livestream request: " + e.namedValues[columns[i]].toString();
    }
  
  //simple check to see if there's valid e-mail addresses 
   if (columns[i] = "Additional e-mail addresses") {
     var add_email = e.namedValues[columns[i]].toString();
     var split_email = add_email.split(",");
     
     if (e.namedValues[columns[i]] == null){
     }
     
     else if (e.namedValues[columns[i]].toString().indexOf("@") == -1) {
     }
     
     else {
       for (var count = 0; count < split_email.length; count++){
         if (split_email[count].indexOf("@") > 0 && split_email[count].indexOf(".") > 0)
         {      email += "," + split_email[count];
         }
         else {}
       }
     }
   }

//setting the reply-to e-mail to the correct person and check if it's a valid cbc.ca address
   if (columns[i] = "Primary Contact e-mail") {
     if (e.namedValues[columns[i]] == null){
     }
     else if (e.namedValues[columns[i]].toString().indexOf("@cbc.ca") == -1) {
     }
     else {
      username += "," + e.namedValues[columns[i]].toString();
     }
    } 

  //adding to receipent list for the form response
     if (columns[i] = "Centre and Departmental email addresses") {
      email += "," + e.namedValues[columns[i]].toString();
    }  

  
   if (columns[i] = "Username") {
      email += "," + e.namedValues[columns[i]].toString();
      username = e.namedValues[columns[i]].toString();
    }  
   
  
  message +="</tbody></table>"
  MailApp.sendEmail(email, username, subject, message); 
  
  }
