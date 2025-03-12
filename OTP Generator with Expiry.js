function createOTPSystem(){
    let count=0
    let OTP = null 
    return {
        generateOTP : function (){
            let value = ""
            let numbers="0123456789"
            for(let i=0;i<6;i++){
                value+=numbers[Math.floor(Math.random()*numbers.length)]// in gives one number(index) in the numbers array 
            }
            value = Number(value)
            OTP=value 
            return ("Your OTP is: "+OTP)
        },
        getOTP: function(){
            count++
            if(count==2){
                count=0
                return ("OTP expired")
                
            }else{
                return OTP
            }
        }
    }
}
const otpSystem = createOTPSystem();  
console.log(otpSystem.generateOTP()); // "Your OTP is: 482193"  
console.log(otpSystem.getOTP());      // "482193"  
console.log(otpSystem.getOTP());      // "OTP expired"  
console.log(otpSystem.generateOTP()); // "Your OTP is: 739182"  
console.log(otpSystem.getOTP());      // "739182"  
console.log(otpSystem.getOTP()); 
console.log(otpSystem.generateOTP()); // "Your OTP is: 482193"  
console.log(otpSystem.getOTP());      // "OTP expired"  
