boolean solution(String inputString) {
        try {
            String[] stringNumbers = (inputString.split("\\."));
            if (stringNumbers.length != 4) return false;
            for (String number:stringNumbers) if (number.startsWith("0")&&number.length()>1) return false;
            var numbers = new java.util.ArrayList<>();
            for (String str:stringNumbers){
                int num = Integer.parseInt(str);
                numbers.add(num);
            }
            for(var number:numbers) if(!((int)number >= 0 && (int) number <= 255)) return false;
            return true;
        }
        catch(java.lang.Exception e){
            return false;
        }
}