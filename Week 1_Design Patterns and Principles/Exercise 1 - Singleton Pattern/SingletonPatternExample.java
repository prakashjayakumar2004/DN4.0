import org.w3c.dom.ls.LSOutput;

public class SingletonPatternExample {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("This is the Logger 1 message");
        logger2.log("This is the Logger 2 message");

        if(logger1 == logger2)
            System.out.println("Both are same instance. Singleton works!");
        else
            System.out.println("Both are different instances. Singleton failed!");
    }
}
 class Logger{
    private static Logger instance;

    private Logger(){
        System.out.println("Logger instance created");
    }
    public static Logger getInstance(){
        if(instance == null){
            instance = new Logger();
        }
            return instance;
    }
    public void log(String msg){
        System.out.println(msg);
    }
 }