1.The spec file 'searchIngoogle.cy.js' 
	opens google chrome and search for specic word 'cypress' then verifies the results count greater than 180000000.
	Verifies the seconds the google took for results to be less than 1 second.
2.Spec file ' amazonlogin.cy.js'
	Opens chrome and navigates to amazon mouse hover and clicks on sign-in 
	Verifies 'continue' and then enter the email click on continue.
	Enter the password and click on sign-in
	Verfies url location equal to 'https://www.amazon.in/?ref_=nav_signin'
	Verifies the right side profile name to be naveen 
	Verifies the delivery location to be Hyderabad 502319 
	Clicks on sign-out
	
	Another it block verifies the invalid password testcase and verifies the alert.

Steps to intiate the npm directory.
1.create folder
2.npm init
3.npm install cypress --save -dev

Steps to follow to run the script:
1.Open the terminal and type npx cypress open
2.Select the spec file to run and it gets ran.
3.To run in head less mode type npm run 'cy:headless:Chrome'	

