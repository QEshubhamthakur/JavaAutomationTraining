$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "Calculator",
  "description": "  As a user\n  I want to use a calculator\n  So that I don\u0027t need to calculate myself",
  "id": "calculator",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 13,
  "name": "Add two numbers",
  "description": "",
  "id": "calculator;add-two-numbers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I add 1 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the result should be 3",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.i_have_a_calculator()"
});
formatter.result({
  "duration": 113541723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 6
    },
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "StepDefs.i_add_and(String,String)"
});
formatter.result({
  "duration": 4336817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 21
    }
  ],
  "location": "StepDefs.the_result_should_be(int)"
});
formatter.result({
  "duration": 3853765,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Add two numbers",
  "description": "",
  "id": "calculator;add-two-numbers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I add a and b",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the result should be 3",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.i_have_a_calculator()"
});
formatter.result({
  "duration": 33017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 6
    },
    {
      "val": "b",
      "offset": 12
    }
  ],
  "location": "StepDefs.i_add_and(String,String)"
});
formatter.result({
  "duration": 895803,
  "error_message": "com.qait.math.InputNotANumberException: The number entered can only be a number\n\tat com.qait.math.Math.add(Math.java:20)\n\tat com.qait.math.StepDefs.i_add_and(StepDefs.java:19)\n\tat ✽.When I add a and b(test.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 21
    }
  ],
  "location": "StepDefs.the_result_should_be(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Add two numbers",
  "description": "",
  "id": "calculator;add-two-numbers;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I add -1 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the result should be 1",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.i_have_a_calculator()"
});
formatter.result({
  "duration": 35437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-1",
      "offset": 6
    },
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "StepDefs.i_add_and(String,String)"
});
formatter.result({
  "duration": 127380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "StepDefs.the_result_should_be(int)"
});
formatter.result({
  "duration": 91403,
  "status": "passed"
});
});