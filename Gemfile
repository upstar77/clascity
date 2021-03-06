source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.4'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'
# Use Puma as the app server
gem 'puma', '~> 3.7'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

gem 'devise', '~> 4.3'

gem 'jquery-rails', '~> 4.3', '>= 4.3.1'

gem 'simple_form', '~> 3.5'

gem 'country_select', require: 'country_select_without_sort_alphabetical'

gem 'enumerize', '~> 2.0'

gem 'popper_js', '~> 1.12', '>= 1.12.5'

gem 'cocoon', '~> 1.2', '>= 1.2.9'

gem 'pundit', '~> 1.1'

gem 'carrierwave', '~> 1.1'

gem 'file_validators', '~> 2.1'

gem 'omniauth-facebook', '~> 4.0'

gem 'webpacker', '~> 3.0', '>= 3.0.1'

gem 'activerecord-postgres-earthdistance', '~> 0.5.2'

gem 'pg_search', '~> 2.1', '>= 2.1.1'

gem 'database_cleaner', '~> 1.6', '>= 1.6.1'

gem 'hairtrigger', '~> 0.2.20'

gem 'active_model_serializers', '~> 0.10.6'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop executionand get a debugger
  # console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.13'
  gem 'faker', '~> 1.6', '>= 1.6.6'
  gem 'rspec-rails', '~> 3.6', '>= 3.6.1'
  gem 'selenium-webdriver'
  gem 'shoulda-matchers', '~> 3.1', '>= 3.1.1'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %>
  # anywhere in the code.
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'rubocop', '~> 0.50.0', require: false
  # Spring speeds up development by keeping your application running in the
  # background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :test do
  gem 'factory_girl_rails', '~> 4.8'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
