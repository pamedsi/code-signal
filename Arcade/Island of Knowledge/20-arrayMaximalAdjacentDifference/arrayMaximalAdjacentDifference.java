int solution(int[] inputArray) {
        int maximalDifference = Math.abs(inputArray[0] - inputArray[1]);
        for (int i = 1; i < inputArray.length - 1; i++) {
        int currentDifference = Math.abs(inputArray[i] - inputArray[i + 1]);
        if (currentDifference > maximalDifference) maximalDifference = currentDifference;
        }

        return maximalDifference;
        }