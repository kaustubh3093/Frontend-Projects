

var rupeesArray = ["Rs. 5000", "Rs. 10000", "Rs. 15000", "Rs. 8000", "Rs. 9000" ];
var usdArray = ["$ 74.67", "$ 149.2", "$ 222.8", "$ 119.47", "$ 127.47" ];
var yuanArray = ["Y 500", "Y 1000", "Y 1500", "Y 800", "Y 900" ];
var poundArray = ["E 57.35", "E 114.7", "E 172.05", "E 91.76", "E 103.22" ];

function mainMsg(e)
{
  switch(e.data)
  {
    case "Rupees":
     self.postMessage(rupeesArray);
     break;
    case "USD":
      self.postMessage(usdArray);
      break;
	  
	  case "Yuan":
      self.postMessage(yuanArray);
      break;
	  
	  case "Pound":
      self.postMessage(poundArray);
      break;
  }  

}

function errorHandler(e)
{
  console.log(e.message,e);
}

self.addEventListener("message",mainMsg,true);
self.addEventListener("error",errorHandler,true);