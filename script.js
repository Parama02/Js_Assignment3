function Arrangement(seat,row){
  if(seat==1 && row==0){
    return "Lower Berth"
  }else if(seat==2 && row==0){
    return "Middle Berth"
  }else if(seat==3 && row==0){
    return "Upper Berth"
  }else if(seat==7 && row==0){
    return "Side Lower Berth"
  }else if((seat==4||9) && (row==1)){
    return "Lower Berth"
  }else if((seat==5||10) && (row==1)){
    return "Middle Berth"
  }else if((seat==6||11) && (row==1)){
    return "Upper Berth"
  }else if((seat==8) && (row==1)){
    return "Side Upper Berth"
  }else if((seat==15) && (row==1)){
    return "Side Lower Berth"
  }else if((seat==12||17) && (row==2)){
    return "Lower Berth"
  }else if((seat==13||18) && (row==2)){
    return "Middle Berth"
  }else if((seat==14||19) && (row==2)){
    return "Upper Berth"
  }else if((seat==16) && (row==2)){
    return "Side Upper Berth"
  }else if((seat==23) && (row==2)){
    return "Side Lower Berth"
  }else if((seat==20||25) && (row==3)){
    return "Lower Berth"
  }else if((seat==21||26) && (row==3)){
    return "Middle Berth"
  }else if((seat==22||27) && (row==3)){
    return "Upper Berth"
  }else if((seat==24) && (row==3)){
    return "Side Upper Berth"
  }else if((seat==31) && (row==3)){
    return "Side Lower Berth"
  }else if((seat==28||33) && (row==4)){
    return "Lower Berth"
  }else if((seat==29||34) && (row==4)){
    return "Middle Berth"
  }else if((seat==30||35) && (row==4)){
    return "Upper Berth"
  }else if((seat==32) && (row==4)){
    return "Side Upper Berth"
  }else if((seat==39) && (row==4)){
    return "Side Lower Berth"
  }else if((seat==36||41) && (row==5)){
    return "Lower Berth"
  }else if((seat==37||42) && (row==5)){
    return "Middle Berth"
  }else if((seat==38||43) && (row==5)){
    return "Upper Berth"
  }else if((seat==40) && (row==5)){
    return "Side Upper Berth"
  }else if((seat==47) && (row==5)){
    return "Side Lower Berth"
  }else if((seat==44||49) && (row==6)){
    return "Lower Berth"
  }else if((seat==45||50) && (row==6)){
    return "Middle Berth"
  }else if((seat==46||51) && (row==6)){
    return "Upper Berth"
  }else if((seat==48) && (row==6)){
    return "Side Upper Berth"
  }else if((seat==55) && (row==6)){
    return "Side Lower Berth"
  }else if((seat==52||57) && (row==7)){
    return "Lower Berth"
  }else if((seat==53||58) && (row==7)){
    return "Middle Berth"
  }else if((seat==54||59) && (row==7)){
    return "Upper Berth"
  }else if((seat==56) && (row==7)){
    return "Side Upper Berth"
  }else if((seat==63) && (row==7)){
    return "Side Lower Berth"
  }else if((seat==60||65) && (row==8)){
    return "Lower Berth"
  }else if((seat==61||66) && (row==8)){
    return "Middle Berth"
  }else if((seat==62||67) && (row==8)){
    return "Upper Berth"
  }else if((seat==64) && (row==8)){
    return "Side Upper Berth"
  }else if((seat==71) && (row==8)){
    return "Side Lower Berth"
  }else if((seat==68) && (row==9)){
    return "Lower Berth"
  }else if((seat==69) && (row==9)){
    return "Middle Berth"
  }else if((seat==70) && (row==9)){
    return "Upper Berth"
  }else if((seat==72) && (row==9)){
    return "Side Upper Berth"
  }else{
    return "Invalid Operation"
  }
}

//Ex:1
console.log("Input:\nSeat Number:4\nRow Number:1")
console.log("Output:\nYour Seat is: "+Arrangement(4,1))

//Ex:2
console.log("Input:\nSeat Number:72\nRow Number:9")
console.log("Output:\nYour Seat is: "+Arrangement(72,9))

//Ex:3
console.log("Input:\nSeat Number:75\nRow Number:11")
console.log("Output:\nYour Seat is: "+Arrangement(75,10))

