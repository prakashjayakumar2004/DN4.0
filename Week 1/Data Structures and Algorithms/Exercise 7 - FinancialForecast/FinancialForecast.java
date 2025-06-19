import java.util.Scanner;

public class FinancialForecast {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter amount : ");
        double amount = sc.nextDouble();
        System.out.print("Enter rate : ");
        double rate = sc.nextDouble();
        System.out.print("Enter number of years : ");
        double yrs = sc.nextDouble();

        System.out.println("Forecasted amount : "+calcForecast(amount,rate,yrs));
    }

    public static double calcForecast(double amount, double rate, double yrs){
        if(yrs == 0)
            return amount;
        return calcForecast(amount * (1+rate),rate,yrs - 1);
    }
}
