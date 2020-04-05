Feature: Verify Facebook signup using POM

Scenario Outline: Provide Signup details for Facebook

Given browser window is Opened
When user launches Facebook URL
And user enteres "<firstname>" and "<surname>" and "<mobilenumber>" and "<date>" and "<month>" and "<year>"
And user clicks singup button
Then User gets warning message

Examples:
 		| firstname | | surname  | | mobilenumber | | date | | month | | year |
    	| test123   | | test1    | | 0123456789   | | 2    | | Apr   | | 2020 |
#    	| test124   | | test2    | | 0123456789   | | 2    | | May   | | 2020 |
#    	| test125   | | test3    | | 0123456789   | | 2    | | Apr   | | 2020 |
#    	| test126   | | test4    | | 0123456789   | | 2    | | Apr   | | 2020 |
#    	| test127   | | test5    | | 0123456789   | | 2    | | Apr   | | 2020 |
#	   	| test129   | | test6    | | 0123456789   | | 2    | | Apr   | | 2020 |