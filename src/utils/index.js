export const dateFormater=(date)=>{
    let farmatedDate= new Date(date).toDateString().slice(4, 15)
 let time=new Date(date).toLocaleTimeString('en-US', {hour12:false,hour:'numeric',minute:'numeric'} )
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  if (time.length > 1) { 
    time = time.slice (1);  
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; 
  }
  return `${farmatedDate}  ${time.join ('')}`; // return adjusted time or original string

}