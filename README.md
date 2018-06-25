# Welcome to sports-app

Developed using Ruby on Rails with [React](https://github.com/facebook/react/) front end, [Material-ui](https://material-ui.com) components and styling, free fonts from [Font-awesome](https://fontawesome.com), and tested using [Rspec](http://rspec.info)

### How to setup
* Install ruby 2.4.2
* clone the repo
* run `bundle install`
* run `yarn install`

### How to test
* run `bundle exec rspec`

### How to run
* run `yarn dev`

### visit a live version of deployed application
* https://arcane-stream-75830.herokuapp.com


### Additional info and to-dos
* Add separate route for "my profile" that utilizes current profile page based on logged-in user
* Current public profile view shows "edit" which will be only for logged in user visiting "my profile"
* Edit profile only updates react state, rails call should be added to presist in database
* ActiveRecord validations should be added to prevent corruption of data, not added yet as we dont have create/edit.
* Add more tests for better coverate
* Add front-end tests using jasmine
* Add Feature tests using capybara/selenium 
