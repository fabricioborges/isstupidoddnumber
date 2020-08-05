class NumberService {
    isStupidOddNumber(number: string): boolean {
       
        if(number.length > 1000) return false;
        
        if(Number.parseInt(number) < 10) return false;

        const stringToNumber: number = Number.parseInt(number);

        return stringToNumber % 2 ? true : false
    }
}

export default NumberService;