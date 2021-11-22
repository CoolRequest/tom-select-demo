# README

This is an example app showing examples of using [tom-select](https://tom-select.js.org/) in a Rails 7 app with stimulus, as described in [this blog post]().

See it in action at [http://tom-select.herokuapp.com/](http://tom-select.herokuapp.com/)

## Prerequisites
* Ruby 3.0.2
* foreman
* A postgresql database

## How to get it running in development

Clone this Repository

Install Dependencies:

`bundle`

`yarn`

Create the database

`bundle exec rake db:create`

`bundle exec rake db:migrate`

`bundle exec rake db:seed`

Start the Application:

`foreman start -f Procfile.dev`
