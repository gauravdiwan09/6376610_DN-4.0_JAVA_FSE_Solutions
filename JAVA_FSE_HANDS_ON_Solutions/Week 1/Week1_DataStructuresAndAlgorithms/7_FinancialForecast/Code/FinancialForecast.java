public class FinancialForecast {

    public static double forecast(double initialAmount, double growthRate, int years) {
        if (years == 0) {
            return initialAmount;
        }

        return forecast(initialAmount, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        double initial = 10000;
        double rate = 0.10;
        int years = 5;

        double futureValue = forecast(initial, rate, years);
        System.out.printf("Future Value after %d years: %.3f Rupees", years, futureValue);
    }
}
