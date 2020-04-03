Feature: FB signup using Datatable

Scenario: Verify Facebook singup

Given browser window is Opened
When user launches Facebook URL
And user enteres firstname and surname and mobilenumber and date and month and year
| firstname | surname | mobilenumber | date | month | year  |
| test      | test1   | 01234567989  | 2    | Apr   | 2020  |
And user clicks singup button
Then User gets warning message