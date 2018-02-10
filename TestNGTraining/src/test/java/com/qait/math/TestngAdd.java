package com.qait.math;

import org.testng.annotations.Test;
import static org.testng.Assert.*;

public class TestngAdd{

   @Test
   public void testPositiveScenario(){
       Math math = new Math();
       int result = math.add("4", "2");
       assertEquals(5, result);
   }
   
   @Test (expectedExceptions = InputNotANumberException.class)
   public void testExceptionScenario(){
       Math math = new Math();
      // math.throwException();
       int result = math.add("4", "2");
       assertEquals(3, result);
   }
   
   @Test (dependsOnMethods = {"testPositiveScenario"})
   public void testDependency(){
       Math math = new Math();
       int result = math.add("4", "2");
       assertEquals(3, result);
   }
   
   
}