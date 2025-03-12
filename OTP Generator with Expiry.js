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
            value = Number(value)// value is random OTP
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
console.log(otpSystem.generateOTP());  
console.log(otpSystem.getOTP());       
console.log(otpSystem.getOTP());      // "OTP expired"  
console.log(otpSystem.generateOTP());   
console.log(otpSystem.getOTP());      
console.log(otpSystem.getOTP()); // OTP expired
console.log(otpSystem.generateOTP());  
console.log(otpSystem.getOTP());      // "OTP expired"  
