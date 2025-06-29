package junit_setup;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calc;
    
    @Before
    public void setUp() {
        System.out.println("Setup: Creating Calculator instance");
        calc = new Calculator();
    }
    
    @After
    public void tearDown() {
        System.out.println("Teardown: Cleaning up Calculator instance");
        calc = null;
    }
    
    @Test
    public void testAdd() {
 
        int a = 3;
        int b = 4;

 
        int result = calc.add(a, b);

 
        assertEquals(7, result);
    }

    @Test
    public void testSubtract() {
 
        int a = 10;
        int b = 4;

    
        int result = calc.subtract(a, b);

   
        assertEquals(6, result);
    }
}
