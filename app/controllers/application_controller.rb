class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :configure_devise_sanitizer, if: :devise_controller?

  protected

  def devise_permitted_params
    [:first_name, :last_name, :phone, :birthday, :country_code, :city]
  end

  def configure_devise_sanitizer
    devise_parameter_sanitizer.permit(:sign_up, keys: devise_permitted_params)
    devise_parameter_sanitizer.permit(:account_update, keys: devise_permitted_params)
  end
end
