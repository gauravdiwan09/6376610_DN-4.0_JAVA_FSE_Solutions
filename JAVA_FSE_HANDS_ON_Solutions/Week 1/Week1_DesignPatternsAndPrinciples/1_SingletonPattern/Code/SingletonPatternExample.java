package Code;

public class SingletonPatternExample {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("Logging from logger1");
        logger2.log("Logging from logger2");

        if (logger1 == logger2) {
            System.out.println("Same instance");
        } 
        
        else {
            System.out.println("Different instances");
        }
    }
}
